<script lang="ts">
    import type { RoverManifest, RoverName } from 'src/types';

    import PhotoSearchForm from './PhotoSearchForm.svelte';
    import NasaAPI from '../lib/NasaAPI';
    import { capitalize, SessionStore } from '../lib/utils';

    import { overlayMessage } from '../stores';

    const DEBUG = false;

    export let roverName: RoverName;

    const getManifest = async (name: RoverName): Promise<RoverManifest> => {
        // try to get the manifest from storage
        let manifest = SessionStore.get(name);

        if (manifest) {
            DEBUG && console.log('Return Manifest from storage', manifest);
            return manifest;
        }

        // else fetch it and save it in storage
        try {
            manifest = await NasaAPI.fetchManifest(name);
            SessionStore.set(manifest);

            DEBUG && console.log('Return Manifest from API', manifest);

            return manifest;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }

            // Show Error in Overlay when fetch fails
            overlayMessage.show('Error', 'Could not fetch Manifest from the NASA API');
        }
    };
</script>

<div class="rover-manifest">
    <!-- If not stored, request it from NASA API -->
    {#await getManifest(roverName)}
        <span>...loading</span>
    {:then manifest}
        <h2>{capitalize(manifest.name)}</h2>
        <table>
            {#each Object.entries(manifest) as [key, value]}
                {#if key !== 'photos' && key !== 'name'}
                    <tr>
                        <th>{capitalize(key).replace('_', ' ')}</th>
                        <td>{value}</td>
                    </tr>
                {/if}
            {/each}
        </table>
        <PhotoSearchForm {manifest} on:message />
    {/await}
</div>

<style lang="scss">
    .rover-manifest {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 10px;

        background-color: #c5d3ff;

        h2 {
            text-align: center;
        }

        table {
            width: 100%;
            margin-bottom: 1rem;
        }

        tr {
            border-bottom: 1px solid #000;
        }

        th {
            text-align: start;
        }

        td {
            text-align: end;
        }
    }
</style>

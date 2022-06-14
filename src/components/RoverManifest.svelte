<script lang="ts">
    import type { RoverManifest, RoverName } from 'src/types';

    import PhotoSearchForm from './PhotoSearchForm.svelte';
    import NasaAPI from '../lib/NasaAPI';
    import { capitalize, SessionStore } from '../lib/utils';

    import { infoMsg } from '../stores';

    const DEBUG = true;

    export let roverName: RoverName;

    // Old technique without store
    const getManifest = async (name: RoverName): Promise<RoverManifest> => {
        let manifest = SessionStore.get(name);

        if (manifest) {
            DEBUG && console.log('Return Manifest from storage');
            return manifest;
        }

        try {
            manifest = await NasaAPI.fetchManifest(name);
            SessionStore.set(manifest);

            DEBUG && console.log('Return Manifest from API');
            return manifest;
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
            // Show InfoPopover when fetch fails
            infoMsg.show('Could not fetch Manifest from the NASA API');
        }
    };

    // ManifestStore.subscribe((data: RoverManifest) => {
    //     manifest = data;
    // });

    // onMount(async () => {
    //     const tmp = SessionStore.get(roverName);

    //     if (tmp) {
    //         manifest = tmp;
    //         console.log(`Got ${manifest.name} Manifest from sessionStorage.`);
    //         return; // early
    //     }

    //     try {
    //         manifest = await NasaAPI.fetchManifest(roverName);
    //         console.log(`Got ${manifest.name} Manifest from API.`);
    //     } catch (err: unknown) {
    //         throw err;
    //     }
    // });
</script>

<div class="rover-manifest">
    <!-- If not stored, request it from NASA API -->
    {#await getManifest(roverName)}
        <span>...loading</span>
    {:then manifest}
        <h3>{capitalize(manifest.name)}</h3>
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

        h3 {
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

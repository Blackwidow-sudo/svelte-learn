<script lang="ts">
    import type { RoverName } from 'src/types';
    import NasaAPI from '../lib/NasaAPI';

    export let roverName: RoverName = undefined;
</script>

{#if roverName}
    <div class="rover-manifest">
        <h3>{roverName}</h3>
        {#await NasaAPI.fetchManifest(roverName)}
            <span>...waiting for Manifest</span>
        {:then manifest}
            <table>
                {#each Object.entries(manifest) as [key, value]}
                    {#if key !== 'photos'}
                        <tr>
                            <th>{key.replace('_', ' ')}</th>
                            <td>{value}</td>
                        </tr>
                    {/if}
                {/each}
            </table>
        {/await}
    </div>
{/if}

<style lang="scss">
    .rover-manifest {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 10px;

        background-color: #c5d3ff;

        h3 {
            text-align: center;
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

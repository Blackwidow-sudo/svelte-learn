<script lang="ts">
    import type { RoverName } from "src/types";

    export let showManifest

    let selectedRover: RoverName

    
</script>

<div class="rover-manifest">
    {#if showManifest}
        <input type="number" min="0" />
    {/if}
</div>

<style lang="scss">
    .rover-manifest {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #aaa;
    }
</style>
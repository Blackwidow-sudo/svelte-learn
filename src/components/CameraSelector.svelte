<script lang="ts">
    export let roverCameras: { [abbr: string]: string };
</script>

<div>
    <label for="camera">Camera:</label>
    <select name="camera" id="camera">
        {#if roverCameras}
            <option value="none" disabled selected>Select a Camera</option>
            {#each Object.entries(roverCameras) as [camera, description]}
                <option value={camera.toLowerCase()} title={description}>{camera}</option>
            {/each}
        {:else}
            <option value="none" disabled selected>No Cameras available</option>
        {/if}
    </select>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5px;

        width: 100%;
    }
</style>

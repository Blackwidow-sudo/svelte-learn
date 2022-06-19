<script lang="ts">
    export let roverCameras: { [abbr: string]: string };

    const handleChange = () => {};
</script>

<div>
    <label for="camera">Camera:</label>
    <select name="camera" id="camera" on:change={handleChange}>
        <option value="none" disabled selected>Select a Camera</option>
        {#each Object.entries(roverCameras) as [camera, description]}
            <option value={camera.toLowerCase()} title={description}>{camera}</option>
        {/each}
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

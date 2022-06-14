<script lang="ts">
    export let roverCameras: { [abbr: string]: string };

    const handleChange = () => {};
</script>

<select name="camera" id="camera" on:change={handleChange}>
    <option value="none" disabled selected>Select a Camera</option>
    {#each Object.entries(roverCameras) as [camera, description]}
        <option value={camera.toLowerCase()} title={description}>{camera}</option>
    {/each}
</select>

<style lang="scss">
</style>

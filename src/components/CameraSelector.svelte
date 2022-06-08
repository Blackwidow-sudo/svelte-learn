<script lang="ts">
    import type { CamAbbr } from 'src/types';

    export let availableCameras: CamAbbr[];
</script>

<select name="camera" id="camera" on:change>
    <option value="none" disabled selected>Select a Camera</option>
    {#each availableCameras as camera}
        <option value={camera.toLowerCase()}>{camera}</option>
    {/each}
</select>

<style lang="scss">
</style>

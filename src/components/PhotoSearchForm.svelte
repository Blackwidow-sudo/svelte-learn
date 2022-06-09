<script lang="ts">
    import type { RoverManifest } from '../types';
    import CameraSelector from './CameraSelector.svelte';
    import DayInput from './DayInput.svelte';
    import { getRoverCams } from '../lib/utils';

    export let manifest: RoverManifest;

    let roverCameras = getRoverCams(manifest.name);
</script>

<div class="form">
    <DayInput {manifest} selectedDay="0" />

    <label for="pages"> Pages (25 items per page): </label>
    <input type="number" min="0" max="10" id="pages" placeholder="1" value="1" />
    <CameraSelector {roverCameras} />

    <input type="button" name="submit" id="submit" value="Search Photos" />
</div>

<style lang="scss">
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
</style>

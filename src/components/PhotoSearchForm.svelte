<script lang="ts">
    import type { RoverManifest } from '../types';
    import CameraSelector from './CameraSelector.svelte';
    import DayInput from './DayInput.svelte';
    import { getRoverCams } from '../lib/utils';

    export let manifest: RoverManifest;

    let roverCameras = getRoverCams(manifest.name);

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        const fd = new FormData(e.target as HTMLFormElement);
        const formProps = Object.fromEntries(fd);

        console.log(formProps);

        return false;
    };
</script>

<form on:submit={handleSubmit}>
    <DayInput {manifest} selectedDay="0" />

    <div>
        <label for="pages">Pages (25 items per page):</label>
        <input
            type="number"
            name="pages"
            id="pages"
            min="0"
            max="10"
            placeholder="1"
            value="1"
        />
    </div>

    <CameraSelector {roverCameras} />

    <input type="submit" name="submit" id="submit" value="Search Photos" />
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    div {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
    }
</style>

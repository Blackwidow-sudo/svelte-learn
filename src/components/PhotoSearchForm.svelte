<script lang="ts">
    import type { CamAbbr, DateString, RoverManifest } from '../types';
    import CameraSelector from './CameraSelector.svelte';
    import DayInput from './DayInput.svelte';
    import { formDataStore } from '../stores';
    import { cameraDescriptions } from '../globals';

    export let manifest: RoverManifest;

    let selectedDay: string | number = 0;
    $: roverCameras = getAvailableCameras(selectedDay);

    function getAvailableCameras(day: number | string) {
        console.log(manifest.photos);
        const dayInfo = manifest.photos.find((photo) => {
            if (photo.earth_date === day || photo.sol == day) {
                return true;
            }
            return false;
        });

        const availCams = {};

        if (dayInfo) {
            dayInfo.cameras.forEach((cam) => {
                availCams[cam] = cameraDescriptions[cam];
            });

            return availCams;
        }

        return undefined;
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault();

        const fd = new FormData(e.target as HTMLFormElement);
        const formProps = Object.fromEntries(fd);

        formDataStore.set({
            rover: manifest.name,
            camera: formProps.camera as CamAbbr,
            page: parseInt(formProps.pages as string),
            date:
                formProps.dateFormat === 'sol'
                    ? parseInt(formProps.date as string)
                    : (formProps.date as DateString),
        });

        return false;
    };
</script>

<form on:submit={handleSubmit}>
    <DayInput {manifest} bind:selectedDay />

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

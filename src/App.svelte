<script lang="ts">
    import type { RoverName } from './types';
    import { roverNames } from './globals';
    import { capitalize } from './lib/utils';
    import { overlayMessage } from './stores';

    import InfoOverlay from './components/InfoOverlay.svelte';
    import RoverManifest from './components/RoverManifest.svelte';
    import RoverSelector from './components/RoverSelector.svelte';
    import PhotoCollection from './components/PhotoCollection.svelte';

    let roverName: RoverName;

    const setRover = (e: Event) => {
        const selectElem = e.target as HTMLSelectElement;
        const selectedOption = selectElem.item(selectElem.selectedIndex);

        roverName = capitalize(selectedOption.value) as RoverName;
    };
</script>

<main>
    <div id="selectWindow">
        <RoverSelector availableRovers={roverNames} on:change={setRover} />

        {#if roverName}
            <RoverManifest {roverName} />
        {/if}
    </div>

    <div id="outputWindow">
        <PhotoCollection />
    </div>

    <button on:click={() => overlayMessage.show('Info', 'Popover works 😁')}>
        Open Popover
    </button>
    <InfoOverlay />
</main>

<style lang="scss">
    $std-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    :root {
        font-family: $std-font;
    }

    #selectWindow {
        display: inline-block;
        width: 50%;
    }

    #outputWindow {
        display: inline-block;
        width: 50vw;
        height: 100vh;
    }

    /* Temporary styles */
    button {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>

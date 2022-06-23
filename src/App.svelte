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

    main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        grid-auto-rows: 100vh;
    }

    #selectWindow {
        grid-column: 1 / 2;
        grid-row: 1;

        position: fixed;
    }

    #outputWindow {
        grid-column: 2 / 2;
        grid-row: 1;
    }

    // #selectWindow {
    //     position: fixed;
    //     display: inline-block;
    //     width: 50%;
    // }

    // #outputWindow {
    //     max-width: 50vw;
    //     float: right;
    // }

    /* Temporary styles */
    button {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>

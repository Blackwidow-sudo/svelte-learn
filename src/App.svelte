<script lang="ts">
    import type { RoverName } from './types';
    import { roverNames } from './globals';
    import { capitalize } from './lib/utils';
    import { overlayMessage } from './stores';

    import InfoOverlay from './components/InfoOverlay.svelte';
    import RoverManifest from './components/RoverManifest.svelte';
    import RoverSelector from './components/RoverSelector.svelte';

    let roverName: RoverName;

    const setRover = (e: Event) => {
        const selectElem = e.target as HTMLSelectElement;
        const selectedOption = selectElem.item(selectElem.selectedIndex);

        roverName = capitalize(selectedOption.value) as RoverName;
    };
</script>

<main>
    <RoverSelector availableRovers={roverNames} on:change={setRover} />

    {#if roverName}
        <RoverManifest {roverName} />
    {/if}

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

    /* Temporary styles */
    button {
        position: absolute;
        bottom: 0;
        right: 0;
    }
</style>

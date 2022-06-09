<script lang="ts">
    import type { RoverName } from './types';
    import { createEventDispatcher } from 'svelte';
    import InfoPopover from './components/InfoPopover.svelte';
    import RoverManifest from './components/RoverManifest.svelte';
    import RoverSelector from './components/RoverSelector.svelte';
    import { roverNames } from './globals';
    import { capitalize } from './lib/utils';

    let showPopover = false;
    let popoverMessage: string;

    let roverName: RoverName;

    const setRover = (e: Event) => {
        const selectElem = e.target as HTMLSelectElement;
        const selectedOption = selectElem.item(selectElem.selectedIndex);

        roverName = capitalize(selectedOption.value) as RoverName;
    };

    const togglePopover = (e: Event) => {
        showPopover = !showPopover;
    };

    const handleMessage = (e: CustomEvent) => {
        popoverMessage = e.detail.text;
        togglePopover(e);
    };
</script>

<main>
    <RoverSelector availableRovers={roverNames} on:change={setRover} />

    {#if roverName}
        <RoverManifest {roverName} on:message={handleMessage} />
    {/if}

    <!-- handle the forwarded event -->
    <button on:click={togglePopover}>Open Popover</button>
    <InfoPopover {showPopover} msg={popoverMessage} on:click={togglePopover} />
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

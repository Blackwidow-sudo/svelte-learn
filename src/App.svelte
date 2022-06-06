<script lang="ts">
    import type { RoverName } from './types';
    import InfoPopover from './components/InfoPopover.svelte';
    import RoverManifest from './components/RoverManifest.svelte';
    import RoverSelect from './components/RoverSelect.svelte';
    import { roverNames } from './globals';
    import { capitalize } from './lib/utils';

    let showPopover = false;
    let roverName: RoverName;

    const setRover = (e: Event) => {
        const selectElem = e.target as HTMLSelectElement;
        const selectedOption = selectElem.item(selectElem.selectedIndex);

        roverName = capitalize(selectedOption.value) as RoverName;
    };

    const togglePopover = (e: Event) => {
        showPopover = !showPopover;
    };
</script>

<main>
    <RoverSelect availableRovers={roverNames} on:change={setRover} />

    {#if roverName}
        <RoverManifest {roverName} />
    {/if}

    <!-- handle the forwarded event -->
    <button on:click={togglePopover}>Open Popover</button>
    <InfoPopover {showPopover} msg="Hello From App" on:click={togglePopover} />
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

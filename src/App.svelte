<script lang="ts">
    import type { RoverName } from './types';
    import InfoPopover from './components/InfoPopover.svelte';
    import RoverManifest from './components/RoverManifest.svelte';
    import RoverSelect from './components/RoverSelect.svelte';
    import { roverNames } from './globals';

    let showPopover = false;
    let roverName: RoverName;

    const setRover = (e: Event) => {
        const selectElem = e.target as HTMLSelectElement;
        const selectedOption = selectElem.item(selectElem.selectedIndex);

        roverName = selectedOption.value[0]
            .toUpperCase()
            .concat(selectedOption.value.substring(1)) as RoverName;
    };

    const togglePopover = (e: Event) => {
        showPopover = !showPopover;
    };
</script>

<main>
    <RoverSelect selectItems={roverNames} on:change={setRover} />

    {#if roverName}
        <RoverManifest {roverName} />
    {/if}

    <button on:click={togglePopover}>Open Popover</button>

    <!-- handle the forwarded event -->
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

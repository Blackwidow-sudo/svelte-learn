<script lang="ts">
    import type { RoverName } from 'src/types';

    export let availableRovers: RoverName[];
</script>

<select name="selectRover" id="selectRover" on:change>
    <option value="none" disabled selected>Select a Rover</option>
    {#each availableRovers as rover}
        <option value={rover.toLowerCase()}>{rover}</option>
    {/each}
</select>

<style lang="scss">
</style>

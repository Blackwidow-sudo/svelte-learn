<script lang="ts">
    import type { RoverName } from 'src/types';

    export let selectItems: RoverName[];
</script>

<select name="selectRover" id="selectRover" on:change>
    <option value="none" disabled selected>Select a Rover</option>
    {#each selectItems as item}
        <option value={item.toLowerCase()}>{item}</option>
    {/each}
</select>

<style lang="scss">
    $bg: #99d6d6;

    select {
        background-color: $bg;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 5px 10px;

        cursor: pointer;
    }
</style>

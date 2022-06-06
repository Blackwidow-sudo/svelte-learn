<script lang="ts">
    import type { RoverManifest } from 'src/types';
    import DayInput from './DayInput.svelte';

    export let manifest: RoverManifest;
</script>

<div class="form">
    <DayInput {manifest} selectedDay="0" />

    <label for="pages"> Pages (25 items per page): </label>
    <input type="number" min="0" max="10" id="pages" placeholder="1" value="1" />

    <input type="button" name="submit" id="submit" value="Search Photos" />
</div>

<style lang="scss">
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
</style>

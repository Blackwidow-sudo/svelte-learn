<script lang="ts">
    import { onMount } from "svelte";
    import type { RoverName } from "src/types";
    
    import { roverNames } from "../globals"
import RoverManifest from "./RoverManifest.svelte";

    let selectedRover: RoverName

    onMount(() => {
        const select = document.querySelector("select") as HTMLSelectElement

        roverNames.forEach((name: RoverName) => {
            const option = document.createElement("option")

            option.textContent = name
            option.value = name.toLowerCase()

            select.appendChild(option)
        })
    })
</script>

<select name="selectRover" id="selectRover">
    <option value="none" disabled selected>Select a Rover</option>
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
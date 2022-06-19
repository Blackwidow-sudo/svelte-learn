<script lang="ts">
    import type { RoverManifest } from 'src/types';

    export let manifest: RoverManifest;
    export let selectedDay: number | string;

    const switchInput = () => {
        const dayInput = document.querySelector('#day-input') as HTMLInputElement;

        if (dayInput.type === 'number') {
            dayInput.type = 'date';
            dayInput.min = manifest.landing_date;
            dayInput.max = manifest.max_date;
        } else {
            dayInput.type = 'number';
            dayInput.min = (0).toString();
            dayInput.max = manifest.max_sol.toString();
            dayInput.placeholder = manifest.max_sol.toString();
        }
    };

    const updateDay = (e: Event) => {
        const inputEl = e.target as HTMLInputElement;
        selectedDay = inputEl.value;
    };
</script>

<div class="container">
    <div class="radiogroup" role="radiogroup" on:change={switchInput}>
        <label for="sol">
            <input type="radio" name="dateFormat" id="sol" value="sol" checked />
            By Martian sol
        </label>
        <label for="date">
            <input type="radio" name="dateFormat" id="date" value="date" />
            By Earth date
        </label>
    </div>
    <input
        type="number"
        name="date"
        id="day-input"
        placeholder={manifest.max_sol.toString()}
        on:change={updateDay}
    />
</div>

<style lang="scss">
    .container {
        display: flex;
        flex-direction: column;
    }

    .radiogroup {
        margin: 5px auto;
    }

    #day-input {
        text-align: center;
        letter-spacing: 0.2rem;
    }
</style>

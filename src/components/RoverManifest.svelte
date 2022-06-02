<script lang="ts">
    export let name: string

    function handleChange(e: Event) {
        const input_el = e.target as HTMLInputElement

        name = input_el.value
    }
</script>

<div class="rover-manifest">
    <span>{name}</span>

    <input type="text" name="nameInput" id="nameInput" on:input={handleChange}>
</div>

<style lang="scss">
    .rover-manifest {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #aaa;
    }
</style>
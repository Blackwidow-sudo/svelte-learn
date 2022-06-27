<script lang="ts">
    import { onMount } from 'svelte';

    export let src: string;
    export let alt: string;

    let loaded = false;
    let thisImage: HTMLImageElement;

    onMount(() => {
        thisImage.onload = () => {
            loaded = true;
        };
    });
</script>

<img {src} {alt} class:loaded bind:this={thisImage} referrerpolicy="no-referrer" />

<style>
    img {
        width: 100%;
        min-height: 700px;
        opacity: 0;
        transition: opacity 1200ms ease-out;
    }

    img.loaded {
        opacity: 1;
    }
</style>

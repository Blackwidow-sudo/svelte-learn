<script lang="ts">
    import IntersectionObserver from './IntersectionObserver.svelte';
    import Image from './Image.svelte';

    export let src;
    export let alt;
</script>

<IntersectionObserver once={true} let:intersecting>
    {#if intersecting}
        <Image {src} {alt} />
    {/if}
</IntersectionObserver>

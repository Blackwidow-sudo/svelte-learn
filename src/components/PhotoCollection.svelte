<script lang="ts">
    import type { Photo } from '../types';
    import NasaAPI from '../lib/NasaAPI';
    import { formDataStore } from '../stores';
    import PhotoFigure from './PhotoFigure.svelte';

    let photos: Photo[];

    formDataStore.subscribe((fd) => {
        if (typeof fd !== 'undefined') {
            NasaAPI.fetchPhotos(fd.rover, fd.camera, fd.date, fd.page)
                .then((collection) => {
                    photos = collection;
                })
                .catch((err) => console.error(err));
        }
    });
</script>

{#if photos}
    <div>
        {#each photos as photo}
            <PhotoFigure {photo} />
        {/each}
    </div>
{/if}

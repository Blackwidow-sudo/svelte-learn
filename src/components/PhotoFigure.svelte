<script lang="ts">
    import type { Photo } from '../types';

    export let photo: Photo;
</script>

<figure>
    <img src={photo.img_src} alt={`Photo from ${photo.rover} rover`} />
    <figcaption>
        {`Earth-Date: ${photo.earth_date} / Martian sol: ${photo.sol} `}
    </figcaption>
</figure>

<style lang="scss">
    figure {
        border-radius: 15px;
        padding: 10px;
        background-color: #fff;
        position: relative;

        margin: 0 0 10px 0;
    }

    img {
        width: 100%;
    }

    figcaption {
        position: absolute;
        top: 0;
        left: 0;

        background-color: #000;
        color: #fff;
        padding: 5px 10px;
    }
</style>

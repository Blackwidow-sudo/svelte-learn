<script lang="ts">
    export let showInfo: boolean
    export let msg: string

    function handleClose(e: Event) {
        
    }
</script>

{#if showInfo}
    <!-- Forward the Event to the Component that mounts this component -->
    <div class="info-popover" on:click>
        <div id="message-box">{ msg }</div>
        <span>Click anywhere to close this message</span>
    </div>
{/if}

<style lang="scss">
    .info-popover {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;

        width: 100vw;
        height: 100vh;

        color: var(--infopop-color, #ffffff);
        background-color: var(--infopop-bg, rgba(0, 0, 0, 0.6));

        cursor: pointer;

        span {
            padding: 5px 10px;
            background-color: #000;
        }
    }
</style>
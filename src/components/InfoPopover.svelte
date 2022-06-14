<!-- 
    @component 

    Renders a Info-Message as an Overlay on the Site.
    Messages are received by the `infoMsg` store.
 -->
<script lang="ts">
    import { infoMsg } from '../stores';

    let msg: string;

    infoMsg.subscribe((value) => {
        msg = value;
    });
</script>

{#if msg}
    <!-- Forward the Event to the Component that mounts this component -->
    <div class="info-popover" on:click={() => infoMsg.reset()}>
        <div id="message-box">
            <h3>Info</h3>
            <p>{msg}</p>
        </div>
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

    #message-box {
        padding: 10px 20px;
        margin-bottom: 10px;
        border-radius: 10px;
        background: var(--info-msg-bg, #fff);
        color: var(--info-msg-color, #000);

        h3 {
            text-align: center;
        }
    }
</style>

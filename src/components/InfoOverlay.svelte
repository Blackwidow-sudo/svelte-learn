<script lang="ts">
    import { overlayMessage } from '../stores';

    let title: string;
    let message: string;

    overlayMessage.subscribe((msg) => {
        title = msg.title;
        message = msg.message;
    });
</script>

<!-- 
    @component
    Component that renders an Overlay on the site to show a feedback message to the user.

    Usage:
    This component is controlled by a store that sets the `title` and `message` properties.
 -->
{#if title && message}
    <!-- Forward the Event to the Component that mounts this component -->
    <div class="info-popover" on:click={() => overlayMessage.reset()}>
        <div id="message-box">
            <h3>{title}</h3>
            <p>{message}</p>
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

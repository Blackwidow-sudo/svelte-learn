<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './components/Counter.svelte'
  import InfoPopover from './components/InfoPopover.svelte';

  let showInfo = false

  function toggleInfo(e: Event) {
    showInfo = !showInfo
  }
</script>

<main>
  <button on:click={toggleInfo}>Open Popover</button>

  <!-- handle the forwarded event -->
  <InfoPopover {showInfo} msg="Hello From App" on:click={toggleInfo} />
</main>

<style lang="scss">
  $std-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  :root {
    font-family: $std-font;
  }
</style>

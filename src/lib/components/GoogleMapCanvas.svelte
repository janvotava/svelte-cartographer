<script lang="ts">
  import { key } from "$lib/contexts"
  import { getContext } from "svelte"

  let canvasElement: HTMLDivElement

  const { setCanvas } = getContext(key)

  $: setCanvas(canvasElement)
</script>

<div
  class="svelte-cartographer-canvas-default"
  bind:this={canvasElement}
  {...$$restProps}
/>

<style>
  .svelte-cartographer-canvas-default {
    width: 100%;
    height: 100%;
    min-height: 400px;
    flex: 1;
  }
</style>

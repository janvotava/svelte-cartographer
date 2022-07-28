<script lang="ts">
  import './global.css';

  import type { SvelteComponent } from 'svelte';

  export let component: typeof SvelteComponent;
</script>

<svelte:component this={component} />

<style>
  :global(.page) {
    /* flex-direction: column; */
    height: 100%;
    width: 100%
  }

  :global(.page__container) {
    /* flex: 1; */
    height: 100%;
    width: 100%
  }
</style>
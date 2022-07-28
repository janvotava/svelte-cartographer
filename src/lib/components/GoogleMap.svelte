<script lang="ts">
  import { key } from "$lib/contexts"

  import { Loader } from "@googlemaps/js-api-loader"
  import { onMount, setContext } from "svelte"

  export let apiKey: string
  export let lat: number
  export let lng: number
  export let zoom = 4

  // NOTE: Parent component can bind to this property to access
  // the map object.
  export let map: google.maps.Map | undefined = undefined

  let container: HTMLDivElement

  async function load() {
    const loader = new Loader({
      version: "weekly",
      apiKey,
      libraries: ["places"],
    })
    const google = await loader.load()

    const mapOptions = {
      center: {
        lat,
        lng,
      },
      zoom,
    }

    map = new google.maps.Map(container, mapOptions)
  }

  function updateOptions(lat: number, lng: number, zoom: number) {
    if (!map) {
      return
    }

    map.setOptions({
      center: {
        lat,
        lng,
      },
      zoom
    })
  }

  onMount(load)

  setContext(key, {
    getMap: () => map,
  })

  $: updateOptions(lat, lng, zoom)
</script>

{#if map}
  <slot />
{/if}

<slot name="container">
  <div class="container" bind:this={container} />
</slot>

<style>
  .container {
    width: 100%;
    height: 100%;
    min-height: 340px;
  }
</style>

<script lang="ts">
  import { key } from "$lib/contexts"
  import { Loader } from "@googlemaps/js-api-loader"
  import { onMount, setContext, tick } from "svelte"
  import GoogleMapCanvas from "./GoogleMapCanvas.svelte"

  export let apiKey: string
  export let lat: number
  export let lng: number
  export let zoom = 4

  // NOTE: Parent component can bind to this property to access
  // the map object.
  export let map: google.maps.Map | undefined = undefined

  let isDefaultContainerVisible = false
  let container: HTMLDivElement | undefined

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

    if (!container) {
      isDefaultContainerVisible = true
      await tick()
    }

    if (!container) {
      throw new Error("Failed to inject default container.")
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
      zoom,
    })
  }

  onMount(load)

  setContext(key, {
    getMap() {
      return map
    },
    setCanvas(canvas: HTMLDivElement) {
      container = canvas
    },
  })

  $: updateOptions(lat, lng, zoom)
</script>

<slot />

{#if isDefaultContainerVisible}
  <GoogleMapCanvas />
{/if}

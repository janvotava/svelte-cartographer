<script lang="ts">
  import { key, type Context } from "$lib/contexts"
  import type {
    GoogleMaybe,
    GoogleMapMaybe,
    GoogleMapOptions,
  } from "$lib/types"
  import { Loader } from "@googlemaps/js-api-loader"
  import { createEventDispatcher, onMount, setContext, tick } from "svelte"
  import { writable } from "svelte/store"
  import GoogleMapCanvas from "./GoogleMapCanvas.svelte"

  const dispatch = createEventDispatcher()

  export let apiKey: string
  export let options: GoogleMapOptions

  let google = writable<GoogleMaybe>()

  // NOTE: Parent component can bind to this property to access
  // the map object.
  export let map = writable<GoogleMapMaybe>()

  let isDefaultContainerVisible = false
  let canvas: HTMLDivElement | undefined

  async function load() {
    const loader = new Loader({
      version: "weekly",
      apiKey,
      libraries: ["places"],
    })
    $google = await loader.load()

    if (!canvas) {
      isDefaultContainerVisible = true
      await tick()
    }

    if (!canvas) {
      throw new Error("Failed to inject default container.")
    }

    $map = new $google.maps.Map(canvas, options)

    $map.addListener("click", (event: google.maps.MapMouseEvent) => {
      dispatch("click", event)
    })
  }

  function updateOptions(options: GoogleMapOptions) {
    if (!$map) {
      return
    }

    $map.setOptions(options)
  }

  onMount(load)

  setContext<Context>(key, {
    getGoogle() {
      return google
    },
    getMap() {
      return map
    },
    setCanvas(newCanvas: HTMLDivElement) {
      canvas = newCanvas
    },
  })

  $: updateOptions(options)
</script>

<slot />

{#if isDefaultContainerVisible}
  <GoogleMapCanvas />
{/if}

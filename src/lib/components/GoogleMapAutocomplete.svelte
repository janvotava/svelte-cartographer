<script lang="ts">
  import { key, type Context } from "$lib/contexts"
  import type { Google } from "$lib/types"
  import { getContext, createEventDispatcher } from "svelte"

  const { getMap, getGoogle } = getContext<Context>(key)
  const google = getGoogle()
  const map = getMap()

  // NOTE: Bindable to get current value in the input. It does not manage switch on autocomplete
  // in `place_changed` event though. This value modification should be managed outside of this
  // addon for now.
  export let value: string | undefined = undefined
  let inputElement: HTMLInputElement

  const dispatch = createEventDispatcher()

  function load(google: Google, map: google.maps.Map) {
    const autocomplete = new google.maps.places.Autocomplete(inputElement)

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace()

      dispatch("change", place)
    })

    autocomplete.bindTo("bounds", map)
  }

  $: $google && $map && load($google, $map)
</script>

<!-- TODO: Allow to set custom Input element -->
<input bind:this={inputElement} type="text" bind:value {...$$restProps} />

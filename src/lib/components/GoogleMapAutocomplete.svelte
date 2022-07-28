<script lang="ts">
  import { key, type Context } from "$lib/contexts"
  import type { Google } from "$lib/types"
  import { getContext, createEventDispatcher } from "svelte"

  const { getMap, getGoogle } = getContext<Context>(key)
  const google = getGoogle()
  const map = getMap()

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
<input bind:this={inputElement} {...$$restProps} />

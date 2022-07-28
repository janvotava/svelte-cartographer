<script lang="ts">
  import { key } from "$lib/contexts"
  import { getContext, onMount, createEventDispatcher } from "svelte"

  const { getMap } = getContext(key)
  const map = getMap()

  let inputElement: HTMLInputElement

  const dispatch = createEventDispatcher()

  onMount(() => {
    const autocomplete = new google.maps.places.Autocomplete(
      inputElement,
    )

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace()

      dispatch("change", place)
    })

    autocomplete.bindTo("bounds", map);
  })
</script>

<slot>
  <input bind:this={inputElement} />
</slot>

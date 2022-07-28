<script lang="ts">
  import { key } from "$lib/contexts"
  import { getContext } from "svelte"

  const { getMap } = getContext(key)
  const map = getMap()

  type Icon = string | null | google.maps.Icon | google.maps.Symbol

  export let lat: number
  export let lng: number
  export let icon: Icon = null

  let marker = new window.google.maps.Marker({
    position: { lat, lng },
    icon,
    map,
  })

  function updateOptions(lat: number, lng: number, icon: Icon) {
    marker.setOptions({
      position: {
        lat,
        lng,
      },
    })
  }

  $: updateOptions(lat, lng, icon)
</script>

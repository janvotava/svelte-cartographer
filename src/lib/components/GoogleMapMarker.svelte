<script lang="ts">
  import { type Context, key } from "$lib/contexts"
  import type { Google } from "$lib/types"
  import { getContext } from "svelte"

  const { getMap, getGoogle } = getContext<Context>(key)

  type Icon = string | null | google.maps.Icon | google.maps.Symbol

  export let lat: number
  export let lng: number
  export let icon: Icon = null

  let marker: google.maps.Marker | undefined

  const google = getGoogle()
  const map = getMap()

  async function load(google: Google, map: google.maps.Map) {
    marker = new google.maps.Marker({
      position: { lat, lng },
      icon,
      map,
    })
  }

  function updateOptions(lat: number, lng: number, icon: Icon) {
    if (!marker) {
      return
    }

    marker.setOptions({
      position: {
        lat,
        lng,
      },
    })
  }

  $: $google && $map && load($google, $map)
  $: updateOptions(lat, lng, icon)
</script>

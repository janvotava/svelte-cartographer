<script lang="ts" context="module">
  import type { PageMeta } from "@vitebook/client"

  export const __pageMeta: PageMeta = {
    title: "GoogleMapMarker",
    description: "A marker identifies a location on a map.",
  }
</script>

<script lang="ts">
  import { GoogleMapMarker } from "$lib"
  import { Variant } from "@vitebook/client"
  import GoogleMap from "./GoogleMap.svelte"

  let lat = 13.736717
  let lng = 100.523186
</script>

<Variant name="Basic marker">
  <GoogleMap apiKey={import.meta.env.VITE_GMAPS_API_KEY} {lat} {lng} zoom={18}>
    <GoogleMapMarker {lat} {lng} />
  </GoogleMap>
</Variant>

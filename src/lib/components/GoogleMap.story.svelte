<script lang="ts" context="module">
  import type { PageMeta } from "@vitebook/client"

  export const __pageMeta: PageMeta = {
    title: "GoogleMap",
    description: "Main Google map container.",
  }
</script>

<script lang="ts">
  import { Variant } from "@vitebook/client"
  import GoogleMap from "./GoogleMap.svelte"
  import GoogleMapCanvas from "./GoogleMapCanvas.svelte"
</script>

<Variant name="Default container">
  <GoogleMap
    apiKey={import.meta.env.VITE_GMAPS_API_KEY}
    lat={13.736717}
    lng={100.523186}
    zoom={12}
  />
</Variant>

<Variant name="Custom container">
  <GoogleMap
    apiKey={import.meta.env.VITE_GMAPS_API_KEY}
    lat={13.736717}
    lng={100.523186}
    zoom={12}
  >
    <GoogleMapCanvas class="shadow-2xl shadow-pink-300 w-96 h-96" />
  </GoogleMap>
</Variant>

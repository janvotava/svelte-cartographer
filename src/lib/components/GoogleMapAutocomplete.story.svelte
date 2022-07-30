<script lang="ts" context="module">
  import type { PageMeta } from "@vitebook/client"

  export const __pageMeta: PageMeta = {
    title: "GoogleMapAutocomplete",
    description: "Autocomplete input for places.",
  }
</script>

<script lang="ts">
  import { GoogleMapAutocomplete, GoogleMapMarker } from "$lib"
  import { Variant } from "@vitebook/client"
  import GoogleMap from "./GoogleMap.svelte"

  let lat = 13.736717
  let lng = 100.523186
  let options = {
    center: {
      lat,
      lng,
    },
    zoom: 12,
  }

  function onPlaceChange(place: google.maps.places.PlaceResult) {
    if (place.geometry) {
      const { location } = place.geometry

      if (location) {
        lat = location.lat()
        lng = location.lng()
      }
    }
  }
</script>

<Variant name="Autocomplete with map context">
  <GoogleMap apiKey={import.meta.env.VITE_GMAPS_API_KEY} {options}>
    <GoogleMapAutocomplete
      on:change={(e) => onPlaceChange(e.detail)}
      class="text-xl mb-4 px-6 py-4 w-full"
    />
    <GoogleMapMarker {lat} {lng} />
  </GoogleMap>
</Variant>

<script lang="ts">
  import GoogleMap from "$lib/components/GoogleMap.svelte"
  import GoogleMapMarker from "$lib/components/GoogleMapMarker.svelte"
  import GoogleMapAutocomplete from "$lib/components/GoogleMapAutocomplete.svelte";

  let lat = 13.736717
  let lng = 100.523186

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

<div class="demo">
  <GoogleMap
    apiKey={import.meta.env.VITE_GMAPS_API_KEY}
    {lat}
    {lng}
    zoom={12}
  >
    <GoogleMapAutocomplete on:change={(e) => onPlaceChange(e.detail)} />
    <GoogleMapMarker {lat} {lng} />
  </GoogleMap>
</div>

<style>
  :global(html, body, body > div) {
    margin: 0;
    height: 100%;
  }

  .demo {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

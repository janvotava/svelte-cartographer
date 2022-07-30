<script>
  import { GoogleMap, GoogleMapMarker, GoogleMapCanvas } from "$lib"
  import { Variant } from "@vitebook/client"

  const apiKey = import.meta.env.VITE_GMAPS_API_KEY
  const options = {
    center: {
      lat: 13.736717,
      lng: 100.523186,
    },
    zoom: 18,
  }
</script>

# GoogleMapMarker

A marker identifies a location on a map. By default, a marker uses a standard image.

## Usage

```svelte {8}
<GoogleMap apiKey="xxx" options={{
  center: {
    lat: 13.736717,
    lng: 100.523186,
  },
  zoom: 18,
}}>
  <GoogleMapMarker lat={13.736717} lng={100.523186} />
</GoogleMap>
```

<GoogleMap {apiKey} {options}>
  <GoogleMapCanvas class="h-64 w-full" />
  <GoogleMapMarker lat={13.736717} lng={100.523186} />
</GoogleMap>

<script>
  import { GoogleMap, GoogleMapMarker, GoogleMapCanvas } from "$lib"
  import { Variant } from "@vitebook/client"

  const apiKey = import.meta.env.VITE_GMAPS_API_KEY
</script>

# GoogleMapMarker

A marker identifies a location on a map. By default, a marker uses a standard image.

## Usage

```svelte {2}
<GoogleMap apiKey="xxx" lat={13.736717} lng={100.523186} zoom={18}>
  <GoogleMapMarker lat={13.736717} lng={100.523186} />
</GoogleMap>
```

<GoogleMap {apiKey} lat={13.736717} lng={100.523186} zoom={18}>
  <GoogleMapCanvas class="h-64 w-full" />
  <GoogleMapMarker lat={13.736717} lng={100.523186} />
</GoogleMap>

export type Google = typeof globalThis.google
export type GoogleMaybe = Google | undefined
export type GoogleMapMaybe = google.maps.Map | undefined

// NOTE: Require center and zoom to be set
export interface GoogleMapsOptions extends google.maps.MapOptions {
  center: google.maps.LatLng | google.maps.LatLngLiteral
  zoom: number
}

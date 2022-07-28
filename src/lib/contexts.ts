import type { Writable } from "svelte/store"
import type { GoogleMapMaybe, GoogleMaybe } from "./types"

export const key = Symbol()

export type Context = {
  getGoogle: () => Writable<GoogleMaybe>,
  getMap: () => Writable<GoogleMapMaybe>,
  setCanvas: (canvas: HTMLDivElement) => void,
}

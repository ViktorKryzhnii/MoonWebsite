<script setup lang="ts">
import { setOptions, importLibrary } from '@googlemaps/js-api-loader'

const config = useRuntimeConfig()
const mapContainer = ref<HTMLDivElement | null>(null)
const isLoading = ref(true)
const mapError = ref(false)

const officeLocation = { lat: 37.7749, lng: -122.4194 }

onMounted(async () => {
  if (!config.public.googleMapsApiKey || !mapContainer.value) {
    isLoading.value = false
    mapError.value = true
    return
  }

  try {
    setOptions({ key: config.public.googleMapsApiKey, v: 'weekly' })

    const { Map } = await importLibrary('maps')
    const { AdvancedMarkerElement } = await importLibrary('marker')

    const map = new Map(mapContainer.value, {
      center: officeLocation,
      zoom: 14,
      mapId: 'DEMO_MAP_ID',
      disableDefaultUI: true,
      zoomControl: true
    })

    new AdvancedMarkerElement({
      map,
      position: officeLocation
    })
  } catch (error) {
    console.error('Failed to load Google Maps:', error)
    mapError.value = true
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="relative w-full h-[400px] border border-neutral-200">
    <div ref="mapContainer" class="w-full h-full" />

    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white font-sans text-sm text-neutral-500">
      Loading map...
    </div>

    <p v-else-if="mapError" class="absolute inset-0 flex items-center justify-center bg-white font-sans text-sm text-neutral-500">
      Unable to load the map.
    </p>
  </div>
</template>

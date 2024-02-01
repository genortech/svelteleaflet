<script lang="ts">
	import Map from '$lib/leaflet/map.svelte';
	import Marker from '$lib/leaflet/marker.svelte';
	import Popup from '$lib/leaflet/popup.svelte';
	import { type LatLngExpression } from 'leaflet';
	// import {readingLoc} from'$lib/stores/loc'
	export let data;
	const readingLoc: LatLngExpression = [
		Number(data.reading?.Latitude),
		Number(data.reading?.Longitude)
	]; // Reading Location
	const latLng = readingLoc;
</script>

<h1>Reading Id: {data.id}</h1>
<h1>Geo Loc: {data.reading?.Latitude}, {data.reading?.Longitude}</h1>
<h1>Date of Reading: {data.reading?.date}</h1>
<h1>Soil Condition: {data.reading?.soilCond}</h1>
<div class="flex h-full w-full border border-black">
	<div class="">
		<Map view={readingLoc} zoom={14}>
			<Marker {latLng} width={40} height={40}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-map-pin"
					><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle
						cx="12"
						cy="10"
						r="3"
					/></svg
				>
				<Popup></Popup>
			</Marker>
		</Map>
	</div>
</div>

<script lang="ts">
	import Map from '$lib/leaflet/map.svelte';
	import Marker from '$lib/leaflet/marker.svelte';
	import Popup from '$lib/leaflet/popup.svelte';
	import { marker, type LatLngExpression } from 'leaflet';
	const initialView: LatLngExpression = [-33.8688, 151.2093]; // Sydney Australia
	export let data;
	// console.log('Data', data.marker_list);
	let markerLocations: Array<LatLngExpression> = data.marker_list.map((item) => {
		const { Latitude, Longitude } = item;
		return [Number(Latitude), Number(Longitude)];
	});

	console.log('Markers', markerLocations);
	// const markerLocations: Array<LatLngExpression> = [
	// 	[-33.8688, 151.2093],
	// 	[-33.8388, 151.3093]
	// ];
</script>

<div class="h-screen w-full">
	<Map view={initialView} zoom={14}>
		{#each markerLocations as latLng, i}
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
				<Popup>
					{#if data.marker_list[i].id === i + 1}
						<h2>Name: {data.marker_list.at(i)?.name}</h2>
						<h3>
							Data:
							{data.marker_list.at(i)?.popup}
						</h3>
					{/if}
				</Popup>
			</Marker>
		{/each}
	</Map>
</div>

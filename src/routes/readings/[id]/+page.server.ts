import markers from '../../map/markers.json';
import type { MarkerList } from '../../map/markers';
import { error } from '@sveltejs/kit';

const marker_list: MarkerList = markers;

export const load = ({ event, params }) => {
	const reading = marker_list[params.id];
	if (params.id) {
		return {
			id: params.id,
			reading
		};
	}
	error(404, 'Not Found');
};

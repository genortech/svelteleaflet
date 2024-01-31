import markers from '../map/markers.json';
import type { MarkerList } from '../map/markers';
import type { PageServerLoad } from './$types';

const marker_list: MarkerList = markers;

export const load: PageServerLoad = () => {
	console.log('Server Data', marker_list);
	return {
		marker_list
	};
};

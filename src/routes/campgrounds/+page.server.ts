import { CampgroundMongoModel } from '$lib/server/campground/campground.model';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const campgrounds: {
		_id: string;
		title: string;
		price: number;
		description: string;
		location: string;
		image: string;
	}[] = await CampgroundMongoModel.aggregate([
		{
			$project: {
				_id: {
					$toString: '$_id'
				},
				title: 1,
				price: 1,
				description: 1,
				location: 1,
				image: 1
			}
		}
	]);

	return {
		campgrounds
	};
}) satisfies PageServerLoad;

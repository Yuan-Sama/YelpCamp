import { CampgroundMongoModel } from '$lib/server/campground/campground.model';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const campgrounds = await CampgroundMongoModel.find().transform((campDoc) =>
		campDoc.map((c) => Object.assign({}, c.toObject(), { _id: c._id.toString() }))
	);

	return {
		campgrounds
	};
}) satisfies PageServerLoad;

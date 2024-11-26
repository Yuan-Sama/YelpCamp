import { Campground } from '$lib/server/campground/campground.model';
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ params }) => {
	const campground = await Campground.findById(params.id)
		.transform((doc) => Object.assign({}, doc?.toObject(), { _id: doc?._id.toHexString() }))
		.exec();

	if (!campground) error(404, { message: 'Campground not found' });

	return {
		campground
	};
}) satisfies LayoutServerLoad;

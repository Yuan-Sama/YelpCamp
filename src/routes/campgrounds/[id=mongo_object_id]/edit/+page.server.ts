import { error, fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { convertToValidationErrors } from '$lib/server';
import { Campground, campgroundRequestValidator } from '$lib/server/campground';

export const load = (async ({ params }) => {
	const campground = await Campground.findById(params.id, {
		_id: { $toString: '$_id' },
		title: 1,
		price: 1,
		description: 1,
		image: 1,
		location: 1
	}).lean();

	if (!campground) error(404, { message: 'Campground not found' });

	return {
		campground
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, params }) => {
		const { id } = params;
		const updateCampground = Object.fromEntries(await request.formData());
		const { error: err } = campgroundRequestValidator.validate(updateCampground, {
			abortEarly: false
		});

		if (err) {
			const validationErrors = convertToValidationErrors(err);

			const errors = Object.keys(updateCampground)
				.map((k) => {
					return {
						[k]: {
							submittedValue: validationErrors[k] ? undefined : updateCampground[k],
							error: validationErrors[k]
						}
					};
				})
				.reduce((prev, next) => Object.assign(next, prev), {});

			return fail(400, { errors });
		}

		const campground = await Campground.findByIdAndUpdate(id, updateCampground);

		redirect(303, `/campgrounds/${campground?._id}`);
	}
} satisfies Actions;

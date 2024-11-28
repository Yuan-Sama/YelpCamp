import {
	CampgroundMongoModel,
	campgroundRequestValidator
} from '$lib/server/campground/campground.model';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, params }) => {
		const { id } = params;
		const updateCampground = Object.fromEntries(await request.formData());
		const { error: err } = campgroundRequestValidator.validate(updateCampground, {
			abortEarly: false
		});

		if (err) {
			const validationErrors = err.details
				.map((e) => ({ [e.path.join('.')]: e.message }))
				.reduce((prev, next) => Object.assign(next, prev), {});

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

		const campground = await CampgroundMongoModel.findByIdAndUpdate(id, updateCampground);

		redirect(303, `/campgrounds/${campground?._id}`);
	}
} satisfies Actions;

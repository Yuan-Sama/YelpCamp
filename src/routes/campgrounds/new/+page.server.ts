import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { Campground, campgroundRequestValidator } from '$lib/server/campground/campground.model';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const newCampground = Object.fromEntries(data);

		const { error: err } = campgroundRequestValidator.validate(newCampground, {
			abortEarly: false
		});

		if (err) {
			const validationErrors = err.details
				.map((e) => ({ [e.path.join('.')]: e.message }))
				.reduce((prev, next) => Object.assign(next, prev), {});

			const errors = Object.keys(newCampground)
				.map((k) => {
					return {
						[k]: {
							submittedValue: validationErrors[k] ? undefined : newCampground[k],
							error: validationErrors[k]
						}
					};
				})
				.reduce((prev, next) => Object.assign(next, prev), {});

			return fail(400, { errors });
		}

		const campground = new Campground(newCampground);
		await campground.save();
		redirect(303, `/campgrounds/${campground._id}`);
	}
} satisfies Actions;

import { Campground } from '$lib/server/campground/campground.model';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	delete: async ({ params }) => {
		const { id } = params;
		await Campground.findByIdAndDelete(id);
		redirect(303, '/campgrounds');
	}
} satisfies Actions;

import { CampgroundMongoModel } from '$lib/server/campground/campground.model';
import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import mongoose from 'mongoose';
import { ReviewMongoModel } from '$lib/server/review/review.model';

export const load = (async ({ params }) => {
	const campgrounds = await CampgroundMongoModel.aggregate([
		{
			$match: {
				_id: new mongoose.Types.ObjectId(params.id)
			}
		},
		{
			$lookup: {
				from: 'reviews',
				localField: 'reviews',
				foreignField: '_id',
				as: 'reviews'
			}
		},
		{
			$project: {
				_id: { $toString: '$_id' },
				title: 1,
				price: 1,
				description: 1,
				image: 1,
				location: 1,
				reviews: {
					$map: {
						input: '$reviews',
						as: 'review',
						in: {
							_id: {
								$toString: '$$review._id'
							},
							body: '$$review.body',
							rating: '$$review.rating',
							createdDate: '$$review.createdDate'
						}
					}
				}
			}
		}
	]).limit(1);

	const campground = campgrounds[0];
	if (!campground) error(404, { message: 'Campground not found' });

	return {
		campground
	};
}) satisfies PageServerLoad;

export const actions = {
	delete: async ({ params }) => {
		const { id } = params;
		await CampgroundMongoModel.findByIdAndDelete(id);
		redirect(303, '/campgrounds');
	},
	deleteComment: async ({ request }) => {
		const formData = await request.formData();
		const { campgroundId, reviewId } = Object.fromEntries(formData) as {
			campgroundId: string;
			reviewId: string;
		};

		await CampgroundMongoModel.findByIdAndUpdate(campgroundId, { $pull: { reviews: reviewId } });
		await ReviewMongoModel.findByIdAndDelete(reviewId);

		redirect(303, `/campgrounds/${campgroundId}`);
	}
} satisfies Actions;

import { convertToValidationErrors } from '$lib/server';
import mongoose from 'mongoose';
import type { RequestHandler } from './$types';
import { Review, reviewRequestValidator, type ReviewRequestModel } from '$lib/server/review';
import { Campground } from '$lib/server/campground';

export const POST: RequestHandler = async ({ request, params }) => {
	const body: ReviewRequestModel = await request.json();

	const { error: err } = reviewRequestValidator.validate(body, {
		abortEarly: false
	});

	if (err) {
		const validationErrors = convertToValidationErrors(err);

		return new Response(JSON.stringify(validationErrors), {
			status: 400
		});
	}

	const review = new Review(body);
	const campground = await Campground.findById(params.id);

	campground?.reviews.push(review);

	await review.save();
	await campground?.save();

	const campgrounds = await Campground.aggregate([
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

	if (!campgrounds[0]) return new Response(JSON.stringify([]));

	return new Response(JSON.stringify(campgrounds[0].reviews));
};

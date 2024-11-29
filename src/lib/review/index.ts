import type { Types } from 'mongoose';

export async function submitReview(
	campgroundId: Types.ObjectId | string,
	review: { body: string; rating: number }
) {
	const response = await fetch(`/api/campgrounds/${campgroundId}/reviews`, {
		method: 'POST',
		body: JSON.stringify(review)
	});

	if (!response.ok) {
		return [];
	}
	return response.json();
}

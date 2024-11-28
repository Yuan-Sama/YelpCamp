import { convertToValidationErrors } from '$lib/server';
import { reviewRequestValidator } from '$lib/server/review/review.model';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { error: err } = reviewRequestValidator.validate(body, {
		abortEarly: false
	});

	if (err) {
		const validationErrors = convertToValidationErrors(err);

		return new Response(JSON.stringify(validationErrors), {
			status: 400
		});
	}
	console.log(body);
	return new Response();
};

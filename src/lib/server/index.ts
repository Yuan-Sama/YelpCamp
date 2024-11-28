import type Joi from 'joi';

export function convertToValidationErrors(error: Joi.ValidationError) {
	return error.details
		.map((e) => ({ [e.path.join('.')]: e.message }))
		.reduce((prev, next) => Object.assign(next, prev), {});
}

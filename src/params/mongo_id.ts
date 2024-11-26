import type { ParamMatcher } from '@sveltejs/kit';
import { Types } from 'mongoose';

export const match = ((param) => {
	return Types.ObjectId.isValid(param);
}) satisfies ParamMatcher;

import { MONGO_URL } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import { connect } from 'mongoose';

(async () => {
	try {
		await connect(MONGO_URL);
	} catch (err) {
		console.error('Connection error: ', err);
	}
})();

export const handle: Handle = async ({ event, resolve }) => {
	return resolve(event);
};

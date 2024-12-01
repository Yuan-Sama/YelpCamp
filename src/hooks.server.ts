import { MONGO_URL } from '$env/static/private';
import { connect } from 'mongoose';

(async () => {
	try {
		await connect(MONGO_URL);
	} catch (err) {
		console.error('Connection error: ', err);
	}
})();

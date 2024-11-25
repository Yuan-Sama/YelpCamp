import { MONGO_URL } from '$env/static/private';
import { connect } from 'mongoose';

export async function connectMongo() {
	try {
		await connect(MONGO_URL);
	} catch (err) {
		console.error('Connection error: ', err);
	}
}

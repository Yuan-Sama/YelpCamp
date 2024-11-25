import { connectMongo } from '$lib/server/mongo';

(async () => {
	await connectMongo();
})();

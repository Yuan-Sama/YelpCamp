import mongoose from 'mongoose';
import cities from './cities.js';
import { places, descriptors } from './seedHelpers.js';
import { Campground } from '../src/lib/server/campground/campground.model';

(async () => {
	try {
		console.log(process.env.MONGO_URL);
		await mongoose.connect(process.env.MONGO_URL!);
	} catch (error) {
		console.error.bind(console, 'Connection error:', error);
	}
})();

const sample = (/**@type {string[]} */ array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 50; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10;
		const camp = new Campground({
			// @ts-ignore
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			title: `${sample(descriptors)} ${sample(places)}`,
			image: `https://picsum.photos/400?random=${Math.random()}`,
			description:
				'Nulla sagittis ipsum condimentum, elementum velit dapibus, pulvinar nisl. Aenean id metus a arcu semper molestie. In felis libero, cursus quis ante sit amet, blandit mollis sem. Vivamus dui nunc, accumsan eget mattis ut, molestie quis erat. Fusce finibus justo suscipit, pharetra nunc sed, pellentesque ligula. Pellentesque suscipit sem nec ultrices imperdiet. Cras semper tellus a nisi luctus, in ornare lorem aliquam. Etiam facilisis dui arcu, sit amet dapibus quam porta quis. Phasellus ut facilisis enim. Pellentesque vel lectus in libero bibendum dapibus id ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at odio lacus.',
			price
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
	console.log('Seed successfully');
});

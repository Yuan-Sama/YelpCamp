import Joi from 'joi';
import mongoose, { Model, model, Schema, type ObjectId } from 'mongoose';

interface Campground {
	title: string;
	price: number;
	description: string;
	location: string;
	image: string;
	reviews: Array<ObjectId>;
}

const campgroundSchema = new Schema<Campground>({
	title: { type: String },
	price: { type: Number },
	description: { type: String },
	location: { type: String },
	image: { type: String },
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Review'
		}
	]
});

export const CampgroundMongoModel =
	(mongoose.models['Campground'] as Model<Campground>) ||
	model<Campground>('Campground', campgroundSchema);

export const campgroundRequestValidator = Joi.object({
	title: Joi.string().required(),
	price: Joi.number().required().min(0.01),
	description: Joi.string().required(),
	location: Joi.string().required(),
	image: Joi.string().required()
});

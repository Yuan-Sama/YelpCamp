import Joi from 'joi';
import mongoose, { Model, model, Schema } from 'mongoose';

interface ICampground {
	title: string;
	price: string;
	description: string;
	location: string;
	image: string;
}

const campgroundSchema = new Schema<ICampground>({
	title: { type: String },
	price: { type: String },
	description: { type: String },
	location: { type: String },
	image: { type: String }
});

export const Campground =
	(mongoose.models['Campground'] as Model<ICampground>) ||
	model<ICampground>('Campground', campgroundSchema);

export const campgroundRequestValidator = Joi.object({
	title: Joi.string().required(),
	price: Joi.number().required().min(0.01),
	description: Joi.string().required(),
	location: Joi.string().required(),
	image: Joi.string().required()
});

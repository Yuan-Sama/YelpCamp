import Joi from 'joi';
import mongoose, { model, Model, Schema, Types } from 'mongoose';
import { Review, type Reviewable } from './review';

export interface Campgroundable {
	title: string;
	price: number;
	description: string;
	location: string;
	image: string;
	reviews: Array<
		mongoose.Document<unknown, {}, Reviewable> &
			Reviewable & {
				_id: Types.ObjectId;
			} & {
				__v: number;
			}
	>;
}

const campgroundSchema = new Schema<Campgroundable>({
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

campgroundSchema.post('findOneAndDelete', async function (doc) {
	if (doc) {
		await Review.deleteMany({
			_id: {
				$in: doc.reviews
			}
		});
	}
});

export const Campground =
	(mongoose.models['Campground'] as Model<Campgroundable>) ||
	model<Campgroundable>('Campground', campgroundSchema);

export const campgroundRequestValidator = Joi.object({
	title: Joi.string().required(),
	price: Joi.number().required().min(0.01),
	description: Joi.string().required(),
	location: Joi.string().required(),
	image: Joi.string().required()
});

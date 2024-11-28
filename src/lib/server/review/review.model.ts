import Joi from 'joi';
import mongoose, { model, Model, Schema } from 'mongoose';

interface Review {
	body: string;
	rating: number;
}

const reviewSchema = new Schema<Review>({
	body: { type: String },
	rating: { type: Number }
});

export const ReviewMongoModel =
	(mongoose.models['Review'] as Model<Review>) || model<Review>('Review', reviewSchema);

export const reviewRequestValidator = Joi.object({
	body: Joi.string().trim().required(),
	rating: Joi.number().min(1).max(5).required()
});

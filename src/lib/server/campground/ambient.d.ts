interface Campground {
	title: string;
	price: number;
	description: string;
	location: string;
	image: string;
	reviews: Array<
		mongoose.Document<unknown, {}, Review> &
			Review & {
				_id: Types.ObjectId;
			} & {
				__v: number;
			}
	>;
}

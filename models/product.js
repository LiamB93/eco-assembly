import mongoose from 'mongoose';
const Schema = mongoose.Schema

const Product = new Schema(
  {
    name: { type: String, reuqired: true },
    imgURL: { type: String, reuqired: true},
    price: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true}
  },
  {timestamps: true}
)

export default mongoose.model('products', Product)
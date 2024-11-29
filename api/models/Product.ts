import mongoose,{Document} from 'mongoose';
import { Product,Composition } from '../types/types';

const CompositionSchema = new mongoose.Schema<Composition>({
  name: { type: String, required: true },
  dosage: { type: String, required: true },
});

const productSchema = new mongoose.Schema<Product>({
  drugName: { type: String, required: true },
  compositions: { type: mongoose.Schema.Types.Mixed, required: true },
  units: { type: Number, required: true },
  totalDosage: { type: Number, required: true },
  price: { type: Number, required: true },
  expiryDate: { type: String, required: true },
  vendorWalletAddress:{type:String, required:true}

});

module.exports = mongoose.model('Product', productSchema);
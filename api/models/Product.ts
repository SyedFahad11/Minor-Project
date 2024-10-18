import mongoose,{Document} from 'mongoose';

interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  totalDosage: number;
  price: number;
  expiryDate: string;
  manufacturer?: string;
  description?: string;
  vendorWalletAddress:string;
}

interface Composition {
  name: string;
  dosage: string;
}

interface Product extends Drug{
  vendorWalletAddress:string,
}


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
  manufacturer: { type: String },
  description: { type: String },
  vendorWalletAddress:{type:String, required:true}

});

module.exports = mongoose.model('Product', productSchema);
import mongoose, { Document } from 'mongoose';

import { Drug,Composition, Transaction } from '../types/types';

const CompositionSchema = new mongoose.Schema<Composition>({
  name: { type: String, required: true },
  dosage: { type: String, required: true },
});

const drugSchema = new mongoose.Schema<Drug>({
  drugName: { type: String, required: true },
  compositions: { type: mongoose.Schema.Types.Mixed, required: true },
  units: { type: Number, required: true },
  totalDosage: { type: Number, required: true },
  price: { type: Number, required: true },
  expiryDate: { type: String, required: true },
});

const transactionSchema = new mongoose.Schema<Transaction>({
  id:{type:String,required:true},
  drug: { type: drugSchema, required: true },
  attestationId: { type: String, required: true },
  owner: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports= mongoose.model('Transaction', transactionSchema);
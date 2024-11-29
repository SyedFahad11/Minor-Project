import mongoose, { Document } from 'mongoose';

import { ProductAttestationSchema, Transaction } from '../types/types';

const attestationSchema = new mongoose.Schema<ProductAttestationSchema>({
  productName: { type: String, required: true },
  productSerialNo: { type: String, required: true },
  soldBy: { type: String, required: true },
  boughtBy: { type: String, required: true },
  previousAttestationId: { type: String },
  grandTotal: { type: Number, required: true },
  taxRate: { type: Number, required: true },
});

const transactionSchema = new mongoose.Schema<Transaction>({
  attestation: { type: attestationSchema, required: true },
  attestationId: { type: String, required: true },
  prev_owner: { type: String, required: true },
  curr_owner: { type: String, required: true },
  archived: { type: Boolean, default: false },
  transactionValue: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export const TransactionModel = mongoose.model('Transaction', transactionSchema);

interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  totalDosage: number;
  price: number;
  expiryDate: string;
}
interface Composition {
  name: string;
  dosage: string;
}

export interface Product extends Drug {
  vendorWalletAddress: string;
  _id:string
}

export interface ProductAttestationSchema {
  drugName: string;
  productSerialNo: string;
  soldBy: string;
  boughtBy: string;
  previousAttestationId: string;
  grandTotal: number;
  taxRate: number;
}
export interface Transaction {
  attestation: ProductAttestationSchema;
  attestationId: string;
  from: string;
  to: string;
  archived: boolean;
  transactionValue: number;
  timestamp: Date;
}


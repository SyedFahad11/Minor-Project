
interface Drug {
  drugName: string;
  compositions: Composition[];
  units: number;
  totalDosage: number;
  price: number;
  expiryDate: string;
}
export interface Composition {
  name: string;
  dosage: string;
}

export interface Product extends Drug {
  vendorWalletAddress: string;
  _id:string
}

export interface ProductAttestationSchema {
  productName: string;
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
  prev_owner: string;
  curr_owner: string;
  archived: boolean;
  transactionValue: number;
  timestamp: Date;
}


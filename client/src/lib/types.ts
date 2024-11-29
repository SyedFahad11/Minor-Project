
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
  _id:string,
  drug:Drug;
  attestationId?: string;
  owner?: string;
  timestamp: Date;
}


const express=require('express');
const router = express.Router();

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

router.get("/hi",(req:any, res:any) => {
  try {

    return res.send("Hello");
  }
  catch(e){

  }
});

module.exports=router;
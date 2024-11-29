import express, { Request, Response } from 'express';
var mongoose = require('mongoose');
var router = express.Router();
var ProductModel=require("../../models/Product");
var TransactionModel=require("../../models/SimpleTransaction");
import { Product,Transaction } from '../../types/types';

router.post("/addItem", async (req:Request, res:Response) => {
  try {
    const newDrug= new ProductModel(req.body as Product);
    const savedDrug = await newDrug.save();
    res.status(201).json({ message: "Drug added successfully", data: savedDrug });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding drug" });
  }
});

router.post("/transaction", async (req:Request, res:Response) => {
  try {
    const data=req.body;
    console.log(data);

    const document = await TransactionModel.findById(data._id);
    if (document) {
      console.log("HERE");
      const existingTransaction = await TransactionModel.findOneAndUpdate(
        { _id: data._id },
        { $set: { owner: data.owner, attestationId: data.attestationId } }
      );

      console.log('Transaction updated successfully' );
      res.status(200).json({ message: 'Transaction updated successfully' });

    } else {
      const document= new TransactionModel({_id:data.id,...data});
      const saved = await document.save();
      console.log('Transaction added successfully' );
      res.status(201).json({ message: "Transaction added successfully" });

    }


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding drug" });
  }
});



module.exports=router;
import express, { Request, Response } from 'express';
var mongoose = require('mongoose');
var router = express.Router();
var ProductModel=require("../../models/Product");
import { Product } from '../../types/types';

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

router.post("/doTransaction", async (req:Request, res:Response) => {
  try {
    const newDrug= new ProductModel(req.body as Product);
    const savedDrug = await newDrug.save();
    res.status(201).json({ message: "Drug added successfully", data: savedDrug });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding drug" });
  }
});



module.exports=router;
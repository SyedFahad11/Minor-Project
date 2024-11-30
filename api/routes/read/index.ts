import express, { Request, Response } from 'express';
//var mongoose = require('mongoose');
var router = express.Router();
var TransactionModel=require("../../models/SimpleTransaction");
//var ProductModel=require("../../models/Product");


// interface GetItemsRequest extends Request {
//   body: {
//     address: string;
//   };
// }

// router.post("/getItems", async (req: Request, res: Response) => {
//   try {
//     const currAddress = req.body.address;


//     const products = await ProductModel.find({ vendorWalletAddress: { $ne: currAddress } });

//     res.status(200).json(products);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Error fetching items" });
//   }
// });

router.post("/getItemsMarketPlace", async (req: Request, res: Response) => {
  try {
    const currAddress = req.body.address;

    const products = await TransactionModel.find({ owner: { $ne: currAddress }, archive:false });

    console.log(products);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching items" });
  }
});

router.post("/getItemsInventory", async (req: Request, res: Response) => {
  try {
    const currAddress = req.body.address;

    const products = await TransactionModel.find({ owner: currAddress});

    console.log(products);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching items" });
  }
});




module.exports=router;
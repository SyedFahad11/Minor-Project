import express, { Request, Response } from 'express';
var router = express.Router();
var TransactionModel=require("../../models/SimpleTransaction");



router.post("/archiveStatus", async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const document = await TransactionModel.findById(data._id);
    if (document) {

      const existingTransaction = await TransactionModel.findOneAndUpdate(
        { _id: data._id },
        { $set: { archive:data.archive } }
      );

      console.log('Transaction updated successfully' );
      res.status(201).json({ message: 'Transaction updated successfully' });

    }
    else{

      res.status(400).json({message:"Document not found"});
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching items" });
  }
});



module.exports=router;
import express from "express";
import { ObjectId } from "mongodb";
import mongo from "./mongo.js";


const route = express.Router();


route.get("/", (req, res) => {
    try {

        const data = await mongo.db.collection("batch").find().toArray();
        res.json({ status: "success", message: "welcome to batch" });
    } catch (error) {
        res.json({ status: "error", message: "cant fetch data" })
    }

});

route.post("/", async (req, res) => {
    try {
        const { insertedId } = await mongo.db
            .collection("batch")
            .insertOne(req.body);
        res.json({ status: "success", data: { _id, ...req.body } })
        console.log(req.body);
    } catch (error) {
        res.json({ status: "error", error: "cant insert batch data" })
    }

});


route.put("/:id", async (req, res) => {
    try {
        const data = await mongo.db
            .collection("batch")
            // .findOneAndUpdate({
            //     .updateOne({ _id: ObjectId(req.params.id) },
            //         { $set: { ...req.body } }),
            //          { returnNewDocument: "true" } or{{ returnDocument: "after" }} 
            // })
            .updateOne({ _id: ObjectId(req.params.id) },
                { $set: { ...req.body } });
        res.json({ status: "success", data });

    } catch (error) {
        res.json({ status: "error", error: "cant update batch data" })
    }

});


route.get("/", async(req, res) => {
    try {
        const data = await mongo.db
            .collection("batch")
            .deleteOne({ _id: ObjectId(req.params.id) },
                { $set: { ...req.body } });
        res.json({ status: "success"});
        
        
    } catch (error) {
        res.json({ status: "error", error: "cant delete batch data" })
        
    }

});


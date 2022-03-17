import express from "express";

import express from "express";
import mongo from "./mongo.js";
import batchRoute from "./routes/batch.route.js";
(async () => {
    try {
        const app = express();

        //middleware
        app.use(express.json());

        // MongoDB Connection

        await mongo.connect();

        app.get("/", (req, res) => {
            res.json({ status: "success", message:"welcome to guvi"})
        });
       

        app.listen(3001, () => console.log("Server running at 3001"));
    } catch (err) {
        console.error("Error starting app");
    }
})();
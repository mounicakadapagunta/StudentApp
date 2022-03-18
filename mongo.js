import { MongoClient } from "mongodb";
const mongoUrl = "mongodb://localhost:27017";
const mongoDbName = "student-data";


const mongo = {
    db: null, //DB connection string 
    batch: null, // batch collection 
    student: null, //student collection 

    async connect() {
        const client = new MongoClient(mongoUrl);
        await client.connect();
        console.log(`Mongo db connected-${mongoUrl}`);
        this.db = client.db(mongoDbName);
        console.log(`MongoDB selected -${mongoDbName}`);

        this.batch = this.db.collection("batch");
        this.student = this.db.collection("student");
        console.log("collections initialized ")

    },
};

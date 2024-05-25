const express =request("express");
const app=express();
const cors=require("cors");
const bodyParser=require("body-parser");
const databaseConnection=require("./utils/database");
const appointment=require("./routes/appointment")

app.use(cors());
app.use(bodyParser.json());

app.use(appointment)
databaseConnection.sync().then(()=>{
    app.listen(3000);
    console.log("database connection set");
})
.catch((err)=>{
    console.log(err);
})
const express = require("express");
const userRoute = require("./routes/userRoute")
const orderRoute = require("./routes/orderRoute")
const cartRoute = require("./routes/cartRoute")
const productRoute = require("./routes/productRoute") 
const cors = require("cors");
const fileUpload= require("express-fileupload");

const connect = require("./helper/db")
connect();

const port = 8000;
const app = express(); 

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,  
    optionSuccessStatus:200
}
app.use(fileUpload());
app.use(cors(corsOptions));

app.use(express.json());
app.use("/users", userRoute)
app.use("/orders", orderRoute )
app.use("/cartInfo", cartRoute)
app.use("/products", productRoute)



app.listen(port, () => {
    console.log(`server running at localhost:${port}`);
})
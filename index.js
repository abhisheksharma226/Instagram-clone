const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const userRouter = require("./routes/user")

const PORT = 3000;

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/instagram")
.then((e) =>{
    console.log("Database Connected");
})

//for css
app.use(express.static(path.join(__dirname, "public")));

//for ejs
app.set("view engine" , "ejs");
app.set("views" , path.resolve('./views'));

//middleware
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get("/" , (req , res) => {
    res.render("home");
});

app.use("/user" , userRouter);



app.listen(PORT , () => {
    console.log(`Server Started at ${PORT}`);
})
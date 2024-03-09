const express = require("express");
const path = require("path");

const PORT = 3000;

const app = express();

app.set("view engine" , "ejs");
app.set("views" , path.resolve('./views'));

app.use(express.static('public'));

app.get("/" , (req , res) => {
    res.render("index");
});



app.listen(PORT , () => {
    console.log(`Server Started at ${PORT}`);
})
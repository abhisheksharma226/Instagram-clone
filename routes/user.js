const { Router } = require("express");
const User = require("../models/signup");

const router = Router();

router.get("/signup" , (req , res) => {
    res.render("signup");
})

router.get("/signin" , (req , res) => {
    res.render("index");
})

router.post("/signup", async (req, res) => {
    const { email, fullName, userName, password } = req.body;
    try {
        const newUser = await User.create({
            email,
            fullName,
            userName,
            password,
        });
        res.redirect("/");
    } catch (error) {
        console.error("Error Creating User:", error);
        res.status(500).send("Error creating user");
    }
});

router.post("/signin" , async (req , res) => {
    const { email , password } = req.body;

    try{
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.cookie("token" , token).redirect("/");
    } catch (error){
        return res.render("/user/signin" , {
            error : "Incorrect Email or Password",
        });
    }
});


module.exports = router;
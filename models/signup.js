const { Schema  , model } = require("mongoose");

const userSchema = new Schema({ 
    email : {
        type : String , 
        required : true,
        unique : true ,
    } ,
    fullName : {
        type : String , 
        required : true,
    } ,
    userName : {
        type : String ,
        required : true ,
    } ,
    password : {
        type : String , 
        required : true , 
    } ,
} , { timestamps : true }
);


userSchema.static("matchPasswordAndGenerateToken" , async function(email , password) {
    const user = await this.findOne({ email });
    if(!user)  throw new Error("User not found!");

    
    const userProvidedHash = createHmac("sha256" , salt)
    .update(password)
    .digest("hex");

   

    const token = createTokenForUser(user);
    return token;
})


const User = model("user" , userSchema);

module.exports = User;
import mongoose, { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = Schema({
    firstName: {
        type: String, required: [true, "firsName is required"]
    },

    lastName: {
        type: String, required: [true, "lastName is required"]
    },
    password: {
        type: String, required: [true, "password is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"]
    },
    phone: {
        type: String,
       
    },

})

//       this hook for     hash password
userSchema.pre("save", function (next, doc) {
    this.password = bcrypt.hashSync(this.password, +process.env.SALT_ROUNDS)
    next()
})



const userModel = mongoose.models.User || model("User", userSchema)

export default userModel
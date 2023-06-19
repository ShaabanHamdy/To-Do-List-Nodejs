import userModel from "../../../DB/models/user.model.js";
import { tokenGeneration } from "../../utils/TokenFunction.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res, next) => {


    const checkUser = await userModel.findOne({ email: req.body.email })
    if (checkUser) return next(new Error("email already exist", { cause: 400 }))

    const user = new userModel(req.body)
    await user.save()
    if (!user) return next(new Error("fail to create user", { cause: 400 }))

    const token = tokenGeneration({ payload: { user } })
    if (!token) return next(new Error("fail to generate token", { cause: 400 }))

    res.json({ message: "success", user })




}
//==================================================== login
export const login = async (req, res, next) => {
    const { password, email } = req.body
    const checkEmail = await userModel.findOne({ email })

    if (!checkEmail) return next(new Error("invalid email information", { cause: 400 }))

    const matchPassword = bcrypt.compareSync(password,checkEmail.password)

    if (!matchPassword) return next(new Error("invalid Password information", { cause: 400 }))
    const token = tokenGeneration({ payload: { id: checkEmail._id } })
    if (!token) return next(new Error("fail in token decode", { cause: 400 }))


    res.json({ message: "success", token })




}
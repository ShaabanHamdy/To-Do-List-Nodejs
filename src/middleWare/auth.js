import userModel from "../../DB/models/user.model.js"
import { tokenDecode } from "../utils/TokenFunction.js"
import { asyncHandler } from "../utils/errorHandling.js"


const auth = () => {
    return asyncHandler(async (req, res, next) => {

        const { auth } = req.headers

        if (!auth) return next(new Error("auth empty"))

        if (!auth?.startsWith("shaban__")) return next(new Error("invalid  prefix"))

        const splitToken = auth.split("shaban__")[1]

        if (!splitToken) return next(new Error("invalid  splitToken"))

        const decode = tokenDecode({ payload: splitToken })

        if (!decode?.id) return next(new Error("invalid  tokenDecode"))

        const user = await userModel.findById(decode.id).select("firstName email _id")
        if (!user) return next(new Error("not register account"))
                



        req.user = user

        return next()
    })
}
export default auth

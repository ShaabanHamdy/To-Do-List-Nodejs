import mongoose from "mongoose";

const ConnectionDB = async () => {
    return await mongoose.connect("mongodb+srv://shabanhamdy94:MdKDd2VQUsnuic1T@cluster0.r60xmyb.mongodb.net/CRUDSYSTEM")
        .then((res) => console.log('Connection DB is Running........'))
        .catch((err) => console.log(`Connection DB error.${err}`))
}
export default ConnectionDB

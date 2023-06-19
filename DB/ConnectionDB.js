import mongoose from "mongoose";

const ConnectionDB = async () => {
    return await mongoose.connect(process.env.CONNECTION_ONLINE)
        .then((res) => console.log('Connection DB is Running........'))
        .catch((err) => console.log(`Connection DB error.${err}`))
}
export default ConnectionDB

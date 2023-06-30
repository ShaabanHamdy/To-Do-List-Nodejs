import mongoose from "mongoose";

const ConnectionDB = async () => {
 return await mongoose.connect(process.env.CONNECTION_ONLINE)
 .then((res)=>console.log("ConnectionDB Running.............."))
 .catch((err)=>console.log({message:"ConnectionDB fail" , err}))
}
export default ConnectionDB

import mongoose, { Schema, model } from "mongoose";



const noteSchema = Schema({
    title: {
        type: String
    },

    description: {
        type: String
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }

})

const noteModel = mongoose.models.Note || model("Note", noteSchema)

export default noteModel
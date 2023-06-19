import mongoose, { Schema, model } from "mongoose";



const noteSchema = Schema({
    title: {
        type: String, required: [true, "title is required"]
    },

    description: {
        type: String, required: [true, "description is required"]
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    }

})

const noteModel = mongoose.models.Note || model("Note", noteSchema)

export default noteModel
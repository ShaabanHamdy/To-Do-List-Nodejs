import noteModel from "../../../DB/models/Note.model.js";


export const addNote = async (req, res, next) => {
        const note = new noteModel({
                title: req.body.title,
                description: req.body.description,
                createdBy: req.user.id
        })
        await note.save()
        if (!note) return next(new Error("fail to add"))
       return res.json({ message: "success", note })
}
//============================================================= get data 
export const getNote = async (req, res, next) => {
       
        if (!await noteModel.findOne({ createdBy: req.user._id })) return next(new Error("note empty"))
        const note = await noteModel.find({ createdBy: req.user.id })
        // if (note.length < 0) return next(new Error("note is empty"))
       return res.json({ message: "success", note })

}
//============================================================= delete data 
export const deleteNote = async (req, res, next) => {
        const { noteId } = req.params
        const note = await noteModel.deleteOne({ _id: noteId })
        if (!note) return next(new Error("fail to delete note"))
        res.json({ message: "success", note })

}
//============================================================= update data 
export const updateNote = async (req, res, next) => {
        const { noteId } = req.params
        const checkUser = await noteModel.findOne({ createdBy: req.user.id })
        if (!checkUser) return next(new Error("cant update "))
        const note = await noteModel.findOneAndUpdate({ _id: noteId }, req.body)
        if (!note) return next(new Error("fail to update note"))
        res.json({ message: "success" })
}


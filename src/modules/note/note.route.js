import { Router } from "express";
import * as controllers from './note.controller.js'
import { asyncHandler } from "../../utils/errorHandling.js";
import auth from "../../middleWare/auth.js";
const router = Router()

router.post("/addNote",auth(),asyncHandler(controllers.addNote))
//========================================================================================

router.get("/getNote" ,auth(), asyncHandler(controllers.getNote))
//========================================================================================

router.delete("/deleteNote/:noteId" ,auth(), asyncHandler(controllers.deleteNote))
//========================================================================================

router.put("/updateNote/:noteId" ,auth(), asyncHandler(controllers.updateNote))





export default router
import { Router } from "express";
import * as controllers from './note.controller.js'
import * as validators from './note.validation.js'
import { validationMiddle } from "../../middleWare/validation.middle.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import auth from "../../middleWare/auth.js";
const router = Router()

router.post("/addNote",auth(), validationMiddle(validators.crateNote),asyncHandler(controllers.addNote))
//========================================================================================

router.get("/getNote" ,auth(), asyncHandler(controllers.getNote))
//========================================================================================

router.delete("/deleteNote/:noteId" ,auth(), asyncHandler(controllers.deleteNote))
//========================================================================================

router.put("/updateNote/:noteId" ,auth(), asyncHandler(controllers.updateNote))





export default router
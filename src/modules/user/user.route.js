import { Router } from "express";
import * as controllers from './user.controller.js'
import * as validators from './user.validation.js'
import { validationMiddle } from "../../middleWare/validation.middle.js";
import { asyncHandler } from "../../utils/errorHandling.js";




const router = Router()

router.post("/addUser",validationMiddle(validators.signup),asyncHandler( controllers.signup))
router.post("/login",validationMiddle(validators.login), asyncHandler( controllers.login))





export default router
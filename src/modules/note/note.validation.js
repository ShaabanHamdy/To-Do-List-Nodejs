import joi from 'joi'



export const crateNote = joi.object({
    
    title: joi.string().min(2).messages({
        "string.pattern.base": "title must to be contain min 2 letters  "
    }).required(),
   description: joi.string().min(2).messages({
        "string.pattern.base": "description must to be contain min 2 letters  "
    }).required(),

}).required()
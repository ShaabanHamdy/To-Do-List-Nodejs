import joi from 'joi'


export const signup = joi.object({
    firstName: joi.string().messages({
        "string.min": "must be contain minimum 2 characters"
    }).min(2).max(20).required(),
    lastName: joi.string().min(2).max(20).required(),

    password: joi.string().min(4).messages({
        "string.pattern.base": "password must to be contain min 8 letters capital and small  and spacial characters "
    }).required(),

    email: joi.string().email({
        minDomainSegments: 2,
        maxDomainSegments: 4,
        tlds: { allow: ['com', 'net'] }
    }).required(),
    phone: joi.string().min(11).max(20).required(),

    confirmPassword: joi.string().valid(joi.ref("password")).messages({
        "any.only": "confirmPassword must to be the same value of password "
    }).required(),
    
}).required()
//==========================
export const login = joi.object({
    
    password: joi.string().min(4).messages({
        "string.pattern.base": "password must to be contain min 8 letters capital and small  and spacial characters "
    }).required(),

    email: joi.string().email({
        minDomainSegments: 2,
        maxDomainSegments: 4,
        tlds: { allow: ['com', 'net'] }
    }).required(),
    
}).required()
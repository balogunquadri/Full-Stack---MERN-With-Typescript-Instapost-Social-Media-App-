
import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { userSchema } from '../models/user';
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../keys")
const User = mongoose.model('User', userSchema);


exports.requireLogin = (req: Request, res: Response, next: Function) => {
    const { authorization } = req.headers

    if (!authorization) {
        res.status(401).json({error:"You Must Be Logged In"})
    }
    const token = authorization!.replace("Bearer ", "")
    jwt.verify(token, JWT_SECRET, ((err: any, payload: any) => {
        if (err) {
            res.status(401).json({error:"you must be logged in"})
        }
        const { _id } = payload
        User.findById(_id).then(userdata => {
            (<any>req).user = userdata
            next()
        })
       
    }))
}
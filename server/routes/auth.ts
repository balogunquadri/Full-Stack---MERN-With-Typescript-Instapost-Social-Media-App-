// /app/routes/index.ts
import { Request, Response } from "express";
import * as mongoose from 'mongoose';
import { userSchema } from '../models/user';
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../keys")
const { requireLogin } = require("../middleware/requireLogin")

const User = mongoose.model('User', userSchema);

export class Routes { 

    //  userSchema: UserSchema = new UserSchema();

    public routes(app: any): void {
        // app.route('/protected',requireLogin)
        //     .get((req: Request, res: Response) => {
        //         res.send('Hello Good World!');
        //     });
        
            
        
        app.route('/protected')
            .get(requireLogin, function (req: Request, res: Response) {
                //content
                res.send('Hello Good World!');
            });
           
        
            
         
        
            // sign up
        app.route('/signup')
            .post((req: Request, res: Response) => {
                const { name, email, password } = req.body
                if (!email || !password || !name) {
                    return res.status(422).json({error: "please add required fields"})
                }
                User.findOne({ email: email }).then((savdUser) => {
                    if (savdUser) {
                       return res.status(422).json({error: "User Already exist"})
                    }
                    bcrypt.hash(password, 10)
                        .then((hashedpassword: any) =>{
                            const user = new User({
                                email,
                                password: hashedpassword,
                                name
        
                            })
                            user.save()
                                .then(user => {
                                res.json({message: "User Registered"})
                                })
                                .catch(err => {
                                    console.log(err)
                                    
                            })
                        }).catch((err: any) => {
                           console.log(err)
                       })
                    })
                
            
            })
        
        app.route('/signin')
            .post((req: Request, res: Response) => {
                const { email, password } = req.body
                
                if (!email || !password) {
                    res.status(422).json({ error: "please provide email or password" })
                }
                User.findOne({ email: email }).then(savedUser => {
                    if (!savedUser) {
                      return res.status(422).json({error:"Invalid Email or Password"})
                    }
                    bcrypt.compare(password, ((savedUser as any)["password"])).then((doMatch: any) => {
                        if (doMatch) {
                            // res.json({message:"Successfully Signed In"})
                            const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET)
                            res.json({token})
                        } else {
                            return res.status(422).json({error: "Invalid Email or Password"})
                        }
                    }).catch((err: any) => {
                        console.log(err)
                    })
                    
                })
            })
    }
      
}
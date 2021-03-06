// /app/routes/index.ts
import { Request, Response } from "express";
import * as mongoose from 'mongoose';
import { postSchema } from '../models/post';
const { requireLogin } = require("../middleware/requireLogin")

const Post = mongoose.model('Post', postSchema);

export class PostRoutes {

    //  userSchema: UserSchema = new UserSchema();

    public postroutes(app: any): void {
        
               
         
        
        // create post
        app.route('/createdpost')
            .post(requireLogin, function (req: Request, res: Response) {
                const { title, body } = req.body
                if (!title || !body) {
                    return res.status(422).json({ error: "please add required fields" })
                }
                (<any>req).user.pasword = undefined
                const post = new Post({
                    title,
                    body,
                    postedBy: (<any>req).user
                })
                post.save().then(result => {
                    res.json({ post: result })
                }).catch((err: any) => {
                    console.log(err)
                })
            
            })

        //view all post
        app.route('/allpost')
            .get((req: Request, res: Response) => {
                Post.find().populate("postedBy", "_id name")
                    .then(posts => {
                        res.json({ posts })
                    }).catch(err => {
                        console.log(err)
                    })
            })
    
        
        
        
        app.route('/mypost')
            .get(requireLogin, function (req: Request, res: Response) {
                Post.find({ postedBy: (<any>req).user._id })
                    .populate("postedBy", "_id name").then(mypost => {
                        res.json({ mypost })
                    }).catch((err: any) => {
                        console.log(err)
                    })
                    
            })

    }
}
      

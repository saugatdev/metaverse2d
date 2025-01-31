import { Router } from "express";
import { userRouter } from "./user";
import { spaceRouter } from "./space";
import { adminRouter } from "./admin";
import { SignupSchema } from "../../types";

export const router = Router();

router.post('/signup',(req,res)=>{

    const parsedData = SignupSchema.safeParse(req.body)
    if(!parsedData.success){
        res.status(400).json({
            message:"Validation Failed"
        })
    }

    res.json({
        message:"This is the signup"})
})

router.post('/signin',(req,res)=>{
    res.json({
        message: "This is the signin"})
})
 

router.get("/elements",(req,res)=>{
    
})
router.get("/avatar",(req,res)=>{

})


router.use("/user",userRouter);
router.use("/space",spaceRouter)
router.use("/admin",adminRouter)

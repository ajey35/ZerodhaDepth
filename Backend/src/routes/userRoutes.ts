import { Router } from "express";
import { users } from "../GlobalVars";
import { TICKER } from "../utils/tickers";
import { Request,Response } from "express";

export const userRouter = Router();

let idCount:number = 3;

userRouter.get("/balance/:userId", (req, res) => {
    const userId = req.params.userId;
    const user = users.find(x => x.id === userId);
    if (!user) {
      return res.json({
        USD: 0,
        [TICKER]: 0
      })
    }
    res.json({ balances: user.balances });
  })

  userRouter.get("/profile/:userId", (req, res) => {
    
    const userId = req.params.userId;
        
    const user = users.find(x => x.id === userId);
    if (!user) {
      return res.json({
        USD: 0,
        [TICKER]: 0
      })
    }
    res.json({ user:user});
  })




userRouter.post("/signup",(req:Request,res:Response)=>{

  try {
    const {email,password} = req.body;
    const usr = users.find((x)=>x?.email===email);
    console.log(`USER :{
        email:${email},
        password:${password}
    }`);
    
    if(!usr){
      users.push({
        id: String(idCount++),
        email,
        password,
        balances: {
          "GOOGLE": 0,
          "USD": 500
        },
      })
    }
    if(usr?.password === password){
      res.json({
        id:idCount,
        msg:"Login Successfully!"
      })
    }
    else{
      console.log("Incorrect Password");
      
      res.status(403).json({
        msg:"Password Incorrect!"
      })
    }
  } catch (error) {
     console.error(error);
     res.status(404).json({error:error});
  }

})
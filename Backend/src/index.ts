import express from "express";
import bodyParser from "body-parser";
import orders from "./routes/ordersRoutes";
import { userRouter } from "./routes/userRoutes";
import cors from 'cors'

export const app = express();

app.use(express.json());

app.use(cors())

// Place a limit order
app.use("/api",orders);

app.use("/user",userRouter)

app.get("/quote", (req, res) => {
  res.json({msg:"Do this assignment!!"});
});

app.listen(3000,()=>{
  console.log("Server Started!");
})



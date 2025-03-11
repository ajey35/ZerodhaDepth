import { Router } from "express";
import { fillOrders } from "../functions/orderRelated";
import { asks,bids } from "../GlobalVars";
import { Depth } from "../types/types";



const orders = Router();

orders.post("/order", (req: any, res: any) => {
    const side: string = req.body.side;
    const price: number = req.body.price;
    const quantity: number = req.body.quantity;
    const userId: string = req.body.userId;

    const remainingQty = fillOrders(side, price, quantity, userId);
    
    if (remainingQty === 0) {
      res.json({ filledQuantity: quantity });
      return;
    }
    
    if (side === "bid") {
      bids.push({
        userId,
        price,
        quantity: remainingQty
      });
      bids.sort((a, b) => a.price < b.price ? -1 : 1);
    } else {
      asks.push({
        userId,
        price,
        quantity: remainingQty
      })
      asks.sort((a, b) => a.price < b.price ? 1 : -1);
    }
  
    res.json({
      filledQuantity: quantity - remainingQty,
    })
  })


orders.get("/depth", (req: any, res: any) => {
    const depth:Depth ={}
  
    for (let i = 0; i < bids.length; i++) {
      if (!depth[bids[i].price]) {
        depth[bids[i].price] = {
          quantity: bids[i].quantity,
          type: "bid"
        };
      } else {
        depth[bids[i].price].quantity += bids[i].quantity;
      }
    }
  
    for (let i = 0; i < asks.length; i++) {
      if (!depth[asks[i].price]) {
        depth[asks[i].price] = {
          quantity: asks[i].quantity,
          type: "ask"
        }
      } else {
        depth[asks[i].price].quantity += asks[i].quantity;
      }
    }
  
    res.json(depth)
  })

export default orders;
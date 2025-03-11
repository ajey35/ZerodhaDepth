import { User,Order } from "./types/types";
export const users: User[] = [{
  id: "1",
  balances: {
    "GOOGLE": 10,
    "USD": 50000
  },
  email:"ajay@gmail.com",
  password:"@jay@rchie"
}, {
  id: "2",
  balances: {
    "GOOGLE": 10,
    "USD": 50000
  },
  email:"archie@gmail.com",
  password:"@jay@rchie"
}];
  
export const bids: Order[] = [];
export const asks: Order[] = [];
  
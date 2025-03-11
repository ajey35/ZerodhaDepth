interface Balances {
  [key: string]: number;
}

interface User {
  email: string;
  password:string;
  id: string;
  balances: Balances;
}

interface Order {
  userId: string;
  price: number;
  quantity: number;
}

interface Depth {
  [price: string]: {
    type: "bid" | "ask";
    quantity: number;
  };
}
export {Balances,User,Order,Depth}

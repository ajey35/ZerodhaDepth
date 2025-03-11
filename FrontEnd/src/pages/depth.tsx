"use client"

import type React from "react"

import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../components/navbar"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { ArrowDown, ArrowUp, RefreshCw } from "lucide-react"
import { atom, useAtom } from "jotai"

// Define the mode atom
export const modeState = atom(true) // true for buy, false for sell

interface Depth {
  [price: string]: {
    type: "bid" | "ask"
    quantity: number
  }
}

interface Order {
  userId: string
  price: number
  quantity: number
}

function DepthComp() {
  const userId = localStorage.getItem("id")
  const [depth, setDepth] = useState<Depth>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [mode, setMode] = useAtom(modeState)
  const [order, setOrder] = useState<Order>({
    userId: String(userId),
    price: 0,
    quantity: 0,
  })

  async function fetchDepth() {
    setIsRefreshing(true)
    try {
      const resp = await axios.get("http://localhost:3000/api/depth")
      setDepth(resp.data)
    } catch (error) {
      console.error("Error fetching depth data:", error)
    } finally {
      setIsRefreshing(false)
    }
  }

  useEffect(() => {
    fetchDepth()
    const interval = setInterval(fetchDepth, 2000)
    return () => clearInterval(interval)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const resp = await axios.post("http://localhost:3000/api/order", {
        userId,
        side: mode ? "bid" : "ask",
        price: order.price,
        quantity: order.quantity,
      })
      console.log("Order placed:", resp.data)
      // Reset form or show success message
      setOrder({
        userId: String(userId),
        price: 0,
        quantity: 0,
      })
    } catch (error) {
      console.error("Error placing order:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrder((prev) => ({
      ...prev,
      [name]: Number.parseFloat(value),
    }))
  }

  // Sort and prepare depth data
  const bids = Object.entries(depth)
    .filter(([_, details]) => details.type === "bid")
    .sort((a, b) => Number.parseFloat(b[0]) - Number.parseFloat(a[0])) // Sort bids high to low

  const asks = Object.entries(depth)
    .filter(([_, details]) => details.type === "ask")
    .sort((a, b) => Number.parseFloat(a[0]) - Number.parseFloat(b[0])) // Sort asks low to high

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Depth Card */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-2xl">Market Depth</CardTitle>
                <CardDescription>Real-time order book visualization</CardDescription>
              </div>
              <Button variant="outline" size="icon" onClick={fetchDepth} disabled={isRefreshing}>
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              </Button>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="combined" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="combined">Combined</TabsTrigger>
                  <TabsTrigger value="bids">Bids</TabsTrigger>
                  <TabsTrigger value="asks">Asks</TabsTrigger>
                </TabsList>

                <TabsContent value="combined" className="mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between font-medium text-sm mb-2 text-muted-foreground">
                        <span>Bid Price</span>
                        <span>Quantity</span>
                      </div>
                      <div className="space-y-1 max-h-[400px] overflow-y-auto">
                        {bids.length > 0 ? (
                          bids.map(([price, details]) => (
                            <div
                              key={`bid-${price}`}
                              className="flex justify-between items-center py-1 border-b border-border/40"
                            >
                              <span className="text-green-600 dark:text-green-500 font-medium">
                                ₹{Number.parseFloat(price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                              </span>
                              <span className="font-medium">{details.quantity}</span>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-4 text-muted-foreground">No bids available</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-medium text-sm mb-2 text-muted-foreground">
                        <span>Ask Price</span>
                        <span>Quantity</span>
                      </div>
                      <div className="space-y-1 max-h-[400px] overflow-y-auto">
                        {asks.length > 0 ? (
                          asks.map(([price, details]) => (
                            <div
                              key={`ask-${price}`}
                              className="flex justify-between items-center py-1 border-b border-border/40"
                            >
                              <span className="text-red-600 dark:text-red-500 font-medium">
                                ₹{Number.parseFloat(price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                              </span>
                              <span className="font-medium">{details.quantity}</span>
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-4 text-muted-foreground">No asks available</div>
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="bids" className="mt-4">
                  <div className="flex justify-between font-medium text-sm mb-2 text-muted-foreground">
                    <span>Bid Price</span>
                    <span>Quantity</span>
                  </div>
                  <div className="space-y-1 max-h-[400px] overflow-y-auto">
                    {bids.length > 0 ? (
                      bids.map(([price, details]) => (
                        <div
                          key={`bid-tab-${price}`}
                          className="flex justify-between items-center py-1 border-b border-border/40"
                        >
                          <span className="text-green-600 dark:text-green-500 font-medium">
                            ₹{Number.parseFloat(price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                          </span>
                          <span className="font-medium">{details.quantity}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">No bids available</div>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="asks" className="mt-4">
                  <div className="flex justify-between font-medium text-sm mb-2 text-muted-foreground">
                    <span>Ask Price</span>
                    <span>Quantity</span>
                  </div>
                  <div className="space-y-1 max-h-[400px] overflow-y-auto">
                    {asks.length > 0 ? (
                      asks.map(([price, details]) => (
                        <div
                          key={`ask-tab-${price}`}
                          className="flex justify-between items-center py-1 border-b border-border/40"
                        >
                          <span className="text-red-600 dark:text-red-500 font-medium">
                            ₹{Number.parseFloat(price).toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                          </span>
                          <span className="font-medium">{details.quantity}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 text-muted-foreground">No asks available</div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Order Form Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">TATA MOTORS</CardTitle>
              <CardDescription>Place your order</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <RadioGroup
                  defaultValue={mode ? "buy" : "sell"}
                  onValueChange={(value) => setMode(value === "buy")}
                  className="flex justify-center space-x-8"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="buy" id="buy" />
                    <Label htmlFor="buy" className="text-green-600 dark:text-green-500 font-bold flex items-center">
                      <ArrowUp className="mr-1 h-4 w-4" />
                      BUY
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sell" id="sell" />
                    <Label htmlFor="sell" className="text-red-600 dark:text-red-500 font-bold flex items-center">
                      <ArrowDown className="mr-1 h-4 w-4" />
                      SELL
                    </Label>
                  </div>
                </RadioGroup>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Limit Price (₹)</Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      placeholder="Enter limit price"
                      value={order.price || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      type="number"
                      min="1"
                      placeholder="Enter quantity"
                      value={order.quantity || ""}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className={`w-full ${mode ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    ) : mode ? (
                      <>
                        <ArrowUp className="mr-2 h-4 w-4" />
                        BUY
                      </>
                    ) : (
                      <>
                        <ArrowDown className="mr-2 h-4 w-4" />
                        SELL
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DepthComp


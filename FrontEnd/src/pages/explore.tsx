import Navbar from "../components/navbar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { BarChart2, LineChart, PieChart, TrendingUp, Activity, Zap, ArrowRight, Shield, Smartphone, Bell } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Explore Our Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful tools and features that make TradePulse the preferred platform for market depth analysis.
          </p>
        </div>
        
        <Tabs defaultValue="market-depth" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="market-depth">Market Depth</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="trading">Trading</TabsTrigger>
          </TabsList>
          
          <TabsContent value="market-depth" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart2 className="mr-2 h-5 w-5" />
                  Advanced Market Depth Visualization
                </CardTitle>
                <CardDescription>
                  See the complete order book with intuitive visual representation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Real-time Order Book</h3>
                    <p className="text-muted-foreground mb-4">
                      View live updates of bids and asks with color-coded visualization to quickly identify support and resistance levels.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Instant updates with WebSocket connection
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Color-coded price levels for quick analysis
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Customizable view options
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center bg-muted rounded-lg p-6">
                    <BarChart2 className="h-32 w-32 text-primary opacity-70" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/depth">
                  <Button>
                    Try Market Depth
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="charts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="mr-2 h-5 w-5" />
                  Technical Analysis Charts
                </CardTitle>
                <CardDescription>
                  Powerful charting tools with multiple indicators and timeframes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Advanced Charting</h3>
                    <p className="text-muted-foreground mb-4">
                      Access a wide range of chart types and technical indicators to analyze market trends and make informed trading decisions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Multiple chart types (candlestick, line, bar)
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Over 50 technical indicators
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Drawing tools for trend analysis
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center bg-muted rounded-lg p-6">
                    <Activity className="h-32 w-32 text-primary opacity-70" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled>
                  Coming Soon
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="trading" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Efficient Trading Interface
                </CardTitle>
                <CardDescription>
                  Execute trades quickly with our streamlined order entry system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium mb-2">One-Click Trading</h3>
                    <p className="text-muted-foreground mb-4">
                      Place market and limit orders with a single click, allowing you to act quickly on trading opportunities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Instant order execution
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Multiple order types supported
                      </li>
                      <li className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primary" />
                        Risk management tools included
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center bg-muted rounded-lg p-6">
                    <PieChart className="h-32 w-32 text-primary opacity-70" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="/depth">
                  <Button>
                    Try Trading Interface
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">More Features</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="p-2 rounded-lg bg-primary/10 w-fit">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Secure Platform</CardTitle>
                <CardDescription>
                  Enterprise-grade security for your trading activities
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="p-2 rounded-lg bg-primary/10 w-fit">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Mobile Access</CardTitle>
                <CardDescription>
                  Trade and monitor markets from anywhere
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="p-2 rounded-lg bg-primary/10 w-fit">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="mt-4">Price Alerts</CardTitle>
                <CardDescription>
                  Get notified when markets reach your target levels
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-background mt-20">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TradePulse. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </a>
            <a href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

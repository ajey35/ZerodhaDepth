import Navbar from "../components/navbar";
import { Button } from "../components/ui/button";
import { ArrowRight, BarChart2, ChevronRight, LineChart, TrendingUp } from 'lucide-react';
import { Card,  CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Home() {

  const navigate = useNavigate()
  useEffect(()=>{
    const id = localStorage.getItem("id");
    if(!id){
      navigate("/signup")
    }
  },[])
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Advanced Market Depth Analysis
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get real-time insights into market liquidity and order flow with our advanced depth visualization tools.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link to="/depth">
                    <Button size="lg" className="gap-1.5">
                      View Market Depth
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/explore">
                    <Button size="lg" variant="outline">
                      Explore Features
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20 blur-xl"></div>
                  <div className="relative bg-card border rounded-lg shadow-lg p-6 h-full flex items-center justify-center">
                    <BarChart2 className="h-48 w-48 text-primary opacity-80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Trading Features
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Our platform provides everything you need for informed trading decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <BarChart2 className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Real-time Depth</CardTitle>
                  <CardDescription>
                    View live order book data with bid and ask visualization.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to="/depth" className="text-sm text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <LineChart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Advanced Charts</CardTitle>
                  <CardDescription>
                    Technical analysis tools to identify market trends.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to="/explore" className="text-sm text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <div className="p-2 rounded-lg bg-primary/10 w-fit">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">One-Click Trading</CardTitle>
                  <CardDescription>
                    Execute trades quickly with our streamlined interface.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to="/about" className="text-sm text-primary flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to start trading?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of traders who trust our platform for market analysis.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/signup">
                  <Button size="lg" className="gap-1.5">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TradePulse. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link to="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link to="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

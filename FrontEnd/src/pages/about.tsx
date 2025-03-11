import Navbar from "../components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Building, Users, Shield, Award, BarChart2 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">About TradePulse</h1>
            <p className="text-xl text-muted-foreground">
              Empowering traders with advanced market depth visualization and analysis tools.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  At TradePulse, we're committed to providing traders with the most advanced and intuitive market depth visualization tools. Our mission is to democratize access to professional-grade trading technology and empower individual traders to make more informed decisions.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Our Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our team consists of experienced traders, financial analysts, and software engineers who understand the challenges of modern trading. We combine deep market knowledge with cutting-edge technology to create tools that give you an edge in the markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="mr-2 h-5 w-5" />
                  Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize the security of your data and transactions above all else, implementing industry-leading security measures.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BarChart2 className="mr-2 h-5 w-5" />
                  Transparency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in complete transparency in our operations, pricing, and the way our tools work to help you trade.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Award className="mr-2 h-5 w-5" />
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, constantly improving our platform based on user feedback and market changes.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4">
                TradePulse was founded in 2020 by a group of traders who were frustrated with the limited market depth visualization tools available to retail traders. They believed that better visualization of order book data could lead to more informed trading decisions.
              </p>
              <p className="mb-4">
                What started as a simple tool for personal use quickly gained attention from other traders who saw the value in our approach to market depth analysis. As demand grew, we expanded our team and features to create the comprehensive trading platform you see today.
              </p>
              <p>
                Today, TradePulse serves thousands of traders worldwide, from beginners to professionals, all seeking an edge in understanding market dynamics through advanced order book visualization.
              </p>
            </CardContent>
          </Card>
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

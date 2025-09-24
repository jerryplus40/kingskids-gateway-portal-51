import { Users, Monitor, BookOpen, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Classrooms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Modern <span className="text-primary">Classrooms</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art learning environments designed to inspire creativity, 
            collaboration, and academic excellence in every student.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Smart Technology</CardTitle>
                <CardDescription>
                  Interactive whiteboards and digital learning tools in every classroom
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Collaborative Spaces</CardTitle>
                <CardDescription>
                  Flexible seating arrangements that promote teamwork and discussion
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Natural Lighting</CardTitle>
                <CardDescription>
                  Bright, naturally lit spaces that create an optimal learning environment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Resource Centers</CardTitle>
                <CardDescription>
                  Built-in storage and resource areas for all educational materials
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Classroom Types */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Classroom Types</h2>
            <p className="text-muted-foreground text-lg">
              Different learning environments for different educational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Early Years Classrooms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Child-sized furniture and equipment</li>
                  <li>• Play-based learning areas</li>
                  <li>• Safe, colorful environments</li>
                  <li>• Easy access to outdoor spaces</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Primary Classrooms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Interactive learning displays</li>
                  <li>• Flexible group work areas</li>
                  <li>• Reading corners and quiet zones</li>
                  <li>• Technology integration points</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Classrooms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Advanced presentation systems</li>
                  <li>• Collaborative project spaces</li>
                  <li>• Subject-specific equipment storage</li>
                  <li>• Independent study areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Experience Our Learning Spaces
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Visit our campus to see how our modern classrooms support student success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/how-to-apply">Learn About Admission</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Classrooms;
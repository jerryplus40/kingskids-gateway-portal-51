import { BookOpen, Wifi, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Library = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Knowledge <span className="text-primary">Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern library and resource center where students discover, learn, 
            and grow through access to vast collections and digital resources.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Extensive Collection</CardTitle>
                <CardDescription>
                  Over 10,000 books, journals, and digital resources across all subjects
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Digital Access</CardTitle>
                <CardDescription>
                  High-speed internet and access to online databases and e-books
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Extended Hours</CardTitle>
                <CardDescription>
                  Open from 7:00 AM to 8:00 PM to accommodate all schedules
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Study Spaces</CardTitle>
                <CardDescription>
                  Quiet study areas, group rooms, and collaborative spaces
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Library Sections */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Library Sections</h2>
            <p className="text-muted-foreground text-lg">
              Specialized areas designed for different learning needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Children's Section</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Picture books and early readers</li>
                  <li>• Interactive story corner</li>
                  <li>• Educational games and puzzles</li>
                  <li>• Comfortable reading nooks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reference Section</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Encyclopedias and dictionaries</li>
                  <li>• Academic journals and periodicals</li>
                  <li>• Research databases</li>
                  <li>• Thesis and project archives</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Center</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Computer workstations</li>
                  <li>• Online catalog system</li>
                  <li>• Digital printing services</li>
                  <li>• Multimedia resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hours and Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Library Hours</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">12:00 PM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Services</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Book borrowing and renewals</li>
                  <li>• Research assistance</li>
                  <li>• Inter-library loans</li>
                  <li>• Study room reservations</li>
                  <li>• Printing and scanning</li>
                  <li>• Reading programs</li>
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
            Visit Our Library
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Discover a world of knowledge and resources at our modern library facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Tour</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/how-to-apply">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Library;
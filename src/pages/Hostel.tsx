import { Home, Wifi, Utensils, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Hostel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Student <span className="text-primary">Hostel</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A safe, comfortable home away from home where students live, learn, 
            and build lifelong friendships in a supportive community environment.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Comfortable Rooms</CardTitle>
                <CardDescription>
                  Well-furnished single and shared rooms with modern amenities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>24/7 Security</CardTitle>
                <CardDescription>
                  Round-the-clock security with CCTV monitoring and access control
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Utensils className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Nutritious Meals</CardTitle>
                <CardDescription>
                  Balanced, healthy meals prepared by professional nutritionists
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wifi className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Modern Amenities</CardTitle>
                <CardDescription>
                  High-speed internet, laundry facilities, and recreational areas
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Accommodation Options</h2>
            <p className="text-muted-foreground text-lg">
              Different room types to suit various preferences and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Single Rooms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Private bedroom and study area</li>
                  <li>• Personal wardrobe and storage</li>
                  <li>• Ensuite bathroom facilities</li>
                  <li>• Individual climate control</li>
                  <li>• High-speed internet access</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shared Rooms</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Two-person occupancy</li>
                  <li>• Shared bathroom facilities</li>
                  <li>• Individual study desks</li>
                  <li>• Common storage areas</li>
                  <li>• Collaborative learning space</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Senior Student Suites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Spacious private rooms</li>
                  <li>• Mini-kitchenette facilities</li>
                  <li>• Premium furnishing and decor</li>
                  <li>• Balcony or garden access</li>
                  <li>• Leadership responsibilities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities & Rules */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Hostel Facilities</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Common recreation rooms with TV and games</li>
                  <li>• Self-service laundry facilities</li>
                  <li>• 24/7 medical support and infirmary</li>
                  <li>• Study halls and quiet zones</li>
                  <li>• Gymnasium and sports facilities</li>
                  <li>• Visitor reception areas</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Hostel Life</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Supervised study hours</li>
                  <li>• Cultural and recreational activities</li>
                  <li>• Peer mentoring programs</li>
                  <li>• Regular room inspections</li>
                  <li>• Weekend excursions and events</li>
                  <li>• Student council participation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Dining Services</h2>
            <p className="text-muted-foreground text-lg">
              Nutritious meals prepared with care for growing minds and bodies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Breakfast</CardTitle>
                <CardDescription>6:30 - 8:00 AM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fresh fruits, cereals, eggs, and local delicacies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Lunch</CardTitle>
                <CardDescription>12:00 - 2:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Balanced meals with proteins, vegetables, and grains
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Snacks</CardTitle>
                <CardDescription>4:00 - 5:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Healthy snacks and beverages for energy
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Dinner</CardTitle>
                <CardDescription>7:00 - 9:00 PM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hearty meals with international and local cuisine
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Experience Hostel Life
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our residential community and create memories that last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/admission">Apply for Admission</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hostel;
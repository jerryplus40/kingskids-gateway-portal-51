import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Phone,
  Mail,
  Car,
  Coffee,
  BookOpen,
  Eye
} from "lucide-react";

const ArrangeAVisit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="Visit King's Kids Schools" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Admissions
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            Arrange a Visit
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience King's Kids Schools firsthand. Schedule a campus tour and see why we're the right choice for your child
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Visit Options */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Visit Options</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose the visit option that works best for you and your family. We're here to accommodate your schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Group Tours</CardTitle>
                  <CardDescription>Join other families</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Join scheduled group tours every Saturday morning at 10:00 AM and 2:00 PM.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• 90-minute comprehensive tour</li>
                    <li>• Meet with admissions team</li>
                    <li>• Q&A session included</li>
                    <li>• No advance booking required</li>
                  </ul>
                  <Badge variant="secondary">Most Popular</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow border-2 border-primary">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Private Tours</CardTitle>
                  <CardDescription>Personalized experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    One-on-one personalized tour with dedicated admissions counselor.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Flexible scheduling</li>
                    <li>• Customized to your interests</li>
                    <li>• Meet potential teachers</li>
                    <li>• Visit specific classrooms</li>
                  </ul>
                  <Badge className="bg-primary">Recommended</Badge>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Shadow Days</CardTitle>
                  <CardDescription>Experience a school day</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Your child can spend a full day shadowing a current student.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                    <li>• Full day experience</li>
                    <li>• Attend actual classes</li>
                    <li>• Meet students and teachers</li>
                    <li>• Lunch included</li>
                  </ul>
                  <Badge variant="outline">Best Experience</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Visit Request Form */}
          <section className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Schedule Your Visit</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll contact you within 24 hours to confirm your visit
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Visit Request Form</CardTitle>
                  <CardDescription>Please provide your details and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent-name">Parent/Guardian Name *</Label>
                      <Input id="parent-name" placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child-name">Child's Name *</Label>
                      <Input id="child-name" placeholder="Child's full name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+234 xxx xxx xxxx" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="program">Program of Interest *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="montessori">Montessori (Ages 2-6)</SelectItem>
                          <SelectItem value="basic-studies">Basic Studies (Primary 1-6)</SelectItem>
                          <SelectItem value="high-school">High School (JSS 1 - SS 3)</SelectItem>
                          <SelectItem value="all">All Programs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="child-age">Child's Current Age</Label>
                      <Input id="child-age" placeholder="Age in years" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visit-type">Preferred Visit Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select visit type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="group">Group Tour (Saturday 10 AM or 2 PM)</SelectItem>
                        <SelectItem value="private">Private Tour (Flexible scheduling)</SelectItem>
                        <SelectItem value="shadow">Shadow Day Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferred-date">Preferred Date</Label>
                      <Input id="preferred-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-time">Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="special-requests">Special Requests or Questions</Label>
                    <Textarea 
                      id="special-requests" 
                      placeholder="Any specific areas you'd like to focus on, accessibility needs, or questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button size="lg" className="w-full">
                    Submit Visit Request
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What to Expect */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What to Expect During Your Visit</h2>
                <p className="text-lg text-muted-foreground">
                  Here's what you can expect during your campus tour and visit experience
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Welcome & Registration</h3>
                  <p className="text-muted-foreground text-sm">
                    Check-in at our reception, meet your tour guide, and receive welcome materials
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-12 h-12 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-school-blue" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Campus Tour</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive tour of classrooms, facilities, labs, library, and recreational areas
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Meet the Team</h3>
                  <p className="text-muted-foreground text-sm">
                    Introduction to our teachers, administrators, and support staff
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                  <div className="w-12 h-12 bg-school-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-school-gold" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Admissions Discussion</h3>
                  <p className="text-muted-foreground text-sm">
                    Q&A session, admissions process overview, and next steps discussion
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Visit Information */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Visit Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Visit Times & Duration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Group Tours</h4>
                    <p className="text-muted-foreground text-sm">Saturdays: 10:00 AM & 2:00 PM (90 minutes)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Private Tours</h4>
                    <p className="text-muted-foreground text-sm">Monday-Friday: 9:00 AM - 4:00 PM (60-90 minutes)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Shadow Days</h4>
                    <p className="text-muted-foreground text-sm">Monday-Friday: 8:00 AM - 3:00 PM (Full day)</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    Directions & Parking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Montessori Campus</h4>
                    <p className="text-muted-foreground text-sm">Plot 185, Line F, Ewet Housing Estate, Uyo</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">High School Campus</h4>
                    <p className="text-muted-foreground text-sm">Plot 14, Line J, Sam Edem Street, Ewet Housing Estate</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Parking</h4>
                    <p className="text-muted-foreground text-sm">Free parking available on both campuses</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Questions About Your Visit?</h2>
            <p className="text-xl mb-8 text-white/90">
              Our admissions team is here to help you plan the perfect visit experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="h-4 w-4 mr-2" />
                Call: +2348058403852
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Mail className="h-4 w-4 mr-2" />
                Email Admissions
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArrangeAVisit;
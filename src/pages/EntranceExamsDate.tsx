import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar,
  Clock,
  MapPin,
  FileText,
  AlertCircle,
  CheckCircle,
  Users,
  BookOpen
} from "lucide-react";

const EntranceExamsDate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="Entrance Exams at King's Kids" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Admissions
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            Entrance Exam Dates
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Schedule and important information for entrance examinations across all our programs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* 2024/2025 Exam Schedule */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">2024/2025 Academic Session</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                All entrance examinations are conducted at our school premises. Please arrive 30 minutes before the scheduled time.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Montessori */}
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Montessori</CardTitle>
                      <CardDescription>Ages 2-6 years</CardDescription>
                    </div>
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">June 15, 2024</p>
                      <p className="text-sm text-muted-foreground">Saturday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">9:00 AM - 11:00 AM</p>
                      <p className="text-sm text-muted-foreground">2 hours duration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">Montessori Campus</p>
                      <p className="text-sm text-muted-foreground">Plot 185, Line F, Ewet Housing Estate</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Assessment Areas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Basic communication skills</li>
                      <li>• Social interaction</li>
                      <li>• Simple cognitive tasks</li>
                      <li>• Physical coordination</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Basic Studies */}
              <Card className="overflow-hidden border-2 border-primary hover:border-primary/70 transition-colors relative">
                <Badge className="absolute top-4 right-4 bg-primary">Popular</Badge>
                <CardHeader className="bg-gradient-to-br from-school-blue/10 to-primary/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">Basic Studies</CardTitle>
                      <CardDescription>Primary 1-6</CardDescription>
                    </div>
                    <BookOpen className="h-8 w-8 text-school-blue" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">June 16, 2024</p>
                      <p className="text-sm text-muted-foreground">Sunday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">8:00 AM - 12:00 PM</p>
                      <p className="text-sm text-muted-foreground">4 hours duration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">High School Campus</p>
                      <p className="text-sm text-muted-foreground">Plot 14, Line J, Sam Edem Street</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Assessment Areas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• English Language</li>
                      <li>• Mathematics</li>
                      <li>• General Knowledge</li>
                      <li>• Oral Interview</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* High School */}
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-school-orange/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">High School</CardTitle>
                      <CardDescription>JSS 1 - SS 3</CardDescription>
                    </div>
                    <FileText className="h-8 w-8 text-accent" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">June 17-18, 2024</p>
                      <p className="text-sm text-muted-foreground">Monday & Tuesday</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">8:00 AM - 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">6 hours over 2 days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold">High School Campus</p>
                      <p className="text-sm text-muted-foreground">Plot 14, Line J, Sam Edem Street</p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Assessment Areas:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• English Language</li>
                      <li>• Mathematics</li>
                      <li>• Basic Science</li>
                      <li>• Social Studies</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Make-up Exam Dates */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-school-blue/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Make-up Examination Dates</h2>
                <p className="text-lg text-muted-foreground">
                  For candidates who miss the initial examination dates due to unavoidable circumstances
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Montessori Make-up</CardTitle>
                    <CardDescription>June 22, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Time:</strong> 9:00 AM - 11:00 AM<br/>
                      <strong>Venue:</strong> Montessori Campus
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-school-blue" />
                    </div>
                    <CardTitle>Basic Studies Make-up</CardTitle>
                    <CardDescription>June 23, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Time:</strong> 8:00 AM - 12:00 PM<br/>
                      <strong>Venue:</strong> High School Campus
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle>High School Make-up</CardTitle>
                    <CardDescription>June 24-25, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      <strong>Time:</strong> 8:00 AM - 2:00 PM<br/>
                      <strong>Venue:</strong> High School Campus
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* What to Bring */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">What to Bring on Exam Day</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Required Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Examination slip/admission letter</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Valid identification (birth certificate)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Blue or black pens (2-3 pieces)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Pencils and eraser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Mathematical set (for applicable levels)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Water bottle and light snack</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                    Not Allowed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span>Mobile phones or electronic devices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span>Calculators (unless specified)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span>Books, notes, or reference materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span>Bags (except for carrying permitted items)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span>Smart watches or wearable devices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span>Food items (except light snacks and water)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Important Notice */}
          <section className="mb-16">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Candidates must arrive at least 30 minutes before the exam time</li>
                    <li>• Late arrivals may not be permitted to take the examination</li>
                    <li>• Parents/guardians are not allowed in the examination halls</li>
                    <li>• Results will be available within 2 weeks after the examination</li>
                    <li>• Make-up exams are only for candidates with valid reasons and prior approval</li>
                    <li>• Examination fees are non-refundable under any circumstances</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for More Info */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready for Your Entrance Exam?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get all the information you need and apply today to secure your child's spot
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/how-to-apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EntranceExamsDate;
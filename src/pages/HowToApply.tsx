import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText,
  Clock,
  CheckCircle,
  Users,
  Calendar,
  Download,
  Upload,
  Phone,
  Camera,
  Clipboard,
  ShoppingBag
} from "lucide-react";

const HowToApply = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="How to Apply to King's Kids" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Admissions
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            How to Apply
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your journey to excellence starts here. Follow our simple application process to join King's Kids Schools
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Application Steps */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Application Process</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our streamlined application process makes it easy for you to apply. Follow these simple steps to begin your child's educational journey with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <Card className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Download Forms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Download and complete the application forms for your chosen program
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Submit Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Submit completed forms with required documents and application fee
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Entrance Exam</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Attend the entrance examination and interview as scheduled
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <CardHeader className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Admission Decision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive admission decision and complete enrollment process
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What to Bring Section */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clipboard className="h-5 w-5 text-primary" />
                    What to Bring
                  </CardTitle>
                  <CardDescription>
                    Required items for admission
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Camera className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>Two (2) recent passport photographs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>A copy of last term's result and/or transfer certificate (where applicable)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>Photocopy of birth certificate or age declaration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>A comprehensive medical report specifying allergies and conditions suffered by the student (if any) on assumption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <span>Certificate of Origin</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="h-5 w-5 text-accent" />
                    School Uniforms
                  </CardTitle>
                  <CardDescription>
                    Uniform purchase information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Uniforms are to be purchased by the students from the school. Our uniforms are available in all sizes and can be purchased at the school's uniform store during office hours.
                  </p>
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm font-medium">Note:</p>
                    <p className="text-sm text-muted-foreground">
                      Please wait until admission is confirmed before purchasing uniforms to ensure proper sizing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Application Forms */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Application Forms</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Montessori Application
                  </CardTitle>
                  <CardDescription>
                    For children aged 2-6 years
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete application form for our Montessori program including early years education.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="#" download>Download Form</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-br from-school-blue/10 to-primary/10">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Basic Studies Application
                  </CardTitle>
                  <CardDescription>
                    For Primary 1-6 students
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Application form for our School of Basic Studies (Primary education).
                  </p>
                  <Button className="w-full" asChild>
                    <a href="#" download>Download Form</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-br from-accent/10 to-school-orange/10">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    High School Application
                  </CardTitle>
                  <CardDescription>
                    For JSS 1 - SS 3 students
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Application form for our High School program (Junior & Senior Secondary).
                  </p>
                  <Button className="w-full" asChild>
                    <a href="#" download>Download Form</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Required Documents */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Required Documents</h2>
                <p className="text-lg text-muted-foreground">
                  Please ensure you have all required documents ready before submitting your application
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    For All Applicants
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Completed application form</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Birth certificate (certified copy)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Recent passport photographs (4 copies)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Medical certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Application fee receipt</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Academic Records
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Previous school report cards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Transfer certificate (if applicable)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Primary School Leaving Certificate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Junior WAEC results (for SS 1 entry)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Recommendation letter from previous school</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Important Dates */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Important Dates</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Application Opens</CardTitle>
                  <CardDescription>January 15, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Online and physical application forms become available
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Application Deadline</CardTitle>
                  <CardDescription>May 31, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Last date for submission of completed applications
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-school-blue" />
                  </div>
                  <CardTitle>Entrance Exams</CardTitle>
                  <CardDescription>June 15-20, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Entrance examinations and interviews week
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Support */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Need Help with Your Application?</h2>
            <p className="text-xl mb-8 text-white/90">
              Our admissions team is here to guide you through the application process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Admissions</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Phone className="h-4 w-4 mr-2" />
                Call: +2348058403852
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowToApply;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calculator,
  CreditCard,
  DollarSign,
  GraduationCap,
  Book,
  Calendar,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const SchoolFees = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="School Fees at King's Kids" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Admissions
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            School Fees
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transparent pricing for quality education. Invest in your child's future with affordable excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Fee Structure */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">2024/2025 Academic Session Fee Structure</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our competitive fee structure ensures quality education remains accessible while maintaining our high standards of excellence.
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
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tuition Fee (Annual)</span>
                      <span className="font-semibold">₦450,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Development Levy</span>
                      <span className="font-semibold">₦50,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Books & Materials</span>
                      <span className="font-semibold">₦35,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Uniform</span>
                      <span className="font-semibold">₦25,000</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₦560,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/how-to-apply">Apply Now</Link>
                  </Button>
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
                    <Book className="h-8 w-8 text-school-blue" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tuition Fee (Annual)</span>
                      <span className="font-semibold">₦380,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Development Levy</span>
                      <span className="font-semibold">₦40,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Books & Materials</span>
                      <span className="font-semibold">₦45,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Uniform</span>
                      <span className="font-semibold">₦30,000</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₦495,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/how-to-apply">Apply Now</Link>
                  </Button>
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
                    <Calculator className="h-8 w-8 text-accent" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Tuition Fee (Annual)</span>
                      <span className="font-semibold">₦520,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Development Levy</span>
                      <span className="font-semibold">₦60,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Books & Materials</span>
                      <span className="font-semibold">₦55,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Uniform</span>
                      <span className="font-semibold">₦35,000</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">₦670,000</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" asChild>
                    <Link to="/how-to-apply">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Payment Options */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Payment Options</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Full Payment</CardTitle>
                  <CardDescription>Pay annually and save</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pay the full annual fee upfront and receive a 5% discount on tuition fees.
                  </p>
                  <Badge variant="secondary">5% Discount</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Termly Payment</CardTitle>
                  <CardDescription>Pay in three installments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Split your fees into three equal payments - one per term throughout the academic year.
                  </p>
                  <Badge variant="outline">Most Popular</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="h-8 w-8 text-school-blue" />
                  </div>
                  <CardTitle>Payment Plan</CardTitle>
                  <CardDescription>Flexible monthly options</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Spread payments over 10 months with our flexible payment plan option.
                  </p>
                  <Badge variant="outline">Flexible</Badge>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What's Included in Your Fees</h2>
                <p className="text-lg text-muted-foreground">
                  Our comprehensive fee structure covers everything your child needs for academic success
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Quality Education</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Expert teaching staff, small class sizes, and personalized attention
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Learning Materials</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Textbooks, workbooks, and educational resources for all subjects
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Facilities Access</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Library, science labs, computer lab, and sports facilities
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Extracurricular Activities</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Sports, music, drama, clubs, and various enrichment programs
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Assessment & Reports</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Continuous assessment, termly reports, and parent-teacher conferences
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold">Support Services</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Academic support, counseling services, and career guidance
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="mb-16">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Important Information</h3>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Application fee of ₦5,000 is required and non-refundable</li>
                    <li>• All fees are subject to review and may change annually</li>
                    <li>• Late payment attracts a penalty of 5% per month after due date</li>
                    <li>• Refunds are only applicable as per school policy guidelines</li>
                    <li>• Additional costs may apply for field trips and special programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for More Info */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Questions About Fees?</h2>
            <p className="text-xl mb-8 text-white/90">
              Our admissions team is ready to discuss payment options and answer any questions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/faqs">View FAQs</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SchoolFees;
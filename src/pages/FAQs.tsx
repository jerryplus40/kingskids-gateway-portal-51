import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  HelpCircle,
  BookOpen,
  DollarSign,
  Clock,
  Users,
  GraduationCap,
  Phone,
  Mail
} from "lucide-react";

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="FAQs - King's Kids Schools" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Admissions
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about admissions, programs, and life at King's Kids Schools
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* FAQ Categories */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Quick Navigation</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Browse questions by category to find the information you need quickly
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Admissions</CardTitle>
                  <CardDescription>Application process and requirements</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-8 w-8 text-school-blue" />
                  </div>
                  <CardTitle>Fees & Payment</CardTitle>
                  <CardDescription>School fees and payment options</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle>Academic Program</CardTitle>
                  <CardDescription>Curriculum and school activities</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-school-green" />
                  </div>
                  <CardTitle>School Life</CardTitle>
                  <CardDescription>Daily routine and school culture</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-school-gold" />
                  </div>
                  <CardTitle>Programs</CardTitle>
                  <CardDescription>Available educational programs</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="h-8 w-8 text-school-orange" />
                  </div>
                  <CardTitle>General</CardTitle>
                  <CardDescription>Other common questions</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* FAQ Sections */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Admissions FAQs */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  Admissions
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="admissions-1" className="border rounded-lg px-4">
                    <AccordionTrigger>What is the admission process like?</AccordionTrigger>
                    <AccordionContent>
                      Our admission process includes four main steps: downloading and completing application forms, submitting required documents with application fee, attending entrance examinations and interviews, and receiving admission decision. The entire process typically takes 2-3 weeks from application submission to decision.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="admissions-2" className="border rounded-lg px-4">
                    <AccordionTrigger>When does the application period open?</AccordionTrigger>
                    <AccordionContent>
                      Application forms are available from January 15, 2024, and the deadline for submission is May 31, 2024. We recommend applying early as spaces are limited and filled on a first-come, first-served basis for qualified candidates.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="admissions-3" className="border rounded-lg px-4">
                    <AccordionTrigger>What documents are required for admission?</AccordionTrigger>
                    <AccordionContent>
                      Required documents include: completed application form, birth certificate (certified copy), recent passport photographs (4 copies), medical certificate, application fee receipt, previous school report cards, transfer certificate (if applicable), and recommendation letter from previous school.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="admissions-4" className="border rounded-lg px-4">
                    <AccordionTrigger>Is there an entrance examination?</AccordionTrigger>
                    <AccordionContent>
                      Yes, all applicants (except Montessori age 2-3) are required to take entrance examinations. The exams are scheduled for June 15-20, 2024, and assess English Language, Mathematics, and other subjects relevant to the program level. Make-up exams are available for valid reasons.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Fees & Payment FAQs */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-school-blue" />
                  Fees & Payment
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="fees-1" className="border rounded-lg px-4">
                    <AccordionTrigger>How much are the school fees?</AccordionTrigger>
                    <AccordionContent>
                      Total annual fees vary by program: Montessori (₦560,000), Basic Studies (₦495,000), and High School (₦670,000). These include tuition, development levy, books & materials, and uniform. Additional costs may apply for special programs and field trips.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="fees-2" className="border rounded-lg px-4">
                    <AccordionTrigger>What payment options are available?</AccordionTrigger>
                    <AccordionContent>
                      We offer three payment options: Full annual payment (with 5% discount on tuition), Termly payment (three equal installments), and Monthly payment plan (spread over 10 months). Payment can be made via bank transfer, cash, or check.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="fees-3" className="border rounded-lg px-4">
                    <AccordionTrigger>Are there any scholarships available?</AccordionTrigger>
                    <AccordionContent>
                      We offer limited merit-based scholarships for exceptional students and need-based financial aid for deserving families. Scholarship applications are reviewed annually, and recipients must maintain academic excellence and good conduct throughout their studies.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="fees-4" className="border rounded-lg px-4">
                    <AccordionTrigger>What happens if fees are paid late?</AccordionTrigger>
                    <AccordionContent>
                      Late payment attracts a penalty of 5% per month after the due date. Students with outstanding fees may be excluded from classes and examinations until payments are made. We encourage parents to contact the accounts office if facing payment difficulties.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Academic Program FAQs */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-accent" />
                  Academic Program
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="academic-1" className="border rounded-lg px-4">
                    <AccordionTrigger>What curriculum do you follow?</AccordionTrigger>
                    <AccordionContent>
                      We follow the Nigerian National Curriculum enhanced with international best practices. Our Montessori program uses authentic Montessori methods, Basic Studies follows the Universal Basic Education curriculum, and High School prepares students for WAEC and NECO examinations.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="academic-2" className="border rounded-lg px-4">
                    <AccordionTrigger>What is your teacher-to-student ratio?</AccordionTrigger>
                    <AccordionContent>
                      We maintain small class sizes with ratios of 1:15 in Montessori, 1:20 in Basic Studies, and 1:25 in High School. This ensures personalized attention and quality interaction between teachers and students, leading to better academic outcomes.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="academic-3" className="border rounded-lg px-4">
                    <AccordionTrigger>Do you offer extracurricular activities?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer a wide range of activities including sports (football, basketball, swimming), music and drama, debate club, science club, art classes, and various cultural activities. Students are encouraged to participate to develop their talents and interests.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="academic-4" className="border rounded-lg px-4">
                    <AccordionTrigger>How do you assess student progress?</AccordionTrigger>
                    <AccordionContent>
                      We use continuous assessment methods including class tests, assignments, projects, and termly examinations. Parents receive detailed reports three times per year and can schedule parent-teacher conferences to discuss their child's progress at any time.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* School Life FAQs */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6 text-school-green" />
                  School Life
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="school-life-1" className="border rounded-lg px-4">
                    <AccordionTrigger>What are the school hours?</AccordionTrigger>
                    <AccordionContent>
                      School hours are Monday to Friday: Montessori (8:00 AM - 12:00 PM), Basic Studies (8:00 AM - 2:00 PM), and High School (8:00 AM - 3:00 PM). After-school programs and extended care are available for working parents.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="school-life-2" className="border rounded-lg px-4">
                    <AccordionTrigger>Do you provide transportation?</AccordionTrigger>
                    <AccordionContent>
                      We provide safe and reliable school bus services covering major areas in Uyo and surrounding communities. Bus routes and fees are available from the transport office. Priority is given to students living far from the school.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="school-life-3" className="border rounded-lg px-4">
                    <AccordionTrigger>What meals are provided at school?</AccordionTrigger>
                    <AccordionContent>
                      We provide nutritious breakfast and lunch for all students. Our menu is designed by nutritionists to ensure balanced meals that support growing children. Special dietary requirements can be accommodated with advance notice.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="school-life-4" className="border rounded-lg px-4">
                    <AccordionTrigger>What is your discipline policy?</AccordionTrigger>
                    <AccordionContent>
                      We maintain a positive discipline approach focusing on character development and responsible behavior. Our student handbook outlines expectations and consequences. We work closely with parents to ensure consistent standards at home and school.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Programs FAQs */}
              <div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-school-gold" />
                  Programs
                </h3>
                <Accordion type="single" collapsible className="space-y-2">
                  <AccordionItem value="programs-1" className="border rounded-lg px-4">
                    <AccordionTrigger>What age groups do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept children from age 2 in our Montessori program up to 18 years in High School. Montessori (ages 2-6), Basic Studies (ages 6-12 for Primary 1-6), and High School (ages 12-18 for JSS 1 to SS 3).
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="programs-2" className="border rounded-lg px-4">
                    <AccordionTrigger>Can students transfer between programs?</AccordionTrigger>
                    <AccordionContent>
                      Yes, our programs are designed for seamless progression. Montessori students automatically advance to Basic Studies, and Basic Studies graduates proceed to High School, provided they meet academic requirements. Transfer assessments may be required.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="programs-3" className="border rounded-lg px-4">
                    <AccordionTrigger>Do you accept mid-term transfers?</AccordionTrigger>
                    <AccordionContent>
                      We accept mid-term transfers subject to space availability and assessment of the student's academic level. Transfer students may need to take placement tests to ensure appropriate class assignment. Best integration occurs at the beginning of terms.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="programs-4" className="border rounded-lg px-4">
                    <AccordionTrigger>What makes your Montessori program special?</AccordionTrigger>
                    <AccordionContent>
                      Our Montessori program follows authentic Montessori principles with certified teachers and specially designed learning environments. We focus on child-led learning, mixed-age classrooms, and hands-on materials that develop independence, creativity, and love for learning.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

            </div>
          </section>

          {/* Still Have Questions */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-white/90">
              Can't find the answer you're looking for? Our admissions team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="h-4 w-4 mr-2" />
                Call: +2348058403852
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;
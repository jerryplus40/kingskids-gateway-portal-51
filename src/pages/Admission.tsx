import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  FileText, 
  Users, 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Phone, 
  Mail,
  MapPin,
  Download,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const Admission = () => {
  const admissionSteps = [
    {
      step: "1",
      title: "Application Form",
      description: "Complete and submit the online application form with required documents.",
      icon: FileText
    },
    {
      step: "2", 
      title: "Document Submission",
      description: "Submit birth certificate, previous school records, and passport photographs.",
      icon: CheckCircle
    },
    {
      step: "3",
      title: "Assessment",
      description: "Age-appropriate assessment for grade placement and learning readiness.",
      icon: BookOpen
    },
    {
      step: "4",
      title: "Interview",
      description: "Parent and student interview with the admissions committee.",
      icon: Users
    },
    {
      step: "5",
      title: "Admission Decision",
      description: "Receive admission decision and enrollment instructions.",
      icon: GraduationCap
    }
  ];

  const departments = [
    {
      name: "Montessori (Ages 3-6)",
      description: "Child-centered approach focusing on independence and natural learning",
      requirements: ["Birth Certificate", "Medical Records", "Passport Photos"],
      fees: "Contact for current rates"
    },
    {
      name: "Foundation (Primary)",
      description: "Strong academic foundation with character development",
      requirements: ["Previous School Report", "Birth Certificate", "Medical Records"],
      fees: "Contact for current rates"
    },
    {
      name: "Basic Studies (Middle School)",
      description: "Comprehensive middle school curriculum",
      requirements: ["Academic Transcripts", "Recommendation Letter", "Medical Records"],
      fees: "Contact for current rates"
    },
    {
      name: "High School (Secondary)",
      description: "College preparatory program with advanced coursework",
      requirements: ["Academic Transcripts", "Entrance Exam", "Recommendation Letters"],
      fees: "Contact for current rates"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/school-building-hero.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/80" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Admissions</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Join our community of learners and embark on an educational journey of excellence
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Simple Process</Badge>
            <h2 className="text-4xl font-bold mb-6">Admission Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined admission process ensures a smooth transition for new students and families.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <step.icon className="w-8 h-8 mx-auto text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Requirements */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Academic Programs</Badge>
            <h2 className="text-4xl font-bold mb-6">Programs & Requirements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive academic programs designed for different age groups and learning stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{dept.name}</h3>
                  <p className="text-muted-foreground mb-4">{dept.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Required Documents:</h4>
                    <ul className="space-y-1">
                      {dept.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-primary mr-1" />
                      <span className="text-sm font-medium">{dept.fees}</span>
                    </div>
                    <Badge>Apply Now</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Academic Calendar</Badge>
              <h2 className="text-4xl font-bold mb-6">Important Dates</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-semibold">Registration Opens</h4>
                    <p className="text-muted-foreground">January 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-semibold">Assessment Period</h4>
                    <p className="text-muted-foreground">March 1-31, 2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-semibold">Final Registration</h4>
                    <p className="text-muted-foreground">May 30, 2024</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <h4 className="font-semibold">Academic Year Begins</h4>
                    <p className="text-muted-foreground">September 1, 2024</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Download Forms</h3>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-primary mr-3" />
                    <span>Application Form</span>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-primary mr-3" />
                    <span>Medical Form</span>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center">
                    <Download className="w-5 h-5 text-primary mr-3" />
                    <span>Fee Structure</span>
                  </div>
                  <Badge variant="outline">PDF</Badge>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-12 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Need Help with Admission?</h3>
              <p className="text-xl text-muted-foreground">
                Our admissions team is here to guide you through the process
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p className="text-muted-foreground">+234 xxx xxx xxxx</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-muted-foreground">admissions@krismore.edu.ng</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h4 className="font-semibold mb-1">Visit Us</h4>
                <p className="text-muted-foreground">Schedule a campus tour</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg font-medium transition-colors"
              >
                Contact Admissions Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
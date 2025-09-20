import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, GraduationCap, Heart, Star, Mail, Phone } from 'lucide-react';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Mathematics Teacher",
      department: "High School",
      type: "Full-time",
      location: "Main Campus",
      description: "Seeking an experienced mathematics teacher for grades 9-12 with expertise in calculus and statistics.",
      requirements: ["Bachelor's degree in Mathematics or related field", "Teaching certification", "3+ years experience"],
      posted: "2 days ago"
    },
    {
      title: "Montessori Guide",
      department: "Montessori",
      type: "Full-time", 
      location: "Main Campus",
      description: "Passionate Montessori-certified educator to guide children aged 3-6 in their learning journey.",
      requirements: ["Montessori certification", "Early childhood education background", "Patient and nurturing personality"],
      posted: "5 days ago"
    },
    {
      title: "Science Laboratory Assistant",
      department: "Basic Studies",
      type: "Part-time",
      location: "Main Campus", 
      description: "Support science education by maintaining laboratory equipment and assisting with experiments.",
      requirements: ["Science background preferred", "Organizational skills", "Safety consciousness"],
      posted: "1 week ago"
    },
    {
      title: "Librarian",
      department: "All Departments",
      type: "Full-time",
      location: "Main Campus",
      description: "Manage library resources and promote literacy across all educational levels.",
      requirements: ["Library science degree", "Digital literacy", "Experience with educational institutions"],
      posted: "3 days ago"
    }
  ];

  const benefits = [
    { icon: Heart, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage" },
    { icon: GraduationCap, title: "Professional Development", description: "Continuing education and training opportunities" },
    { icon: Users, title: "Collaborative Environment", description: "Work with passionate educators in supportive teams" },
    { icon: Star, title: "Competitive Salary", description: "Attractive compensation packages with performance bonuses" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Shape the future of education with us. Discover rewarding career opportunities at Krismore College.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-6">Why Work at Krismore College?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a community of educators who are passionate about making a difference in students' lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Culture</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong>Innovation:</strong> We embrace new teaching methods and educational technologies.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong>Excellence:</strong> We strive for the highest standards in everything we do.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong>Community:</strong> We foster a supportive and inclusive environment.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong>Growth:</strong> We invest in our team's professional development.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <div className="text-center">
                <GraduationCap className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Professional Growth</h3>
                <p className="text-muted-foreground mb-6">
                  We provide ongoing training, mentorship programs, and opportunities for advancement.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground">Teacher Retention</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Training Hours/Year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Open Positions</Badge>
            <h2 className="text-4xl font-bold mb-6">Current Job Openings</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore exciting opportunities to advance your career in education.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                        <Clock className="w-4 h-4" />
                        Posted {job.posted}
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always looking for exceptional talent.
            </p>
            <Button variant="outline" size="lg">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our HR team is here to help you with any questions about career opportunities.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Email HR</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Send us your questions or application directly.
                  </p>
                  <a 
                    href="mailto:hr@krismore.edu" 
                    className="text-primary hover:underline font-medium"
                  >
                    hr@krismore.edu
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Call HR</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Speak directly with our recruitment team.
                  </p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-primary hover:underline font-medium"
                  >
                    +1 (234) 567-8900
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-2">Application Process</h3>
              <p className="text-muted-foreground">
                Applications are reviewed on a rolling basis. We'll contact qualified candidates within 2 weeks 
                of receiving your application. All positions require background checks and references.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
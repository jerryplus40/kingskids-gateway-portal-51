import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, BookOpen, Award, Building } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/school-students-bg.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/80" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Krismore College</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Excellence in education since our founding. Shaping minds, building futures, and creating leaders for tomorrow.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* History Section */}
      <section id="history" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Heritage</Badge>
            <h2 className="text-4xl font-bold mb-6">Our Rich History</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded with a vision to provide world-class education, Krismore College has been at the forefront of educational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-bold mb-2">Foundation Years</h3>
                  <p className="text-muted-foreground">
                    Established with the mission to provide comprehensive education from early childhood through secondary education.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-2xl font-bold mb-2">Growth & Expansion</h3>
                  <p className="text-muted-foreground">
                    Expanded our programs to include Montessori, Basic Studies, Foundation, and High School divisions.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-2xl font-bold mb-2">Modern Excellence</h3>
                  <p className="text-muted-foreground">
                    Today, we continue to innovate and lead in educational excellence with state-of-the-art facilities and programs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg">
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-4">Awards & Recognition</h3>
                <p className="text-muted-foreground mb-6">
                  Recognized for excellence in education and innovative teaching methodologies.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Graduates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Academic Excellence</Badge>
            <h2 className="text-4xl font-bold mb-6">Our Departments</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture students at every stage of their learning journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Montessori</h3>
                <p className="text-muted-foreground mb-4">
                  Child-centered educational approach for early childhood development (Ages 3-6).
                </p>
                <Badge>Early Learning</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Foundation</h3>
                <p className="text-muted-foreground mb-4">
                  Strong foundational learning with focus on core subjects and character building.
                </p>
                <Badge>Primary Education</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Basic Studies</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive middle school program preparing students for advanced learning.
                </p>
                <Badge>Middle School</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">High School</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced secondary education with college preparatory programs and career guidance.
                </p>
                <Badge>Secondary Education</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section id="board" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Leadership</Badge>
            <h2 className="text-4xl font-bold mb-6">Board of Directors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visionary leaders guiding our institution towards excellence and innovation in education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. John Smith</h3>
                <p className="text-primary font-medium mb-2">Chairman</p>
                <p className="text-muted-foreground text-sm">
                  Educational leadership with over 30 years of experience in academic administration.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Prof. Mary Johnson</h3>
                <p className="text-primary font-medium mb-2">Vice Chairman</p>
                <p className="text-muted-foreground text-sm">
                  Renowned educator and curriculum development specialist with international experience.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mr. David Wilson</h3>
                <p className="text-primary font-medium mb-2">Secretary</p>
                <p className="text-muted-foreground text-sm">
                  Financial management expert ensuring sustainable growth and resource allocation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section id="management" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Administration</Badge>
            <h2 className="text-4xl font-bold mb-6">Management Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated professionals ensuring smooth operations and exceptional educational experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">Dr. Sarah Brown</h3>
                <p className="text-primary text-sm mb-2">Principal</p>
                <p className="text-muted-foreground text-xs">Academic Leadership</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-1">Mr. James Davis</h3>
                <p className="text-primary text-sm mb-2">Vice Principal</p>
                <p className="text-muted-foreground text-xs">Student Affairs</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-1">Ms. Lisa Anderson</h3>
                <p className="text-primary text-sm mb-2">Academic Coordinator</p>
                <p className="text-muted-foreground text-xs">Curriculum Management</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">Mr. Robert Taylor</h3>
                <p className="text-primary text-sm mb-2">Administrative Manager</p>
                <p className="text-muted-foreground text-xs">Operations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Educators</Badge>
            <h2 className="text-4xl font-bold mb-6">Faculty & Staff</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate educators and support staff committed to nurturing every student's potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">Qualified Teachers</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">20+</h3>
              <p className="text-muted-foreground">Support Staff</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15:1</h3>
              <p className="text-muted-foreground">Student-Teacher Ratio</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for passionate educators who share our commitment to excellence. 
              Discover opportunities to make a difference in students' lives.
            </p>
            <a 
              href="/careers" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-2 text-sm font-medium transition-colors"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
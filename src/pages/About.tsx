import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, GraduationCap, BookOpen, Award, Building, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  const shortText = "King's Kids Christian Schools was established on February 13, 2014, with the Corporate Affairs Commission under registration number RC 110796. As an offshoot of Child and Youth Foundation (CYF), a non-denominational, Bible-centered Faith-Based Non-Governmental Organization, our main aim is evangelizing and discipling children and youths into the kingdom of God.";

  const fullText = `King's Kids Christian Schools was established on February 13, 2014, with the Corporate Affairs Commission under registration number RC 110796.

King's Kids Christian Schools is an offshoot of Child and Youth Foundation (CYF), a non-denominational, Bible-centered Faith-Based Non-Governmental Organization with the main aim of evangelizing and discipling children and youths into the kingdom of God to know the Lord Jesus, so that they can grow up to be good citizens.

The objectives of the organization include:
• To evangelize and disciple children and youth
• To establish Good News Bible Clubs in the neighborhood of children and youth
• To organize periodic seminars and trainings for teachers of children and youth
• To organize annual camp conferences for children and youth
• To establish schools and hospitals in their communities of operation

The educational arm of CYF, under the umbrella of King's Kids Christian Schools, has embarked on solving specific problems that have for long bedeviled our education sector. It has the Christian Montessori Education to provide the needed environment for the proper education of the child, a specialized Day High School to solve the problem of juvenile delinquency and related issues, and a Basic Studies Programme to build up or strengthen academic and Christian foundation of the youth for a successful higher education and life. We also run an entrepreneurial programme for the development of skills for youth who may deem it necessary.`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">King's Kids Christian Schools</h1>
            <p className="text-xl md:text-2xl opacity-90">
              No Substitute
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border rounded-lg p-8 shadow-sm">
                <div className="text-left space-y-4">
                  {isExpanded ? (
                    <div className="whitespace-pre-line text-muted-foreground leading-relaxed">
                      {fullText}
                    </div>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">
                      {shortText}
                    </p>
                  )}
                  <div className="flex justify-center pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="gap-2"
                    >
                      {isExpanded ? (
                        <>
                          Read Less
                          <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Read More
                          <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  By promoting a life-long learning, using best practices, in an environment where Christian principles are taught, modeled and practiced.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To raise God-fearing Generals for God, with a holistic and excellent education, who will function effectively and uphold the pillars of influence in the global community.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Core Values</h3>
                <div className="text-left space-y-2">
                  <p className="text-muted-foreground"><span className="font-bold text-primary">D</span> - Discipline</p>
                  <p className="text-muted-foreground"><span className="font-bold text-primary">E</span> - Excellence</p>
                  <p className="text-muted-foreground"><span className="font-bold text-primary">P</span> - Professionalism</p>
                  <p className="text-muted-foreground"><span className="font-bold text-primary">T</span> - Trustworthiness</p>
                  <p className="text-muted-foreground"><span className="font-bold text-primary">H</span> - Hardwork</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Badge variant="outline" className="text-lg px-6 py-2">
              Motto: Education with Character
            </Badge>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-20 bg-background">
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

      <Footer />
    </div>
  );
};

export default About;
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  Globe, 
  BookOpen, 
  Award, 
  Star,
  CheckCircle,
  Lightbulb,
  Handshake
} from 'lucide-react';

const OurSchool = () => {
  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, ethics, and moral character in all our interactions."
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "We strive for the highest quality in teaching, learning, and personal development."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive, inclusive environment where everyone feels valued and respected."
    },
    {
      icon: Globe,
      title: "Global Citizenship",
      description: "We prepare students to be responsible, informed citizens of the world."
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description: "We instill a passion for continuous learning and intellectual curiosity."
    },
    {
      icon: Handshake,
      title: "Respect",
      description: "We treat all members of our community with dignity, kindness, and understanding."
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence Award",
      description: "Recognized for outstanding academic performance in national assessments",
      year: "2023"
    },
    {
      icon: Star,
      title: "Best Private School",
      description: "Regional recognition for comprehensive educational programs",
      year: "2022"
    },
    {
      icon: Shield,
      title: "Safety Excellence",
      description: "Certified for maintaining the highest safety standards",
      year: "2023"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Award for outstanding community service and social responsibility",
      year: "2023"
    }
  ];

  const educationalApproaches = [
    {
      title: "Student-Centered Learning",
      description: "Our curriculum adapts to individual learning styles and paces, ensuring every student reaches their full potential.",
      features: ["Personalized Learning Plans", "Small Class Sizes", "Individual Attention", "Flexible Pacing"]
    },
    {
      title: "Holistic Development",
      description: "We focus on developing the whole child - academically, socially, emotionally, and physically.",
      features: ["Character Education", "Sports & Recreation", "Arts & Creativity", "Leadership Skills"]
    },
    {
      title: "Technology Integration",
      description: "Modern technology enhances learning experiences and prepares students for the digital future.",
      features: ["Smart Classrooms", "Digital Literacy", "Online Resources", "STEM Programs"]
    },
    {
      title: "Global Perspective",
      description: "We prepare students for success in an interconnected world through international curricula and cultural awareness.",
      features: ["International Standards", "Cultural Exchange", "Language Programs", "Global Citizenship"]
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our School</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Discover the heart of Krismore College - our mission, values, and commitment to educational excellence
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Foundation</Badge>
            <h2 className="text-4xl font-bold mb-6">Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional education that nurtures intellectual curiosity, character development, 
                  and global citizenship, preparing students to excel in an ever-changing world while maintaining 
                  strong moral foundations and cultural values.
                </p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier educational institution that transforms lives through innovative teaching, 
                  character formation, and community engagement, creating confident, compassionate leaders 
                  who contribute positively to society and the global community.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Foundation</Badge>
            <h2 className="text-4xl font-bold mb-6">Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our educational philosophy and shape our school community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Our Methodology</Badge>
            <h2 className="text-4xl font-bold mb-6">Educational Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative teaching methods and comprehensive programs designed to develop well-rounded individuals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationalApproaches.map((approach, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{approach.title}</h3>
                <p className="text-muted-foreground mb-6">{approach.description}</p>
                <div className="space-y-2">
                  {approach.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Recognition</Badge>
            <h2 className="text-4xl font-bold mb-6">Our Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition and awards that reflect our commitment to excellence in education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                <Badge variant="outline">{achievement.year}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-12 rounded-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
              <p className="text-xl text-muted-foreground">
                Our impact in education and community development
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Graduates</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">70+</div>
                <div className="text-muted-foreground">Qualified Staff</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Current Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Become part of a learning community dedicated to excellence, character, and global citizenship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/admission" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg font-medium transition-colors"
            >
              Apply for Admission
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 text-lg font-medium transition-colors"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurSchool;
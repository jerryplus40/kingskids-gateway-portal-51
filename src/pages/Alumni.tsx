import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GraduationCap, Users, Award, Calendar, MapPin, Briefcase, Star, Heart } from 'lucide-react';

const Alumni = () => {
  const featuredAlumni = [
    {
      name: "Dr. Sarah Johnson",
      year: "Class of 2010",
      achievement: "Chief Medical Officer at City Hospital",
      image: "/lovable-uploads/gc5a0117e.jpg",
      quote: "Krismore College gave me the foundation to pursue my dreams in medicine.",
      department: "High School"
    },
    {
      name: "Prof. Michael Chen",
      year: "Class of 2008", 
      achievement: "Professor of Computer Science at Tech University",
      image: "/lovable-uploads/gc5a0121er.jpg",
      quote: "The critical thinking skills I learned here shaped my academic career.",
      department: "High School"
    },
    {
      name: "Dr. Emily Rodriguez",
      year: "Class of 2012",
      achievement: "Pediatrician & Children's Rights Advocate", 
      image: "/lovable-uploads/ansel-joseph-akpan.jpg",
      quote: "Krismore taught me to combine excellence with compassion.",
      department: "High School"
    }
  ];

  const achievements = [
    { icon: GraduationCap, stat: "2,500+", label: "Graduates", description: "Successful alumni worldwide" },
    { icon: Award, stat: "150+", label: "Awards", description: "Recognition in various fields" },
    { icon: Briefcase, stat: "98%", label: "Employment", description: "Employment rate within 6 months" },
    { icon: Users, stat: "50+", label: "Countries", description: "Alumni global presence" }
  ];

  const events = [
    {
      title: "Annual Alumni Gala",
      date: "December 15, 2024",
      location: "Grand Ballroom, City Center",
      description: "Join us for an evening of networking, recognition, and celebration of our alumni achievements.",
      type: "Gala"
    },
    {
      title: "Career Mentorship Program Launch",
      date: "January 20, 2025",
      location: "Main Campus Auditorium",
      description: "Launch of our new mentorship program connecting alumni with current students.",
      type: "Program"
    },
    {
      title: "Alumni Business Network Meet",
      date: "February 10, 2025", 
      location: "Business District Conference Center",
      description: "Networking event for alumni entrepreneurs and business professionals.",
      type: "Networking"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Alumni</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Celebrating the achievements of our graduates who continue to make a difference in the world.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Alumni Impact</Badge>
            <h2 className="text-4xl font-bold mb-6">Our Alumni Network</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A global community of leaders, innovators, and change-makers who started their journey at Krismore College.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <achievement.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.stat}</div>
                  <h3 className="text-lg font-bold mb-2">{achievement.label}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Success Stories</Badge>
            <h2 className="text-4xl font-bold mb-6">Featured Alumni</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet some of our outstanding graduates who are making significant contributions in their fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={alumni.image} alt={alumni.name} />
                      <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-1">{alumni.name}</h3>
                    <p className="text-primary font-medium mb-1">{alumni.year}</p>
                    <Badge variant="outline" className="mb-3">{alumni.department}</Badge>
                    <p className="text-muted-foreground font-medium">{alumni.achievement}</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-muted-foreground italic text-center">"{alumni.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              Share Your Success Story
            </Button>
          </div>
        </div>
      </section>

      {/* Alumni Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Alumni Services</Badge>
            <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer various services and programs to keep our alumni network strong and connected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Networking Events</h3>
                <p className="text-muted-foreground mb-4">
                  Regular meetups, professional gatherings, and industry-specific networking opportunities.
                </p>
                <Badge>Monthly Events</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Career Services</h3>
                <p className="text-muted-foreground mb-4">
                  Lifetime career support including job postings, career counseling, and professional development.
                </p>
                <Badge>Lifetime Access</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Mentorship Program</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with current students as a mentor or get guidance from senior alumni.
                </p>
                <Badge>Give Back</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Continuing Education</h3>
                <p className="text-muted-foreground mb-4">
                  Access to workshops, seminars, and online courses to enhance your skills.
                </p>
                <Badge>Skill Building</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Recognition Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Annual awards celebrating outstanding achievements and contributions of our alumni.
                </p>
                <Badge>Excellence Awards</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-3">Global Chapters</h3>
                <p className="text-muted-foreground mb-4">
                  Local alumni chapters in major cities worldwide for regional networking and support.
                </p>
                <Badge>Worldwide Network</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Stay Connected</Badge>
            <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us at upcoming alumni events and stay connected with your fellow graduates.
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button>Register Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Alumni Network</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay connected, give back to current students, and continue your journey with the Krismore College community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Update Your Information
              </Button>
              <Button variant="outline" size="lg">
                Alumni Directory
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
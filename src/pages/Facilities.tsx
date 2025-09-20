import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Computer, 
  Microscope, 
  Dumbbell, 
  Music, 
  Palette, 
  Bus, 
  Utensils,
  Library,
  MonitorSpeaker,
  Stethoscope,
  FlaskConical
} from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Library,
      name: "Modern Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces for all age groups.",
      features: ["10,000+ Books", "Digital Resources", "Reading Rooms", "Study Spaces"]
    },
    {
      icon: Computer,
      name: "Computer Labs",
      description: "State-of-the-art computer laboratories with latest hardware and software.",
      features: ["50+ Computers", "High-Speed Internet", "Programming Software", "Multimedia Tools"]
    },
    {
      icon: FlaskConical,
      name: "Science Laboratories",
      description: "Fully equipped labs for Physics, Chemistry, and Biology experiments.",
      features: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Safety Equipment"]
    },
    {
      icon: Dumbbell,
      name: "Sports Complex",
      description: "Comprehensive sports facilities for physical development and team sports.",
      features: ["Basketball Court", "Football Field", "Swimming Pool", "Indoor Games"]
    },
    {
      icon: Music,
      name: "Music & Arts Studio",
      description: "Creative spaces for musical and artistic expression and learning.",
      features: ["Music Room", "Art Studio", "Dance Hall", "Performance Stage"]
    },
    {
      icon: MonitorSpeaker,
      name: "Auditorium",
      description: "Modern auditorium for assemblies, performances, and special events.",
      features: ["500 Seating", "Sound System", "Lighting", "Stage Equipment"]
    },
    {
      icon: Stethoscope,
      name: "Medical Center",
      description: "On-campus medical facility with qualified nursing staff for student health.",
      features: ["Qualified Nurse", "First Aid", "Health Records", "Emergency Care"]
    },
    {
      icon: Utensils,
      name: "Cafeteria",
      description: "Nutritious meals and snacks in a clean, comfortable dining environment.",
      features: ["Healthy Meals", "Snack Bar", "Special Diets", "Clean Environment"]
    },
    {
      icon: Bus,
      name: "Transportation",
      description: "Safe and reliable school bus service covering major residential areas.",
      features: ["GPS Tracking", "Qualified Drivers", "Multiple Routes", "Safety Standards"]
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl md:text-2xl opacity-90">
              World-class infrastructure and resources designed to enhance learning and development
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Modern Infrastructure</Badge>
            <h2 className="text-4xl font-bold mb-6">Comprehensive Learning Environment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our campus features state-of-the-art facilities designed to support academic excellence, 
              creative expression, and physical development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <facility.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{facility.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{facility.description}</p>
                  <div className="space-y-2">
                    {facility.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Experience Our Campus</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a campus tour to see our world-class facilities and meet our dedicated staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg font-medium transition-colors"
              >
                Schedule Campus Tour
              </a>
              <a 
                href="/admission" 
                className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 text-lg font-medium transition-colors"
              >
                Learn About Admission
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
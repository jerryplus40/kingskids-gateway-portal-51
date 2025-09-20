import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Calendar, 
  BookOpen, 
  Star,
  CheckCircle,
  PlayCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Sparkles,
  Home,
  ArrowRight,
  Quote,
  Building2,
  GraduationCap,
  Palette
} from "lucide-react";

const MontessoriDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-school-blue to-school-light-blue rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-school-blue">King's Kids Montessori</h1>
                <p className="text-sm text-muted-foreground">Nurturing Young Minds</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="hidden md:flex">Ages 2-6</Badge>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/"><Home className="h-4 w-4 mr-2" />Home</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: `url('/lovable-uploads/gc5a0117e.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-school-blue/80 via-school-dark-blue/70 to-school-light-blue/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-scale-in">
              <Sparkles className="h-4 w-4 mr-2" />
              Montessori Education Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Where Learning <br />
              <span className="text-school-gold animate-gradient-shift bg-gradient-to-r from-school-gold to-yellow-400 bg-clip-text text-transparent">
                Begins Naturally
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Fostering independence, creativity, and love for learning in children aged 2-6 through the authentic Montessori method
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-school-gold hover:bg-school-gold/90 text-school-dark-blue font-semibold">
                <PlayCircle className="h-5 w-5 mr-2" />
                Schedule a Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-blue">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-school-gold/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-school-light-blue/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge className="mb-4">About Our School</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                The Montessori Difference
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our child-centered approach creates an environment where children develop independence, 
                confidence, and a lifelong love for learning through hands-on exploration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-up">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/gc5a0121er.jpg" 
                    alt="Montessori classroom"
                    className="rounded-2xl shadow-elegant w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-blue/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-school-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Child-Centered Learning</h3>
                    <p className="text-muted-foreground">
                      Each child learns at their own pace in a prepared environment designed to meet their developmental needs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-school-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mixed-Age Classes</h3>
                    <p className="text-muted-foreground">
                      Children learn from and teach each other in our thoughtfully designed mixed-age community.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-school-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hands-On Materials</h3>
                    <p className="text-muted-foreground">
                      Authentic Montessori materials that engage the senses and build concrete understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed animate-ken-burns"
          style={{ 
            backgroundImage: `url('/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png')`,
          }}
        >
          <div className="absolute inset-0 bg-school-blue/80"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl animate-fade-up">
            <Quote className="h-12 w-12 mx-auto mb-6 text-school-gold" />
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "The child is both a hope and a promise for mankind."
            </blockquote>
            <cite className="text-lg">— Dr. Maria Montessori</cite>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Our Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Age-Appropriate Learning
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carefully designed programs that support each child's natural development and curiosity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-blue to-school-light-blue rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Toddler Community</CardTitle>
                <CardDescription>Ages 18 months - 3 years</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A nurturing environment focused on practical life skills, language development, and independence.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Practical life activities
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Language enrichment
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Sensory exploration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-green to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Primary Program</CardTitle>
                <CardDescription>Ages 3 - 6 years</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The core Montessori experience with five key curriculum areas for comprehensive development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Mathematics materials
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Language arts
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Cultural studies
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-orange to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Extended Day</CardTitle>
                <CardDescription>Optional afternoon program</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Additional learning opportunities with art, music, outdoor exploration, and enrichment activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Art & creativity
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Music & movement
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Outdoor learning
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Our Environment</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              A Place to Grow & Explore
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take a glimpse into our beautifully prepared Montessori environment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="col-span-2 row-span-2 animate-fade-up">
              <img 
                src="/lovable-uploads/gc5a0117e.jpg" 
                alt="Montessori classroom" 
                className="w-full h-full object-cover rounded-2xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <img 
                src="/lovable-uploads/gc5a0121er.jpg" 
                alt="Learning materials" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png" 
                alt="Children learning" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/59b5ff11-5cd8-4812-902f-16387f07dfa3.png" 
                alt="Outdoor activities" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="/lovable-uploads/6f3faff4-396a-4ae0-83ca-482ebe95b218.png" 
                alt="Art activities" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-school-blue to-school-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">145</div>
              <div className="text-lg">Happy Students</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">16</div>
              <div className="text-lg">Certified Teachers</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg">Parent Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <Badge className="mb-4">Get In Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Start Your Child's Journey?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a visit to experience our Montessori environment firsthand.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center animate-fade-up">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-school-blue" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+234 803 123 4567</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-school-green" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">info@kingskidsmontessori.edu.ng</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-school-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">123 Education Lane, Uyo</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-up">
              <Button size="lg" className="bg-school-blue hover:bg-school-dark-blue">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-school-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-school-gold rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-school-dark-blue" />
              </div>
              <h3 className="text-xl font-bold">King's Kids Montessori</h3>
            </div>
            <p className="text-white/80 mb-6">
              Nurturing independent, confident, and lifelong learners since 2008.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <span>© 2024 King's Kids Montessori</span>
              <span>|</span>
              <span>Privacy Policy</span>
              <span>|</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MontessoriDashboard;
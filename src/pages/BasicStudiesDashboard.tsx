import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Star,
  CheckCircle,
  PlayCircle,
  Phone,
  Mail,
  MapPin,
  Home,
  ArrowRight,
  Quote,
  Palette,
  Music,
  Calculator,
  Globe,
  FlaskConical,
  PenTool,
  Smile,
  Heart,
  Building2,
  TreePine,
  Gamepad2
} from "lucide-react";

const BasicStudiesDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-school-green to-emerald-500 rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-school-green">King's Kids Primary</h1>
                <p className="text-sm text-muted-foreground">Building Strong Foundations</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="hidden md:flex">Primary 1-6</Badge>
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
          <div className="absolute inset-0 bg-gradient-to-br from-school-green/80 via-emerald-600/75 to-school-blue/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-scale-in">
              <Star className="h-4 w-4 mr-2" />
              Primary Education Excellence
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Building Strong <br />
              <span className="text-school-gold animate-gradient-shift bg-gradient-to-r from-school-gold to-yellow-400 bg-clip-text text-transparent">
                Foundations
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Nurturing young minds through engaging, interactive learning experiences that prepare students for academic success and personal growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-school-gold hover:bg-school-gold/90 text-school-dark-blue font-semibold">
                <PlayCircle className="h-5 w-5 mr-2" />
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-green">
                Enroll Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-school-gold/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-emerald-400/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge className="mb-4">About Our School</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Where Learning Becomes Adventure
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our primary school creates a nurturing environment where children develop fundamental skills, 
                creative thinking, and a love for learning that will serve them throughout their educational journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-up">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/gc5a0121er.jpg" 
                    alt="Primary school children learning"
                    className="rounded-2xl shadow-elegant w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-green/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Smile className="h-6 w-6 text-school-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Engaging Learning</h3>
                    <p className="text-muted-foreground">
                      Interactive lessons and hands-on activities that make learning fun and memorable for young minds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-school-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Caring Environment</h3>
                    <p className="text-muted-foreground">
                      Supportive teachers and staff who understand the unique needs of primary school children.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-school-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
                    <p className="text-muted-foreground">
                      Child-friendly classrooms, libraries, and play areas designed specifically for primary education.
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
          <div className="absolute inset-0 bg-school-green/80"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl animate-fade-up">
            <Quote className="h-12 w-12 mx-auto mb-6 text-school-gold" />
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "Every child is gifted, they just unwrap their gifts at different times."
            </blockquote>
            <cite className="text-lg">— Kathy Calvin</cite>
          </div>
        </div>
      </section>

      {/* Curriculum Subjects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Our Curriculum</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Comprehensive Learning Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A well-rounded curriculum that develops academic skills, creativity, and character in young learners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-blue to-school-light-blue rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PenTool className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">English Language</CardTitle>
                <CardDescription>Reading, Writing, Speaking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Building strong communication skills through phonics, reading comprehension, and creative writing.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Phonics instruction
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Reading fluency
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Creative writing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-orange to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Mathematics</CardTitle>
                <CardDescription>Numbers, Problem Solving</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developing number sense, problem-solving skills, and mathematical reasoning through hands-on activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Number operations
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Problem solving
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Mathematical games
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-green to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FlaskConical className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Basic Science</CardTitle>
                <CardDescription>Nature, Experiments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Exploring the natural world through simple experiments and observations to spark scientific curiosity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Nature studies
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Simple experiments
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Environmental awareness
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Social Studies</CardTitle>
                <CardDescription>Community, Culture, History</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Understanding communities, cultures, and basic history to develop civic awareness and cultural appreciation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Community helpers
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Cultural studies
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Basic geography
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Creative Arts</CardTitle>
                <CardDescription>Art, Music, Drama</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fostering creativity and self-expression through various artistic mediums and performances.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Drawing & painting
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Music & singing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Drama activities
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Physical Education</CardTitle>
                <CardDescription>Sports, Games, Health</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Promoting physical fitness, coordination, and teamwork through age-appropriate games and activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Fun games
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Basic sports
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Health education
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Environment Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Our Learning Spaces</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Child-Friendly Environment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Colorful, engaging spaces designed to inspire learning and creativity in young minds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="col-span-2 row-span-2 animate-fade-up">
              <img 
                src="/lovable-uploads/gc5a0117e.jpg" 
                alt="Primary classroom" 
                className="w-full h-full object-cover rounded-2xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <img 
                src="/lovable-uploads/gc5a0121er.jpg" 
                alt="Reading corner" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png" 
                alt="Art activities" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/59b5ff11-5cd8-4812-902f-16387f07dfa3.png" 
                alt="Playground" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="/lovable-uploads/6f3faff4-396a-4ae0-83ca-482ebe95b218.png" 
                alt="Science corner" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* School Statistics */}
      <section className="py-20 bg-gradient-to-r from-school-green to-emerald-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold mb-2">350+</div>
              <div className="text-lg">Happy Students</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-lg">Qualified Teachers</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-lg">Modern Classrooms</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">100%</div>
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
              <Badge className="mb-4">Join Our Family</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Give Your Child the Best Start
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Enroll your child in our nurturing primary education program where learning is fun and meaningful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center animate-fade-up">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-school-green" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+234 803 123 4567</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-school-blue" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">info@kingskidsprimary.edu.ng</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-school-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">789 Learning Street, Uyo</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-up">
              <Button size="lg" className="bg-school-green hover:bg-emerald-600">
                <BookOpen className="h-5 w-5 mr-2" />
                Enroll Now
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
                <BookOpen className="h-5 w-5 text-school-dark-blue" />
              </div>
              <h3 className="text-xl font-bold">King's Kids Primary</h3>
            </div>
            <p className="text-white/80 mb-6">
              Building strong foundations for lifelong learning since 2008.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <span>© 2024 King's Kids Primary</span>
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

export default BasicStudiesDashboard;
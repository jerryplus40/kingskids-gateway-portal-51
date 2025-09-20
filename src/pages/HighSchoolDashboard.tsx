import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  BookOpen, 
  Star,
  CheckCircle,
  PlayCircle,
  Phone,
  Mail,
  MapPin,
  Trophy,
  Award,
  Target,
  Home,
  ArrowRight,
  Quote,
  FlaskConical,
  Computer,
  Globe,
  Microscope,
  Calculator,
  PenTool,
  Music,
  Dumbbell
} from "lucide-react";

const HighSchoolDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-school-blue to-school-light-blue rounded-full flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-school-blue">King's Kids College</h1>
                <p className="text-sm text-muted-foreground">Excellence in Education</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="hidden md:flex">JSS 1 - SS 3</Badge>
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
            backgroundImage: `url('/src/assets/school-students-bg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-school-blue/85 via-school-dark-blue/75 to-school-light-blue/65"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-scale-in">
              <Award className="h-4 w-4 mr-2" />
              Academic Excellence Since 2008
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Shaping Future <br />
              <span className="text-school-gold animate-gradient-shift bg-gradient-to-r from-school-gold to-yellow-400 bg-clip-text text-transparent">
                Leaders
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive secondary education preparing students for university and beyond with academic rigor and character development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-school-gold hover:bg-school-gold/90 text-school-dark-blue font-semibold">
                <PlayCircle className="h-5 w-5 mr-2" />
                Virtual Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-school-blue">
                Admissions
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
              <Badge className="mb-4">About Our College</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Excellence in Secondary Education
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide comprehensive secondary education that prepares students for success in higher education 
                and future careers through rigorous academics and character development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-up">
                <div className="relative">
                  <img 
                    src="/src/assets/school-hero-bg.jpg" 
                    alt="High school students"
                    className="rounded-2xl shadow-elegant w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-blue/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Trophy className="h-6 w-6 text-school-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Academic Excellence</h3>
                    <p className="text-muted-foreground">
                      Consistently high WAEC and JAMB results with 95% university admission rate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-school-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
                    <p className="text-muted-foreground">
                      Qualified teachers with advanced degrees and proven track records in secondary education.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-school-orange" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
                    <p className="text-muted-foreground">
                      Comprehensive programs that develop academic, social, and leadership skills.
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
            backgroundImage: `url('/src/assets/school-students-bg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-school-blue/80"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl animate-fade-up">
            <Quote className="h-12 w-12 mx-auto mb-6 text-school-gold" />
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "Education is the most powerful weapon which you can use to change the world."
            </blockquote>
            <cite className="text-lg">— Nelson Mandela</cite>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Academic Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our curriculum covers all essential subjects while offering specialized tracks for different career paths.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-blue to-school-light-blue rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FlaskConical className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Sciences</CardTitle>
                <CardDescription>Biology, Chemistry, Physics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  State-of-the-art laboratories and equipment for hands-on scientific exploration and research.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Modern laboratory facilities
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Research projects
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Science competitions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-green to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Mathematics</CardTitle>
                <CardDescription>Pure & Applied Mathematics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive mathematics program from basic algebra to advanced calculus and statistics.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Advanced problem solving
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Math competitions
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Real-world applications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-school-orange to-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PenTool className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Arts & Languages</CardTitle>
                <CardDescription>Literature, Languages, Arts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rich programs in literature, creative writing, foreign languages, and visual arts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Creative writing
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Foreign languages
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Art exhibitions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Computer className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Technology</CardTitle>
                <CardDescription>Computer Science, ICT</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Modern computer labs and programming courses preparing students for the digital future.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Programming languages
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Web development
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Digital literacy
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Social Studies</CardTitle>
                <CardDescription>History, Geography, Civics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive understanding of society, history, and civic responsibilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Historical analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Current affairs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Civic education
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Physical Education</CardTitle>
                <CardDescription>Sports, Health, Wellness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive physical education program promoting health, fitness, and teamwork.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Team sports
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-school-green mr-2" />
                    Fitness training
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

      {/* Facilities Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Our Facilities</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              World-Class Learning Environment
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art facilities designed to enhance learning and development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="col-span-2 row-span-2 animate-fade-up">
              <img 
                src="/src/assets/school-hero-bg.jpg" 
                alt="School building" 
                className="w-full h-full object-cover rounded-2xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <img 
                src="/src/assets/school-students-bg.jpg" 
                alt="Science laboratory" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png" 
                alt="Computer lab" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/59b5ff11-5cd8-4812-902f-16387f07dfa3.png" 
                alt="Library" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="/lovable-uploads/6f3faff4-396a-4ae0-83ca-482ebe95b218.png" 
                alt="Sports facilities" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 bg-gradient-to-r from-school-blue to-school-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">WAEC Pass Rate</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-lg">Students Enrolled</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">45</div>
              <div className="text-lg">Qualified Teachers</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="text-lg">University Admission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <Badge className="mb-4">Admissions</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Join Our Academic Community
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience excellence in secondary education. Apply now for the upcoming academic session.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center animate-fade-up">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-school-blue" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Admissions</h3>
                  <p className="text-muted-foreground">+234 803 123 4567</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-green/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-school-green" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">admissions@kingskidscollege.edu.ng</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-school-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-school-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Campus</h3>
                  <p className="text-muted-foreground">456 Excellence Drive, Uyo</p>
                </CardContent>
              </Card>
            </div>

            <div className="animate-fade-up">
              <Button size="lg" className="bg-school-blue hover:bg-school-dark-blue">
                <GraduationCap className="h-5 w-5 mr-2" />
                Apply Now
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
                <GraduationCap className="h-5 w-5 text-school-dark-blue" />
              </div>
              <h3 className="text-xl font-bold">King's Kids College</h3>
            </div>
            <p className="text-white/80 mb-6">
              Shaping future leaders through excellence in secondary education since 2008.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <span>© 2024 King's Kids College</span>
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

export default HighSchoolDashboard;
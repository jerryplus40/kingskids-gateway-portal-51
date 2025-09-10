import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Heart, 
  BookOpen, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  Calendar,
  Award
} from "lucide-react";
import heroBackgroundImage from "@/assets/school-students-bg.jpg";
import schoolLogo from "@/assets/school-logo.png";
import Navigation from "@/components/Navigation";

const Index = () => {
  console.log("Index.tsx: Index component rendering");
  
  return (
    <div className="min-h-screen bg-background">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call: +234 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email: info@kingskidsschools.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="#results">Check Result</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/login">Student Login</Link>
              </Button>
              <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="#apply">Online Applications →</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-card/95 backdrop-blur-md shadow-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src="/lovable-uploads/dfbc2b6e-0cab-4685-a3de-68f248f3e165.png" 
                  alt="King's Kids Christian Schools Logo" 
                  className="w-full h-full object-contain bg-white p-1 rounded-2xl"
                />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-foreground tracking-tight">KING'S KIDS</h1>
                <p className="text-sm text-muted-foreground font-medium tracking-widest">CHRISTIAN SCHOOLS</p>
              </div>
            </div>
            <nav className="hidden lg:flex items-center">
              <Navigation />
            </nav>
            <Button className="lg:hidden" variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          {/* Base background image with parallax effect */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-parallax-slow"
            style={{ backgroundImage: `url(/lovable-uploads/b221a2af-caae-41aa-a241-115d00a63444.png)` }}
          />
          
          {/* Dynamic gradient overlay with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-school-blue/75 to-accent/65 animate-gradient-shift bg-[length:300%_300%]" />
          
          {/* Secondary animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent animate-parallax-medium" />
          
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-accent/30 rounded-full animate-float" />
          <div className="absolute top-32 right-20 w-6 h-6 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-school-gold/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-40 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse-glow" />
          <div className="absolute bottom-20 right-1/3 w-8 h-8 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        
        {/* Content */}
        <div className="relative z-20 container mx-auto text-center">
          <Badge className="mb-8 bg-white/20 text-white border-white/30 backdrop-blur-md animate-fade-in shadow-lg">
            <Star className="w-4 h-4 mr-2" />
            Nurturing Excellence Since 2012
          </Badge>
          <h2 className="text-6xl lg:text-7xl font-display font-bold mb-8 text-white animate-fade-up leading-tight" style={{ animationDelay: '0.2s' }}>
            Empowering Young Minds for
            <span className="text-accent block bg-gradient-to-r from-accent to-school-gold bg-clip-text text-transparent animate-pulse-glow font-display">Tomorrow's Leadership</span>
          </h2>
          <p className="text-xl lg:text-2xl text-white/95 mb-10 max-w-4xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Join our family of exceptional schools offering world-class education from Montessori to High School, 
            supported by our dedicated Child and Youth Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 px-8 py-4 text-lg font-semibold">
              <Link to="/montessori">
                <GraduationCap className="w-5 h-5 mr-2" />
                Apply Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/40 text-white hover:bg-white/15 backdrop-blur-md shadow-card hover:shadow-elegant transition-all duration-500 hover:scale-110 px-8 py-4 text-lg font-semibold">
              <Link to="#schools">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Schools
              </Link>
            </Button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">28+</div>
              <div className="text-white/80 font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-school-gold mb-2">2000+</div>
              <div className="text-white/80 font-medium">Students Graduated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-school-green mb-2">50+</div>
              <div className="text-white/80 font-medium">Expert Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-school-orange mb-2">4</div>
              <div className="text-white/80 font-medium">School Levels</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                About King's Kids Schools
              </Badge>
              <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
                Excellence in Education
                <span className="text-primary block">Since 1995</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                For nearly three decades, King's Kids Schools has been at the forefront of educational excellence, 
                nurturing young minds and shaping future leaders. Our comprehensive approach combines academic rigor 
                with character development, ensuring every student reaches their full potential.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-card rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-muted-foreground">Alumni Success Stories</div>
                </div>
                <div className="text-center p-6 bg-card rounded-2xl shadow-card">
                  <div className="text-3xl font-bold text-school-green mb-2">98%</div>
                  <div className="text-muted-foreground">Parent Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8">
                <div className="w-full h-full bg-card rounded-2xl shadow-elegant flex items-center justify-center">
                  <div className="text-center">
                    <Award className="w-20 h-20 text-primary mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-foreground mb-2">Excellence Award</h4>
                    <p className="text-muted-foreground">Recognized for Outstanding Educational Achievement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              Excellence in Education
              <span className="text-primary block">Since 1995</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card backdrop-blur-sm bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow transition-all duration-500">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary text-2xl font-bold mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional Christian education that nurtures academic excellence, character development, and spiritual growth in every student, preparing them to be servant leaders in their communities and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card backdrop-blur-sm bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-school-blue/20 to-school-blue/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow transition-all duration-500">
                  <Star className="h-8 w-8 text-school-blue" />
                </div>
                <CardTitle className="text-school-blue text-2xl font-bold mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading Christian educational institution, recognized globally for producing well-rounded graduates who excel academically, demonstrate strong moral character, and positively impact society.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card backdrop-blur-sm bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow transition-all duration-500">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold mb-4">Core Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-muted-foreground leading-relaxed space-y-2">
                  <li>• <strong>Excellence</strong> in all endeavors</li>
                  <li>• <strong>Integrity</strong> and moral character</li>
                  <li>• <strong>Compassion</strong> and service to others</li>
                  <li>• <strong>Innovation</strong> in learning and teaching</li>
                  <li>• <strong>Faith</strong> as our foundation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="schools" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20">
              Educational Programs
            </Badge>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">Our Schools</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect educational journey for your child with our comprehensive range of programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card backdrop-blur-sm bg-gradient-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-school-blue/20 to-school-blue/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow transition-all duration-500">
                  <Heart className="h-10 w-10 text-school-blue" />
                </div>
                <CardTitle className="text-school-blue text-xl font-bold">King's Kids Montessori</CardTitle>
                <CardDescription className="text-lg">Ages 2-6 years • Foundation Learning</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Nurturing creativity and independence through the proven Montessori method with hands-on learning experiences.
                </p>
                <Button className="w-full bg-school-blue hover:bg-school-blue/90 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/montessori">
                    <Calendar className="w-4 h-4 mr-2" />
                    View Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card backdrop-blur-sm bg-gradient-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-school-orange/20 to-school-orange/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow transition-all duration-500">
                  <GraduationCap className="h-10 w-10 text-school-orange" />
                </div>
                <CardTitle className="text-school-orange text-xl font-bold">King's Kids High School</CardTitle>
                <CardDescription className="text-lg">JSS 1 - SS 3 • Secondary Education</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Comprehensive secondary education preparing students for higher education and future success.
                </p>
                <Button className="w-full bg-school-orange hover:bg-school-orange/90 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/highschool">
                    <Award className="w-4 h-4 mr-2" />
                    View Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card backdrop-blur-sm bg-gradient-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-school-green/20 to-school-green/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse-glow transition-all duration-500">
                  <BookOpen className="h-10 w-10 text-school-green" />
                </div>
                <CardTitle className="text-school-green text-xl font-bold">King's Kids Basic Studies</CardTitle>
                <CardDescription className="text-lg">Primary 1-6 • Foundation Education</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Strong academic foundation with emphasis on literacy, numeracy and character development.
                </p>
                <Button className="w-full bg-school-green hover:bg-school-green/90 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link to="/basicstudies">
                    <BookOpen className="w-4 h-4 mr-2" />
                    View Dashboard
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Foundation Card */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-accent/15 via-primary/10 to-school-gold/5 border-accent/30 shadow-elegant backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent animate-shimmer" />
            <CardHeader className="relative z-10">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center animate-pulse-glow">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <div className="text-center md:text-left">
                  <CardTitle className="text-accent text-3xl font-bold mb-2">Child and Youth Foundation</CardTitle>
                  <CardDescription className="text-xl text-muted-foreground">Supporting underprivileged children's education across communities</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Our foundation provides educational opportunities for less privileged children through comprehensive scholarships, 
                    community outreach programs, and sustainable development initiatives.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-accent">500+</div>
                      <div className="text-sm text-muted-foreground">Children Supported</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Communities Reached</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <Button size="lg" asChild className="bg-accent hover:bg-accent/90 shadow-glow hover:shadow-elegant transition-all duration-500 hover:scale-105 py-4 text-lg font-semibold">
                    <Link to="/foundation">
                      <Heart className="w-5 h-5 mr-2" />
                      View Foundation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300 py-4 text-lg">
                    Learn More About Our Impact
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-school-blue/10 text-school-blue border-school-blue/20">
              Student Services
            </Badge>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              Comprehensive Support
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Beyond academics, we provide holistic support for every aspect of student development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Counseling Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Professional guidance and emotional support for students' personal and academic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-school-green/20 to-school-green/5 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Heart className="h-8 w-8 text-school-green" />
                </div>
                <CardTitle className="text-xl">Health & Wellness</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Comprehensive healthcare services and wellness programs for physical and mental health.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-school-orange/20 to-school-orange/5 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Star className="h-8 w-8 text-school-orange" />
                </div>
                <CardTitle className="text-xl">Extra-Curricular</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Sports, arts, music, and leadership programs to develop well-rounded individuals.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <BookOpen className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Library Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Modern library facilities with extensive digital and physical resources for research.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-school-blue/20 to-school-blue/5 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Award className="h-8 w-8 text-school-blue" />
                </div>
                <CardTitle className="text-xl">Career Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  University preparation and career counseling to help students plan their future paths.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 shadow-card bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-school-gold/20 to-school-gold/5 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse-glow">
                  <Calendar className="h-8 w-8 text-school-gold" />
                </div>
                <CardTitle className="text-xl">Events & Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Regular events, competitions, and cultural activities to enrich the school experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-foreground/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-foreground/10 text-foreground border-foreground/20">
              Get In Touch
            </Badge>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-foreground">
              Contact Us
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join the King's Kids family? We're here to help you get started
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <Card className="p-6 shadow-card border-0 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+234 123 456 789</p>
                    <p className="text-muted-foreground">+234 987 654 321</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card border-0 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">info@kingskidsschools.com</p>
                    <p className="text-muted-foreground">admissions@kingskidsschools.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-card border-0 bg-card/50 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-school-green/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-school-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">123 Education Boulevard</p>
                    <p className="text-muted-foreground">Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 shadow-elegant border-0 bg-card/80 backdrop-blur-md">
              <CardHeader className="px-0 pb-6">
                <CardTitle className="text-2xl font-display">Send us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-glow hover:shadow-elegant transition-all duration-300">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold">KING'S KIDS SCHOOLS</h3>
                  <p className="text-background/70 text-sm tracking-widest">EXCELLENCE SINCE 1995</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed">
                Empowering young minds for tomorrow's leadership through comprehensive education 
                programs from Montessori to High School, supported by our Youth Foundation.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <Phone className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <Mail className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <MapPin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="#about" className="text-background/80 hover:text-background transition-colors">About Us</Link></li>
                <li><Link to="#schools" className="text-background/80 hover:text-background transition-colors">Our Schools</Link></li>
                <li><Link to="#admission" className="text-background/80 hover:text-background transition-colors">Admissions</Link></li>
                <li><Link to="#services" className="text-background/80 hover:text-background transition-colors">Services</Link></li>
                <li><Link to="/foundation" className="text-background/80 hover:text-background transition-colors">Foundation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-background/80 text-sm">+234 123 456 789</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-background/80 text-sm">info@kingskidsschools.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span className="text-background/80 text-sm">123 Education Boulevard<br/>Victoria Island, Lagos</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center">
            <p className="text-background/60 text-sm">
              © 2024 King's Kids Schools. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

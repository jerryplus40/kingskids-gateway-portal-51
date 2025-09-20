import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  DollarSign, 
  HandHeart,
  Star,
  CheckCircle,
  PlayCircle,
  Phone,
  Mail,
  MapPin,
  Home,
  ArrowRight,
  Quote,
  GraduationCap,
  Building2,
  TreePine,
  Globe,
  Award,
  BookOpen,
  Smile,
  Target,
  Gift
} from "lucide-react";

const FoundationDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-red-600">King's Kids Foundation</h1>
                <p className="text-sm text-muted-foreground">Transforming Lives</p>
              </div>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="hidden md:flex">Non-Profit</Badge>
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
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/85 via-pink-600/75 to-purple-600/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-scale-in">
              <HandHeart className="h-4 w-4 mr-2" />
              Empowering Communities Since 2008
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Transforming <br />
              <span className="text-school-gold animate-gradient-shift bg-gradient-to-r from-school-gold to-yellow-400 bg-clip-text text-transparent">
                Young Lives
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dedicated to providing educational opportunities, healthcare, and support to underprivileged children and youth in our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-school-gold hover:bg-school-gold/90 text-school-dark-blue font-semibold">
                <DollarSign className="h-5 w-5 mr-2" />
                Donate Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-school-gold/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-pink-400/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                Creating Opportunities for Every Child
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We believe every child deserves access to quality education, healthcare, and opportunities to reach their full potential, 
                regardless of their background or circumstances.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-up">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/gc5a0121er.jpg" 
                    alt="Foundation helping children"
                    className="rounded-2xl shadow-elegant w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Educational Support</h3>
                    <p className="text-muted-foreground">
                      Providing scholarships, school supplies, and tutoring programs to ensure children stay in school and succeed academically.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Healthcare Access</h3>
                    <p className="text-muted-foreground">
                      Organizing medical camps, providing health screenings, and ensuring children receive necessary medical care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Community Development</h3>
                    <p className="text-muted-foreground">
                      Building infrastructure, creating safe spaces, and implementing programs that strengthen entire communities.
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
          <div className="absolute inset-0 bg-red-600/80"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl animate-fade-up">
            <Quote className="h-12 w-12 mx-auto mb-6 text-school-gold" />
            <blockquote className="text-2xl md:text-3xl font-serif italic mb-6">
              "We make a living by what we get, but we make a life by what we give."
            </blockquote>
            <cite className="text-lg">— Winston Churchill</cite>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Our Programs</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Making a Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to address the various needs of children and families in our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Scholarship Program</CardTitle>
                <CardDescription>Educational Support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Full and partial scholarships for deserving students, covering tuition, books, and school supplies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Tuition assistance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Learning materials
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Mentorship support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Health & Wellness</CardTitle>
                <CardDescription>Medical Care</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Free medical checkups, vaccination drives, and health education programs for children and families.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Health screenings
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Vaccination programs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Nutrition support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Skills Training</CardTitle>
                <CardDescription>Vocational Programs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Life skills training and vocational programs for older children and young adults to build sustainable livelihoods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Computer literacy
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Trade skills
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Entrepreneurship
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Smile className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Youth Development</CardTitle>
                <CardDescription>Character Building</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Leadership programs, mentorship, and character development activities for young people.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Leadership training
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Mentorship programs
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Sports & arts
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Infrastructure</CardTitle>
                <CardDescription>Community Building</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Building schools, libraries, and community centers to create safe learning and gathering spaces.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    School construction
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Community centers
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Learning resources
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gift className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Emergency Relief</CardTitle>
                <CardDescription>Crisis Response</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Rapid response programs providing food, shelter, and support during emergencies and natural disasters.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Food assistance
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Temporary shelter
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Family support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <Badge className="mb-4">Our Impact</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Stories of Transformation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the positive changes we're making in the lives of children and families in our community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="col-span-2 row-span-2 animate-fade-up">
              <img 
                src="/lovable-uploads/gc5a0117e.jpg" 
                alt="Foundation impact" 
                className="w-full h-full object-cover rounded-2xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <img 
                src="/lovable-uploads/gc5a0121er.jpg" 
                alt="Educational programs" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png" 
                alt="Healthcare initiatives" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/59b5ff11-5cd8-4812-902f-16387f07dfa3.png" 
                alt="Community development" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <img 
                src="/lovable-uploads/6f3faff4-396a-4ae0-83ca-482ebe95b218.png" 
                alt="Youth programs" 
                className="w-full h-48 object-cover rounded-xl shadow-card hover:shadow-elegant transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-up">
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-lg">Children Helped</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">150</div>
              <div className="text-lg">Scholarships Awarded</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Volunteers</div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">₦50M+</div>
              <div className="text-lg">Donations Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <Badge className="mb-4">Get Involved</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Together, we can create lasting change in the lives of children and families who need it most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center animate-fade-up">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Donate</h3>
                  <p className="text-muted-foreground">Make a financial contribution to support our programs</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <HandHeart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Volunteer</h3>
                  <p className="text-muted-foreground">Share your time and skills to directly impact lives</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Spread Awareness</h3>
                  <p className="text-muted-foreground">Help us reach more people who can make a difference</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center animate-fade-up">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <DollarSign className="h-5 w-5 mr-2" />
                Donate Now
              </Button>
              <Button size="lg" variant="outline">
                <HandHeart className="h-5 w-5 mr-2" />
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <Badge className="mb-4">Contact Us</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions about our programs or want to get involved? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center animate-fade-up">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+234 803 123 4567</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">info@kingskidsfoundation.org</p>
                </CardContent>
              </Card>

              <Card className="text-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">101 Hope Street, Uyo</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-school-dark-blue text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">King's Kids Foundation</h3>
            </div>
            <p className="text-white/80 mb-6">
              Transforming lives and building stronger communities since 2008.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-white/60">
              <span>© 2024 King's Kids Foundation</span>
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

export default FoundationDashboard;
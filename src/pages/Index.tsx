import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
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
  Award,
  Menu,
  X,
  ChevronDown,
  Target,
  Eye,
  Sparkles
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Navigation from "@/components/Navigation";
import montessoriLogo from "@/assets/mont_logo.png";
import highSchoolLogo from "@/assets/high_school_logo.png";
import kingsKidsLogo from "@/assets/kings-kids-logo.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  
  console.log("Index.tsx: Index component rendering");
  
  return (
    <div className="min-h-screen bg-background">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Call: +2348058403852</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email: info@kingskidschools.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                    Login <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Students</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <a href="https://kkcm.priscor.com/" target="_blank" rel="noopener noreferrer">Montessori</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="https://kkcihs.priscor.com/" target="_blank" rel="noopener noreferrer">High School</a>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <span>Teachers</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem asChild>
                        <a href="https://kkcm.priscor.com/" target="_blank" rel="noopener noreferrer">Montessori</a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="https://kkcihs.priscor.com/" target="_blank" rel="noopener noreferrer">High School</a>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="https://portal.kingskidschools.com/">Portal →</Link>
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
                <h1 className="text-xl md:text-2xl font-display font-bold text-foreground tracking-tight">KING'S KIDS</h1>
                <p className="text-xs md:text-sm text-muted-foreground font-medium tracking-widest">CHRISTIAN SCHOOLS</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <Navigation />
            </nav>
            
            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button className="lg:hidden" variant="outline" size="sm">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  <div className="flex items-center space-x-2 pb-4 border-b">
                    <div className="w-8 h-8 rounded-lg overflow-hidden">
                      <img 
                        src="/lovable-uploads/dfbc2b6e-0cab-4685-a3de-68f248f3e165.png" 
                        alt="Logo" 
                        className="w-full h-full object-contain bg-white p-1"
                      />
                    </div>
                    <div>
                      <h2 className="text-sm font-bold">KING'S KIDS</h2>
                      <p className="text-xs text-muted-foreground">CHRISTIAN SCHOOLS</p>
                    </div>
                  </div>
                  
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-2">
                    <Link 
                      to="/" 
                      className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    
                    {/* About Us Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        About Us
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-1 pb-2">
                        <Link to="#history" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Our History</Link>
                        <Link to="#departments" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Departments/Units</Link>
                        <Link to="#board" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Board of Governors</Link>
                        <Link to="#management" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Management Team</Link>
                        <Link to="#staff" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Staff Directory</Link>
                        <Link to="#careers" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                        <Link to="#alumni" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Alumni</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Facilities Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        Facilities
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-1 pb-2">
                        <Link to="#classrooms" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Classrooms</Link>
                        <Link to="/pe-sports" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>P.E Sports</Link>
                        <Link to="#library" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Library</Link>
                        <Link to="#music-studio" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Music Studio</Link>
                        <Link to="#science-lab" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Science Lab</Link>
                        <Link to="#hostel" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Hostel</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Admission Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        Admission
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-1 pb-2">
                        <Link to="#how-to-apply" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>How to apply</Link>
                        <Link to="#school-fees" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Schools fees</Link>
                        <Link to="#entrance-exam" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Entrance Exam dates</Link>
                        <Link to="#arrange-visit" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Arrange a visit</Link>
                        <Link to="#faqs" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Our Schools Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        Our Schools
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-1 pb-2">
                        <Link to="/montessori" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Montessori</Link>
                        <Link to="/highschool" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>High School</Link>
                        <Link to="/basicstudies" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>School of Basic Studies</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Media Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        Media
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-1 pb-2">
                        <Link to="#gallery" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                        <Link to="#news" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>News</Link>
                        <Link to="#events" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Events</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Link 
                      to="/contact" 
                      className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                  
                  {/* Mobile Login & Portal Section */}
                  <div className="pt-4 border-t">
                    {/* Login Section */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                          <span className="mr-2">🔐</span>
                          Login
                        </h3>
                        <div className="space-y-2">
                          <Collapsible>
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                              Students
                              <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 space-y-1">
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left">
                                <a href="https://kkcm.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  Montessori
                                </a>
                              </Button>
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left">
                                <a href="https://kkcihs.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  High School
                                </a>
                              </Button>
                            </CollapsibleContent>
                          </Collapsible>
                          
                          <Collapsible>
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">
                              Teachers
                              <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-2 space-y-1">
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left">
                                <a href="https://kkcm.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  Montessori
                                </a>
                              </Button>
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left">
                                <a href="https://kkcihs.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  High School
                                </a>
                              </Button>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </div>
                      
                      {/* Portal Section */}
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                          <span className="mr-2">🌐</span>
                          Portal
                        </h3>
                        <Button size="sm" asChild className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium">
                          <a href="https://portal.kingskidschools.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                            Portal →
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Slider Section */}
      <section className="relative overflow-hidden">
        <Carousel 
          className="w-full"
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
            duration: 30,
          }}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
        >
          <CarouselContent>
            {/* Slide 1 - School Building Front */}
            <CarouselItem>
              <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png" 
                    alt="King's Kids Christian School Building" 
                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-linear hover:scale-105 animate-ken-burns"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-school-blue/75 to-accent/65" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 left-10 w-4 h-4 bg-accent/30 rounded-full animate-float" />
                  <div className="absolute top-32 right-20 w-6 h-6 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-school-gold/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
                </div>
                
                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 text-center">
                  <Badge className="mb-6 md:mb-8 bg-white/20 text-white border-white/30 backdrop-blur-md animate-fade-in shadow-lg">
                    <Star className="w-4 h-4 mr-2" />
                    A Christian Cambridge School
                  </Badge>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 md:mb-8 text-white animate-fade-up leading-tight">
                    King's Kids
                    <span className="text-accent block bg-gradient-to-r from-accent to-school-gold bg-clip-text text-transparent animate-pulse-glow font-display">No Substitute!</span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-10 max-w-4xl mx-auto animate-fade-up leading-relaxed">
                    Great Things Are Happening Here - Join our family of exceptional schools offering world-class Christian education.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 animate-scale-in">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                      <Link to="/montessori">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Apply Now
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-white/40 text-blue-400 hover:text-blue-300 hover:bg-white/15 backdrop-blur-md shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                      <Link to="#schools">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Explore Schools
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 2 - Remember Your Creator */}
            <CarouselItem>
              <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/lovable-uploads/59b5ff11-5cd8-4812-902f-16387f07dfa3.png" 
                    alt="King's Kids School Campus" 
                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-linear hover:scale-105 animate-ken-burns-reverse"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-40 left-1/3 w-2 h-2 bg-white/40 rounded-full animate-pulse-glow" />
                  <div className="absolute bottom-20 right-1/3 w-8 h-8 border-2 border-accent/20 rounded-full animate-float" />
                </div>
                
                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 text-center">
                  <Badge className="mb-6 md:mb-8 bg-white/20 text-white border-white/30 backdrop-blur-md animate-fade-in shadow-lg">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ecclesiastes 12:1
                  </Badge>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 md:mb-8 text-white animate-fade-up leading-tight">
                    Remember Now Your Creator
                    <span className="text-accent block bg-gradient-to-r from-accent to-school-gold bg-clip-text text-transparent animate-pulse-glow font-display">In The Days Of Your Youth</span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-10 max-w-4xl mx-auto animate-fade-up leading-relaxed">
                    Building character and faith alongside academic excellence for over 28 years.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 animate-scale-in">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                      <Link to="#about">
                        <Heart className="w-5 h-5 mr-2" />
                        Our Mission
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-white/40 text-blue-400 hover:text-blue-300 hover:bg-white/15 backdrop-blur-md shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                      <Link to="#contact">
                        <Users className="w-5 h-5 mr-2" />
                        Join Our Family
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Slide 3 - Educational Tour */}
            <CarouselItem>
              <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src="/lovable-uploads/87ff614b-72c4-4a5b-8918-743060138383.png" 
                    alt="King's Kids Students Educational Tour" 
                    className="w-full h-full object-cover transition-transform duration-[8000ms] ease-linear hover:scale-105 animate-ken-burns"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/75 via-school-blue/65 to-accent/55" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-20 right-10 w-4 h-4 bg-school-gold/30 rounded-full animate-float" />
                  <div className="absolute bottom-32 left-20 w-6 h-6 bg-primary/20 rounded-lg animate-float" />
                </div>
                
                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 text-center">
                  <Badge className="mb-6 md:mb-8 bg-white/20 text-white border-white/30 backdrop-blur-md animate-fade-in shadow-lg">
                    <MapPin className="w-4 h-4 mr-2" />
                    Educational Excellence
                  </Badge>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 md:mb-8 text-white animate-fade-up leading-tight">
                    Empowering Young Minds
                    <span className="text-accent block bg-gradient-to-r from-accent to-school-gold bg-clip-text text-transparent animate-pulse-glow font-display">Beyond The Classroom</span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-10 max-w-4xl mx-auto animate-fade-up leading-relaxed">
                    Our students explore the world, gaining real-world experience through educational tours and practical learning.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 animate-scale-in">
                    <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                      <Link to="#programs">
                        <Award className="w-5 h-5 mr-2" />
                        Our Programs
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-white/40 text-blue-400 hover:text-blue-300 hover:bg-white/15 backdrop-blur-md shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
                      <Link to="#gallery">
                        <Calendar className="w-5 h-5 mr-2" />
                        View Gallery
                      </Link>
                    </Button>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-12 md:mt-16 animate-fade-up">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 md:mb-2">28+</div>
                      <div className="text-white/80 font-medium text-xs md:text-sm">Years of Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-gold mb-1 md:mb-2">2000+</div>
                      <div className="text-white/80 font-medium text-xs md:text-sm">Students Graduated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-green mb-1 md:mb-2">50+</div>
                      <div className="text-white/80 font-medium text-xs md:text-sm">Expert Teachers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-school-orange mb-1 md:mb-2">4</div>
                      <div className="text-white/80 font-medium text-xs md:text-sm">School Levels</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          {/* Enhanced Navigation Arrows - Hidden on mobile */}
          <CarouselPrevious className="hidden md:flex left-4 md:left-8 h-12 w-12 bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 hover:scale-110 transition-all duration-200 text-white shadow-lg" />
          <CarouselNext className="hidden md:flex right-4 md:right-8 h-12 w-12 bg-white/10 border-white/20 backdrop-blur-md hover:bg-white/20 hover:scale-110 transition-all duration-200 text-white shadow-lg" />
        </Carousel>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="animate-fade-up space-y-8">
              <div>
                <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-sm hover:shadow-md transition-shadow">
                  About King's Kids Schools
                </Badge>
                <h3 className="text-4xl lg:text-6xl font-display font-bold mb-6 text-foreground leading-tight tracking-tight">
                  Excellence in Education
                  <span className="text-primary block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Since 2014</span>
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Established in February 2014. King's Kids Christian Schools offers a specialised education built upon Christian principles and the drive for excellence.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="group text-center p-3 sm:p-4 md:p-8 bg-gradient-to-br from-card to-primary/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 md:mb-3">2000+</div>
                  <div className="text-[10px] leading-tight sm:text-sm font-medium text-muted-foreground">Alumni Success Stories</div>
                </div>
                <div className="group text-center p-3 sm:p-4 md:p-8 bg-gradient-to-br from-card to-school-green/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-school-green to-accent bg-clip-text text-transparent mb-2 md:mb-3">98%</div>
                  <div className="text-[10px] leading-tight sm:text-sm font-medium text-muted-foreground">Parent Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in group" style={{ animationDelay: '0.3s' }}>
              {/* Floating sparkle effects */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-school-gold rounded-full animate-pulse opacity-60" />
              <div className="absolute -top-1 -right-3 w-2 h-2 bg-primary rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-2 -left-1 w-2 h-2 bg-accent rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }} />
              
              <div className="aspect-square bg-gradient-to-br from-school-gold/30 via-primary/20 to-accent/30 rounded-3xl p-3 md:p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="w-full h-full bg-card/95 backdrop-blur-sm rounded-2xl shadow-elegant overflow-hidden relative flex flex-col">
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                  
                  {/* Award ceremony image - taking up most of the space */}
                  <div className="relative flex-1 min-h-0 overflow-hidden rounded-t-2xl">
                    <img 
                      src="/lovable-uploads/excellence-award-ceremony.jpg" 
                      alt="Excellence Award Ceremony - Students receiving recognition" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                    
                    {/* Floating award icon */}
                    <div className="absolute top-2 right-2 bg-school-gold/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg">
                      <Award className="w-3 h-3 md:w-4 md:h-4 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Content section - moved to bottom */}
                  <div className="p-2 md:p-3 text-center relative bg-card/95 backdrop-blur-sm flex-shrink-0">
                    <h4 className="text-sm md:text-lg font-bold text-foreground mb-1 flex items-center justify-center gap-1 md:gap-2">
                      <span className="animate-bounce text-xs md:text-base">🏆</span>
                      <span className="text-xs md:text-lg">Excellence Award</span>
                      <span className="animate-bounce text-xs md:text-base" style={{ animationDelay: '0.2s' }}>✨</span>
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Outstanding Educational Achievement
                    </p>
                    
                    {/* Decorative elements */}
                    <div className="mt-1 md:mt-2 flex justify-center space-x-1">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-school-gold rounded-full animate-pulse" />
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-muted/50 via-background to-muted/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-40 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-sm">
              Our Core Values
            </Badge>
            <h3 className="text-4xl lg:text-6xl font-display font-bold mb-6 text-foreground leading-tight tracking-tight">
              Excellence in Education
              <span className="text-primary block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Since 2014</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-primary/5 border-primary/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-primary text-2xl font-bold mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground leading-relaxed text-base">
                  To provide exceptional Christian education that nurtures academic excellence, character development, and spiritual growth in every student, preparing them to be servant leaders in their communities and beyond.
                </p>
              </CardContent>
            </Card>

            {/* Our Vision */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-school-blue/5 border-school-blue/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-school-blue/0 via-school-blue/0 to-school-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-school-blue/30 to-school-blue/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Eye className="h-10 w-10 text-school-blue" />
                </div>
                <CardTitle className="text-school-blue text-2xl font-bold mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground leading-relaxed text-base">
                  To be the leading Christian educational institution, recognized globally for producing well-rounded graduates who excel academically, demonstrate strong moral character, and positively impact society.
                </p>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-accent/5 border-accent/20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <Sparkles className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-accent text-2xl font-bold mb-4">Core Values</CardTitle>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <ul className="text-muted-foreground leading-relaxed space-y-3 text-sm md:text-base">
                  <li className="flex items-start sm:items-center justify-center gap-2"><span className="text-accent flex-shrink-0 mt-1 sm:mt-0">✦</span> <span className="text-left sm:text-center"><strong>Excellence</strong> in all endeavors</span></li>
                  <li className="flex items-start sm:items-center justify-center gap-2"><span className="text-accent flex-shrink-0 mt-1 sm:mt-0">✦</span> <span className="text-left sm:text-center"><strong>Integrity</strong> and moral character</span></li>
                  <li className="flex items-start sm:items-center justify-center gap-2"><span className="text-accent flex-shrink-0 mt-1 sm:mt-0">✦</span> <span className="text-left sm:text-center"><strong>Compassion</strong> and service to others</span></li>
                  <li className="flex items-start sm:items-center justify-center gap-2"><span className="text-accent flex-shrink-0 mt-1 sm:mt-0">✦</span> <span className="text-left sm:text-center"><strong>Innovation</strong> in learning and teaching</span></li>
                  <li className="flex items-start sm:items-center justify-center gap-2"><span className="text-accent flex-shrink-0 mt-1 sm:mt-0">✦</span> <span className="text-left sm:text-center"><strong>Faith</strong> as our foundation</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Column Gallery Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-school-blue/5 via-background to-accent/5 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-school-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 shadow-sm hover:shadow-md transition-shadow">
              Learning Experience
            </Badge>
            <h3 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight tracking-tight" style={{ color: 'hsl(var(--school-orange))' }}>
              Discover Our Learning Environment
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience hands-on learning through our specialized programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Graduation Ceremony */}
            <div className="group relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-xl transition-all duration-700 hover:scale-105">
              <div className="aspect-[4/5] relative">
                <img 
                  src="/lovable-uploads/graduation-ceremony.jpg" 
                  alt="Graduation ceremony with students in caps and gowns celebrating academic achievement" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Floating animation elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent/30 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                <div className="absolute bottom-20 left-4 w-6 h-6 bg-school-gold/40 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300" />
                
                {/* Text content with quick crawl-in effect */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-lg font-display font-bold mb-1 opacity-0 group-hover:opacity-100 transition-all duration-200 delay-50 leading-tight">
                    Graduation Ceremony
                  </h4>
                  <p className="text-white/90 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100">
                    Celebrating academic achievements and milestone moments in our students' journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Science Practical */}
            <div className="group relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-xl transition-all duration-700 hover:scale-105">
              <div className="aspect-[4/5] relative">
                <img 
                  src="/lovable-uploads/science-practical.jpg" 
                  alt="Students conducting hands-on science experiments in modern laboratory" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-blue/80 via-school-blue/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Floating animation elements */}
                <div className="absolute top-6 left-6 w-10 h-10 bg-school-green/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" />
                <div className="absolute bottom-24 right-6 w-4 h-4 bg-accent/50 rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-400" />
                
                {/* Text content with quick crawl-in effect */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-lg font-display font-bold mb-1 opacity-0 group-hover:opacity-100 transition-all duration-200 delay-50 leading-tight">
                    Science Practical
                  </h4>
                  <p className="text-white/90 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100">
                    Hands-on experiments and laboratory experiences that bring science to life.
                  </p>
                </div>
              </div>
            </div>

            {/* ICT Practical */}
            <div className="group relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-xl transition-all duration-700 hover:scale-105">
              <div className="aspect-[4/5] relative">
                <img 
                  src="/lovable-uploads/ict-practical.jpg" 
                  alt="Students learning information and communication technology in modern computer lab" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Floating animation elements */}
                <div className="absolute top-8 right-8 w-6 h-6 bg-primary/40 rounded-lg animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500 delay-250" />
                <div className="absolute bottom-28 left-8 w-8 h-8 bg-school-gold/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-all duration-500 delay-350" />
                
                {/* Text content with quick crawl-in effect */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-lg font-display font-bold mb-1 opacity-0 group-hover:opacity-100 transition-all duration-200 delay-50 leading-tight">
                    ICT Practical
                  </h4>
                  <p className="text-white/90 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-all duration-200 delay-100">
                    Modern technology integration preparing students for the digital future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="schools" className="py-20 md:py-28 px-2 sm:px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-40 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-20 px-2">
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/20 shadow-sm hover:shadow-md transition-shadow">
              Educational Programs
            </Badge>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground leading-tight tracking-tight">Our Schools</h3>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Choose the perfect educational journey for your child with our comprehensive range of programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-card to-school-blue/5 border-school-blue/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-school-blue/0 to-school-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center relative z-10">
                <div className="w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-school-blue/30 to-school-blue/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden shadow-lg">
                  <img src={montessoriLogo} alt="Montessori Logo" className="h-full w-full object-contain p-2" />
                </div>
                <CardTitle className="text-school-blue text-xl md:text-2xl font-bold mb-2">King's Kids Montessori</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium">Foundation Learning</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                  Preschool: Creche, Foundation 1 & 2, Reception. Grade 1 - 5.
                </p>
                <Button className="w-full bg-school-blue hover:bg-school-blue/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link to="/montessori">
                    <Calendar className="w-4 h-4 mr-2" />
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-card to-school-orange/5 border-school-orange/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-school-orange/0 to-school-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center relative z-10">
                <div className="w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-school-orange/30 to-school-orange/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden shadow-lg">
                  <img src={highSchoolLogo} alt="High School Logo" className="h-full w-full object-contain p-2" />
                </div>
                <CardTitle className="text-school-orange text-xl md:text-2xl font-bold mb-2">King's Kids High School</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium">Secondary Education</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                  Preparing students for Junior Cambridge 1-3 and Senior Cambridge 1-3, including WAEC and NECO.
                </p>
                <Button className="w-full bg-school-orange hover:bg-school-orange/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link to="/highschool">
                    <Award className="w-4 h-4 mr-2" />
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-card to-school-green/5 border-school-green/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-school-green/0 to-school-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center relative z-10">
                <div className="w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-school-green/30 to-school-green/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden shadow-lg">
                  <img 
                    src={kingsKidsLogo} 
                    alt="King's Kids Basic Studies Logo" 
                    className="w-16 md:w-20 h-16 md:h-20 object-contain"
                  />
                </div>
                <CardTitle className="text-school-green text-xl md:text-2xl font-bold mb-2">King's Kids Basic Studies</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium">Degree Foundation and Cambridge A-Level Programmes</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                  Preparing Students for Degree foundation and Cambridge A-level Programmes including SAT, TOFEL and IELTS examinations.
                </p>
                <Button className="w-full bg-school-green hover:bg-school-green/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link to="/basicstudies">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-card to-accent/5 border-accent/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center relative z-10">
                <div className="w-20 md:w-24 h-20 md:h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Users className="h-10 w-10 md:h-12 md:w-12 text-accent" />
                </div>
                <CardTitle className="text-accent text-xl md:text-2xl font-bold mb-2">Child and Youth Foundation</CardTitle>
                <CardDescription className="text-base md:text-lg font-medium">Community Support</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="mb-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                  Supporting underprivileged children's education across communities through scholarships and outreach.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link to="/foundation">
                    <Heart className="w-4 h-4 mr-2" />
                    Learn More
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
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
                    <p className="text-muted-foreground">+2348058403852</p>
                    <p className="text-muted-foreground">+2347038962803</p>
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
                    <p className="text-muted-foreground">info@kingskidschools.com</p>
                    <p className="text-muted-foreground">info@kingskidschools.com</p>
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
                    <p className="text-muted-foreground font-medium">MONTESSORI:</p>
                    <p className="text-muted-foreground text-sm">Plot 185, Line F, Ewet Housing Estate, Uyo, Akwa Ibom State</p>
                    <p className="text-muted-foreground font-medium mt-2">HIGH SCHOOL:</p>
                    <p className="text-muted-foreground text-sm">Plot 14, Line J, Sam Edem Street, Ewet Housing Estate, Uyo, Akwa Ibom State</p>
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

      {/* Newsletter Subscription Section */}
      <section className="relative overflow-hidden">
        {/* Photo Collage - First Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-56 md:h-64">
          {/* Photo 1 - School Building */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png" 
              alt="School Building"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Photo 2 - Students in Library */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/59b5ff11-5cd8-4812-902f-16387f07dfa3.png" 
              alt="Students Learning"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Photo 3 - Educational Tour */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/87ff614b-72c4-4a5b-8918-743060138383.png" 
              alt="Educational Tour"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Photo 4 - Graduation Ceremony */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/graduation-kids-ceremony.jpg" 
              alt="Graduation Ceremony - Students"
              className="w-full h-full object-cover object-left transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Photo 5 - Repeat for visual balance */}
          <div className="relative overflow-hidden group hidden md:block bg-muted">
            <img 
              src="/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png" 
              alt="School Excellence"
              className="w-full h-full object-cover object-right transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Photo 6 - Graduation Officials */}
          <div className="relative overflow-hidden group hidden lg:block bg-muted">
            <img 
              src="/lovable-uploads/graduation-officials-ceremony.jpg" 
              alt="Graduation Ceremony - Officials"
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Photo Collage - Second Row - Graduation Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-56 md:h-64">
          {/* Graduate 1 - Adeosin Adeola Adebimpe */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/adeosin-adeola-adebimpe.jpg" 
              alt="Graduate - Adeosin Adeola Adebimpe"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Graduate 2 - Ansel Joseph Akpan */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/ansel-joseph-akpan.jpg" 
              alt="Graduate - Ansel Joseph Akpan"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Graduate 3 - Calistus Chimobi Chukwuma */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/calistus-chimobi-chukwuma.jpg" 
              alt="Graduate - Calistus Chimobi Chukwuma"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Graduate 4 - Columbus Munachimso Oleka */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/columbus-munachimso-oleka.jpg" 
              alt="Graduate - Columbus Munachimso Oleka"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Graduate 5 - Enyiekan-Awasi Irvine Obot */}
          <div className="relative overflow-hidden group hidden md:block">
            <img 
              src="/lovable-uploads/enyiekan-awasi-irvine-obot.jpg" 
              alt="Graduate - Enyiekan-Awasi Irvine Obot"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Graduate 6 - GC5A0117e */}
          <div className="relative overflow-hidden group hidden lg:block">
            <img 
              src="/lovable-uploads/gc5a0117e.jpg" 
              alt="Graduate - Academic Excellence"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Photo Collage - Third Row - More Graduation Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-56 md:h-64">
          {/* Graduate 7 - GC5A0121er */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/gc5a0121er.jpg" 
              alt="Graduate - Outstanding Achievement"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Graduate 8 - Imohabasi Emmanuel Akpabio */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/imohabasi-emmanuel-akpabio.jpg" 
              alt="Graduate - Imohabasi Emmanuel Akpabio"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Graduate 9 - Udoessien Godshand Etim */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/udoessien-godshand-etim.jpg" 
              alt="Graduate - Udoessien Godshand Etim"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Repeat Graduate for visual balance */}
          <div className="relative overflow-hidden group bg-muted">
            <img 
              src="/lovable-uploads/adeosin-adeola-adebimpe.jpg" 
              alt="Graduate Success Story"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Repeat Graduate for medium screens */}
          <div className="relative overflow-hidden group hidden md:block">
            <img 
              src="/lovable-uploads/ansel-joseph-akpan.jpg" 
              alt="Excellence in Education"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Repeat Graduate for large screens */}
          <div className="relative overflow-hidden group hidden lg:block">
            <img 
              src="/lovable-uploads/calistus-chimobi-chukwuma.jpg" 
              alt="Academic Achievement"
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-school-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Newsletter Text */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                  Subscribe To Our Newsletter
                </h3>
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  Subscribe Us And Tell Us About Your Story
                </p>
              </div>

              {/* Subscription Form */}
              <div className="w-full md:w-auto md:min-w-96">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-6 py-4 rounded-lg border-0 bg-white/95 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white transition-all duration-200"
                  />
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 sm:py-16">
        <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold leading-tight">KING'S KIDS SCHOOLS</h3>
                  <p className="text-background/70 text-xs sm:text-sm tracking-widest">EXCELLENCE SINCE 2014</p>
                </div>
              </div>
              <p className="text-background/80 mb-6 leading-relaxed text-sm sm:text-base">
                Empowering young minds for tomorrow's leadership through comprehensive education 
                programs from Montessori to High School, supported by our Youth Foundation.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:bg-background/10">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-base sm:text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="#about" className="text-background/80 hover:text-background transition-colors text-sm sm:text-base">About Us</Link></li>
                <li><Link to="#schools" className="text-background/80 hover:text-background transition-colors text-sm sm:text-base">Our Schools</Link></li>
                <li><Link to="#admission" className="text-background/80 hover:text-background transition-colors text-sm sm:text-base">Admissions</Link></li>
                <li><Link to="#services" className="text-background/80 hover:text-background transition-colors text-sm sm:text-base">Services</Link></li>
                <li><Link to="/foundation" className="text-background/80 hover:text-background transition-colors text-sm sm:text-base">Foundation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-base sm:text-lg">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-background/80 text-sm sm:text-base break-words">
                    <div>+2348058403852</div>
                    <div className="mt-1">+2347038962803</div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-background/80 text-sm sm:text-base break-all">info@kingskidschools.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-background/80 text-sm sm:text-base leading-relaxed">
                    <div className="mb-3">
                      <strong>MONTESSORI:</strong><br/>
                      Plot 185, Line F, Ewet Housing Estate, Uyo, Akwa Ibom State
                    </div>
                    <div>
                      <strong>HIGH SCHOOL:</strong><br/>
                      Plot 14, Line J, Sam Edem Street, Ewet Housing Estate, Uyo, Akwa Ibom State
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-background/60 text-xs sm:text-sm px-2 leading-relaxed">
              © 2024 King's Kids Schools. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

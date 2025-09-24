import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  Menu,
  ChevronDown
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Navigation from "@/components/Navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <>
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
              <Button size="sm" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90" asChild>
                <a href="https://portal.kingskidschools.com/" target="_blank" rel="noopener noreferrer">Portal →</a>
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
              <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gradient-to-br from-background via-background/95 to-primary/5">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-3 pb-6 border-b border-border/50">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shadow-glow bg-gradient-to-br from-primary/10 to-accent/5">
                      <img 
                        src="/lovable-uploads/dfbc2b6e-0cab-4685-a3de-68f248f3e165.png" 
                        alt="King's Kids Logo" 
                        className="w-full h-full object-contain bg-white p-2 rounded-xl"
                      />
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-foreground tracking-tight">KING'S KIDS</h2>
                      <p className="text-xs text-primary font-medium tracking-widest">CHRISTIAN SCHOOLS</p>
                    </div>
                  </div>
                  
                  {/* Mobile Navigation Links */}
                  <div className="flex flex-col space-y-3">
                    <Link 
                      to="/" 
                      className="flex items-center px-4 py-3 text-sm font-semibold rounded-xl bg-primary/5 text-primary hover:bg-primary/10 hover:text-primary transition-all duration-200 border border-primary/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    
                     {/* About Us Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-secondary/10 to-accent/5 text-foreground hover:from-secondary/15 hover:to-accent/10 transition-all duration-200 border border-secondary/10 shadow-sm">
                        About Us
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180 text-secondary" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 mt-3 space-y-2 pb-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border/30 p-2">
                        <Link to="/about#history" className="flex items-center text-sm py-3 px-4 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary bg-card/50" onClick={() => setMobileMenuOpen(false)}>
                          <span className="text-xs mr-3 text-muted-foreground">📚</span>
                          Our History
                        </Link>
                        <Link to="/about#departments" className="flex items-center text-sm py-3 px-4 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary bg-card/50" onClick={() => setMobileMenuOpen(false)}>
                          <span className="text-xs mr-3 text-muted-foreground">🏛️</span>
                          Departments/Units
                        </Link>
                        <Link to="/about#board" className="flex items-center text-sm py-3 px-4 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary bg-card/50" onClick={() => setMobileMenuOpen(false)}>
                          <span className="text-xs mr-3 text-muted-foreground">👥</span>
                          Board of Governors
                        </Link>
                        <Link to="/about#management" className="flex items-center text-sm py-3 px-4 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary bg-card/50" onClick={() => setMobileMenuOpen(false)}>
                          <span className="text-xs mr-3 text-muted-foreground">💼</span>
                          Management Team
                        </Link>
                        <Link to="/about#staff" className="flex items-center text-sm py-3 px-4 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary bg-card/50" onClick={() => setMobileMenuOpen(false)}>
                          <span className="text-xs mr-3 text-muted-foreground">👨‍🏫</span>
                          Staff Directory
                        </Link>
                        <Link to="/careers" className="flex items-center text-sm py-3 px-4 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary bg-card/50" onClick={() => setMobileMenuOpen(false)}>
                          <span className="text-xs mr-3 text-muted-foreground">💼</span>
                          Careers
                        </Link>
                        <Link to="/alumni" className="flex items-center text-sm py-3 px-4 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 border-l-2 border-transparent hover:border-primary bg-card/50" onClick={() => setMobileMenuOpen(false)}>
                          <span className="text-xs mr-3 text-muted-foreground">🎓</span>
                          Alumni
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Facilities Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-school-green/10 to-primary/5 text-foreground hover:from-school-green/15 hover:to-primary/10 transition-all duration-200 border border-school-green/10">
                        Facilities
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180 text-school-green" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6 mt-3 space-y-2 pb-3">
                        <Link to="/classrooms" className="block text-sm py-2 px-3 hover:text-school-green hover:bg-school-green/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Classrooms</Link>
                        <Link to="/pe-sports" className="block text-sm py-2 px-3 hover:text-school-green hover:bg-school-green/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>P.E Sports</Link>
                        <Link to="/library" className="block text-sm py-2 px-3 hover:text-school-green hover:bg-school-green/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Library</Link>
                        <Link to="/music-studio" className="block text-sm py-2 px-3 hover:text-school-green hover:bg-school-green/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Music Studio</Link>
                        <Link to="/science-lab" className="block text-sm py-2 px-3 hover:text-school-green hover:bg-school-green/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Science Lab</Link>
                        <Link to="/hostel" className="block text-sm py-2 px-3 hover:text-school-green hover:bg-school-green/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Hostel</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Admission Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-accent/10 to-school-blue/5 text-foreground hover:from-accent/15 hover:to-school-blue/10 transition-all duration-200 border border-accent/10">
                        Admission
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180 text-accent" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6 mt-3 space-y-2 pb-3">
                        <Link to="/how-to-apply" className="block text-sm py-2 px-3 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>How to apply</Link>
                        <Link to="/school-fees" className="block text-sm py-2 px-3 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Schools fees</Link>
                        <Link to="/entrance-exams-date" className="block text-sm py-2 px-3 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Entrance Exam dates</Link>
                        <Link to="/arrange-a-visit" className="block text-sm py-2 px-3 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Arrange a visit</Link>
                        <Link to="/faqs" className="block text-sm py-2 px-3 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Our Schools Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-school-orange/10 to-school-gold/5 text-foreground hover:from-school-orange/15 hover:to-school-gold/10 transition-all duration-200 border border-school-orange/10">
                        Our Schools
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180 text-school-orange" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6 mt-3 space-y-2 pb-3">
                        <Link to="/montessori" className="block text-sm py-2 px-3 hover:text-school-orange hover:bg-school-orange/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Montessori</Link>
                        <Link to="/highschool" className="block text-sm py-2 px-3 hover:text-school-orange hover:bg-school-orange/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>High School</Link>
                        <Link to="/basicstudies" className="block text-sm py-2 px-3 hover:text-school-orange hover:bg-school-orange/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>School of Basic Studies</Link>
                        <Link to="/foundation" className="block text-sm py-2 px-3 hover:text-school-orange hover:bg-school-orange/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Foundation</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Media Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-school-gold/10 to-secondary/5 text-foreground hover:from-school-gold/15 hover:to-secondary/10 transition-all duration-200 border border-school-gold/10">
                        Media
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180 text-school-gold" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-6 mt-3 space-y-2 pb-3">
                        <Link to="/gallery" className="block text-sm py-2 px-3 hover:text-school-gold hover:bg-school-gold/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                        <Link to="/news" className="block text-sm py-2 px-3 hover:text-school-gold hover:bg-school-gold/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>News</Link>
                        <Link to="/events" className="block text-sm py-2 px-3 hover:text-school-gold hover:bg-school-gold/5 rounded-lg transition-all duration-200" onClick={() => setMobileMenuOpen(false)}>Events</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Link 
                      to="/contact" 
                      className="flex items-center px-4 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                  
                  {/* Enhanced Mobile Login & Portal Section */}
                  <div className="pt-6 border-t border-border/50">
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 rounded-2xl p-6 border border-primary/10">
                        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                            <span className="text-primary">🔐</span>
                          </div>
                          Student & Teacher Login
                        </h3>
                        <div className="space-y-4">
                          <Collapsible>
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                              Students Portal
                              <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-3 space-y-2">
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left bg-background/50 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200">
                                <a href="https://kkcm.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="text-xs font-bold text-primary">M</span>
                                  </div>
                                  Montessori Student Portal
                                </a>
                              </Button>
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left bg-background/50 border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200">
                                <a href="https://kkcihs.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  <div className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center mr-3">
                                    <span className="text-xs font-bold text-secondary">H</span>
                                  </div>
                                  High School Student Portal
                                </a>
                              </Button>
                            </CollapsibleContent>
                          </Collapsible>
                          
                          <Collapsible>
                            <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-xl hover:from-secondary/90 hover:to-secondary/70 transition-all duration-300 shadow-lg hover:shadow-xl">
                              Teachers Portal
                              <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-3 space-y-2">
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left bg-background/50 border-secondary/20 hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-200">
                                <a href="https://kkcm.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center mr-3">
                                    <span className="text-xs font-bold text-primary">M</span>
                                  </div>
                                  Montessori Teacher Portal
                                </a>
                              </Button>
                              <Button size="sm" variant="outline" asChild className="w-full justify-start text-left bg-background/50 border-secondary/20 hover:bg-secondary/5 hover:border-secondary/30 transition-all duration-200">
                                <a href="https://kkcihs.priscor.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                                  <div className="w-6 h-6 rounded bg-secondary/10 flex items-center justify-center mr-3">
                                    <span className="text-xs font-bold text-secondary">H</span>
                                  </div>
                                  High School Teacher Portal
                                </a>
                              </Button>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </div>
                      
                      {/* Enhanced Portal Access */}
                      <div className="bg-gradient-to-br from-accent/5 via-background to-school-gold/5 rounded-2xl p-6 border border-accent/10">
                        <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mr-3">
                            <span className="text-accent">🌐</span>
                          </div>
                          Main Portal
                        </h3>
                        <Button size="lg" asChild className="w-full bg-gradient-to-r from-accent to-school-gold text-background hover:from-accent/90 hover:to-school-gold/90 shadow-glow hover:shadow-elegant transition-all duration-500 font-semibold py-3">
                          <a href="https://portal.kingskidschools.com/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                            <div className="flex items-center justify-center">
                              <span className="mr-3">🚀</span>
                              Access School Portal
                              <span className="ml-2">→</span>
                            </div>
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
    </>
  );
};

export default Header;
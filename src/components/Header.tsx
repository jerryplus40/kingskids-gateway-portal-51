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
                        <Link to="/about#history" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Our History</Link>
                        <Link to="/about#departments" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Departments/Units</Link>
                        <Link to="/about#board" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Board of Governors</Link>
                        <Link to="/about#management" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Management Team</Link>
                        <Link to="/about#staff" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Staff Directory</Link>
                        <Link to="/careers" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
                        <Link to="/alumni" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Alumni</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Facilities Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        Facilities
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-1 pb-2">
                        <Link to="/classrooms" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Classrooms</Link>
                        <Link to="/pe-sports" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>P.E Sports</Link>
                        <Link to="/library" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Library</Link>
                        <Link to="/music-studio" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Music Studio</Link>
                        <Link to="/science-lab" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Science Lab</Link>
                        <Link to="/hostel" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Hostel</Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    {/* Admission Submenu - Collapsible */}
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                        Admission
                        <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 space-y-1 pb-2">
                        <Link to="/how-to-apply" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>How to apply</Link>
                        <Link to="/school-fees" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Schools fees</Link>
                        <Link to="/entrance-exams-date" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Entrance Exam dates</Link>
                        <Link to="/arrange-a-visit" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Arrange a visit</Link>
                        <Link to="/faqs" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQs</Link>
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
                        <Link to="/gallery" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                        <Link to="/news" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>News</Link>
                        <Link to="/events" className="block text-sm py-1 px-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Events</Link>
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
                  
                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+2348058403852</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>info@kingskidschools.com</span>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Button size="sm" asChild className="w-full">
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Student Login</Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild className="w-full">
                        <Link to="#apply" onClick={() => setMobileMenuOpen(false)}>Online Applications</Link>
                      </Button>
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
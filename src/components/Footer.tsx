import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap,
  Phone, 
  Mail, 
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
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
                <p className="text-background/70 text-sm tracking-widest">EXCELLENCE SINCE 2014</p>
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
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
              <li><Link to="/about" className="text-background/80 hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/montessori" className="text-background/80 hover:text-background transition-colors">Our Schools</Link></li>
              <li><Link to="/how-to-apply" className="text-background/80 hover:text-background transition-colors">Admissions</Link></li>
              <li><Link to="/classrooms" className="text-background/80 hover:text-background transition-colors">Facilities</Link></li>
              <li><Link to="/foundation" className="text-background/80 hover:text-background transition-colors">Foundation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+2348058403852" className="text-background/80 text-sm hover:text-background transition-colors">+2348058403852</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:info@kingskidschools.com" className="text-background/80 text-sm hover:text-background transition-colors">info@kingskidschools.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-background/80 text-sm">
                  <strong>MONTESSORI:</strong><br/>
                  <a href="https://maps.google.com/?q=Plot+185,+Line+F,+Ewet+Housing+Estate,+Uyo,+Akwa+Ibom+State" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                    Plot 185, Line F, Ewet Housing Estate, Uyo, Akwa Ibom State
                  </a><br/>
                  <strong>HIGH SCHOOL:</strong><br/>
                  <a href="https://maps.google.com/?q=Plot+14,+Line+J,+Sam+Edem+Street,+Ewet+Housing+Estate,+Uyo,+Akwa+Ibom+State" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                    Plot 14, Line J, Sam Edem Street, Ewet Housing Estate, Uyo, Akwa Ibom State
                  </a>
                </span>
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
  );
};

export default Footer;
import { Microscope, FlaskConical, Atom, TestTube } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ScienceLab = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
            Science <span className="text-primary">Laboratory</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern laboratory facilities where students conduct experiments, explore scientific concepts,
            and develop critical thinking skills through hands-on learning.
          </p>
        </div>
      </section>

      {/* Lab Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Microscope className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Advanced Equipment</CardTitle>
                <CardDescription>
                  High-quality microscopes, spectrometers, and analytical instruments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FlaskConical className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Chemistry Lab</CardTitle>
                <CardDescription>
                  Fully equipped with fume hoods, reagents, and safety equipment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Atom className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Physics Lab</CardTitle>
                <CardDescription>
                  Mechanics, optics, and electronics equipment for comprehensive experiments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TestTube className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Biology Lab</CardTitle>
                <CardDescription>
                  Prepared specimens, cell culture facilities, and molecular biology tools
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Lab Types */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Laboratory Facilities</h2>
            <p className="text-muted-foreground text-lg">
              Specialized labs for different branches of science
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Chemistry Laboratory</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Organic and inorganic chemistry setups</li>
                  <li>• Fume hoods and ventilation systems</li>
                  <li>• pH meters and analytical balances</li>
                  <li>• Safety shower and eyewash stations</li>
                  <li>• Chemical storage and disposal systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Physics Laboratory</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mechanics and motion experiments</li>
                  <li>• Optics and wave demonstration kits</li>
                  <li>• Electronics and circuit boards</li>
                  <li>• Data logging and computer interfaces</li>
                  <li>• Magnetic and electric field equipment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Biology Laboratory</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Compound and stereo microscopes</li>
                  <li>• Cell culture and incubation facilities</li>
                  <li>• DNA extraction and PCR equipment</li>
                  <li>• Preserved and live specimens</li>
                  <li>• Anatomical models and charts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety & Programs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Safety Measures</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Comprehensive safety training for all students</li>
                  <li>• Emergency procedures and equipment</li>
                  <li>• Personal protective equipment provided</li>
                  <li>• Certified laboratory supervisors</li>
                  <li>• Regular safety audits and updates</li>
                  <li>• First aid stations in every lab</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Research Programs</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Student research projects</li>
                  <li>• Science fair participation</li>
                  <li>• University collaboration programs</li>
                  <li>• Summer research internships</li>
                  <li>• Scientific publication opportunities</li>
                  <li>• Peer mentoring programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Student Achievements</h2>
            <p className="text-muted-foreground text-lg">
              Our students excel in scientific competitions and research
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">15+</CardTitle>
                <CardDescription>Science Fair Winners</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">8</CardTitle>
                <CardDescription>Research Publications</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">25+</CardTitle>
                <CardDescription>University Scholarships</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">100%</CardTitle>
                <CardDescription>Lab Safety Record</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Explore Scientific Discovery
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our science program and unlock the mysteries of the natural world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Lab Tour</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/how-to-apply">Learn About Programs</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ScienceLab;
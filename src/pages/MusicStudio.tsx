import { ArrowLeft, Music, Headphones, Mic, Piano } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MusicStudio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Music <span className="text-primary">Studio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A state-of-the-art music facility where students explore their musical talents,
            learn instruments, and create beautiful harmonies.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Piano className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Premium Instruments</CardTitle>
                <CardDescription>
                  Professional-grade pianos, guitars, drums, and orchestral instruments
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Recording Studio</CardTitle>
                <CardDescription>
                  Professional recording equipment for student compositions and performances
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mic className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Performance Space</CardTitle>
                <CardDescription>
                  Dedicated performance area with proper acoustics and staging
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Music className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Music Theory</CardTitle>
                <CardDescription>
                  Interactive whiteboards and digital tools for music theory lessons
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Music Programs</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive music education for all skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Individual Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Piano and keyboard</li>
                  <li>• Guitar (acoustic and electric)</li>
                  <li>• Violin and string instruments</li>
                  <li>• Voice and vocal training</li>
                  <li>• Drums and percussion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ensemble Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• School orchestra</li>
                  <li>• Jazz ensemble</li>
                  <li>• Choir and vocal groups</li>
                  <li>• Rock bands</li>
                  <li>• Chamber music groups</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Music Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Digital music production</li>
                  <li>• Audio engineering basics</li>
                  <li>• Music software training</li>
                  <li>• Electronic music creation</li>
                  <li>• Sound design workshops</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Details */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Studio Features</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Soundproof practice rooms</li>
                  <li>• Professional mixing console</li>
                  <li>• High-quality microphones and monitors</li>
                  <li>• Digital audio workstations</li>
                  <li>• Instrument storage and maintenance</li>
                  <li>• Performance lighting system</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Achievements</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Regional music competition winners</li>
                  <li>• Annual student concerts</li>
                  <li>• Community performance outreach</li>
                  <li>• Music scholarship recipients</li>
                  <li>• Professional artist collaborations</li>
                  <li>• Student composition showcases</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Discover Your Musical Talent
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join our music program and explore the world of sound, rhythm, and melody
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule an Audition</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/admission">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicStudio;
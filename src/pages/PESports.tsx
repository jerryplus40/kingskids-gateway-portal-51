import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Trophy,
  Timer,
  Users,
  Award,
  Activity,
  Target,
  Heart,
  Zap
} from "lucide-react";

const PESports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-students-bg.jpg" 
            alt="PE Sports at King's Kids" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Physical Education & Sports
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            PE & Sports
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Building character, fitness, and teamwork through comprehensive physical education and sports programs
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Our PE & Sports Program</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At King's Kids, we believe physical education is essential for developing well-rounded students. 
                Our comprehensive sports program promotes fitness, teamwork, and healthy competition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Competitive Sports</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Inter-school competitions and tournaments to develop competitive spirit
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Health & Fitness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Focus on physical fitness, health education, and lifelong wellness habits
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Team Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developing leadership, communication, and collaboration through team sports
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Skill Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fundamental movement skills and sport-specific techniques
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Sports Programs */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Our Sports Programs</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Activity className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Football/Soccer</CardTitle>
                  <CardDescription>
                    The world's most popular sport - developing ball skills, strategy, and teamwork
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-school-blue/20 to-primary/20 flex items-center justify-center">
                  <Zap className="h-16 w-16 text-school-blue" />
                </div>
                <CardHeader>
                  <CardTitle>Basketball</CardTitle>
                  <CardDescription>
                    Fast-paced game focusing on coordination, agility, and quick decision-making
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-school-orange/20 flex items-center justify-center">
                  <Timer className="h-16 w-16 text-accent" />
                </div>
                <CardHeader>
                  <CardTitle>Track & Field</CardTitle>
                  <CardDescription>
                    Athletic events promoting speed, endurance, strength, and personal achievement
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-school-gold/20 to-primary/20 flex items-center justify-center">
                  <Award className="h-16 w-16 text-school-gold" />
                </div>
                <CardHeader>
                  <CardTitle>Table Tennis</CardTitle>
                  <CardDescription>
                    Precision sport developing hand-eye coordination and quick reflexes
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-school-green/20 to-accent/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-school-green" />
                </div>
                <CardHeader>
                  <CardTitle>Swimming</CardTitle>
                  <CardDescription>
                    Full-body workout promoting cardiovascular health and water safety
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-school-blue/20 flex items-center justify-center">
                  <Trophy className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Other Sports</CardTitle>
                  <CardDescription>
                    Volleyball, badminton, athletics, and seasonal sports activities
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Facilities */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Sports Facilities</h2>
                <p className="text-lg text-muted-foreground">
                  State-of-the-art facilities to support our comprehensive sports program
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Multi-Purpose Court</h3>
                  <p className="text-muted-foreground text-sm">
                    Versatile court for basketball, volleyball, badminton, and other indoor sports
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Football Field</h3>
                  <p className="text-muted-foreground text-sm">
                    Full-size grass field for football training and matches
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Swimming Pool</h3>
                  <p className="text-muted-foreground text-sm">
                    Olympic-standard pool for swimming lessons and water sports
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Athletics Track</h3>
                  <p className="text-muted-foreground text-sm">
                    Professional track for running events and field sports
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Fitness Center</h3>
                  <p className="text-muted-foreground text-sm">
                    Modern equipment for strength training and conditioning
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">Table Tennis Hall</h3>
                  <p className="text-muted-foreground text-sm">
                    Dedicated space with multiple tables for table tennis training
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Join Our Sports Program</h2>
            <p className="text-xl mb-8 text-white/90">
              Give your child the opportunity to excel in sports while developing character and fitness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/how-to-apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/arrange-a-visit">Schedule a Visit</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PESports;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Camera,
  Play,
  Eye,
  Calendar,
  Users,
  Award,
  BookOpen,
  Heart,
  GraduationCap
} from "lucide-react";

const Gallery = () => {
  const galleryImages = [
    { src: "/lovable-uploads/gc5a0117e.jpg", title: "Academic Excellence", category: "academics" },
    { src: "/lovable-uploads/gc5a0121er.jpg", title: "Student Life", category: "student-life" },
    { src: "/lovable-uploads/school-building-hero.jpg", title: "Campus View", category: "campus" },
    { src: "/lovable-uploads/ansel-joseph-akpan.jpg", title: "Outstanding Student", category: "achievements" },
    { src: "/lovable-uploads/adeosin-adeola-adebimpe.jpg", title: "Academic Achievement", category: "achievements" },
    { src: "/lovable-uploads/calistus-chimobi-chukwuma.jpg", title: "Sports Excellence", category: "sports" },
    { src: "/lovable-uploads/columbus-munachimso-oleka.jpg", title: "Cultural Performance", category: "events" },
    { src: "/lovable-uploads/enyiekan-awasi-irvine-obot.jpg", title: "Science Fair", category: "academics" },
    { src: "/lovable-uploads/imohabasi-emmanuel-akpabio.jpg", title: "Graduation Day", category: "events" },
    { src: "/lovable-uploads/udoessien-godshand-etim.jpg", title: "Community Service", category: "activities" },
  ];

  const categories = [
    { name: "All", count: galleryImages.length, active: true },
    { name: "Academics", count: 3, active: false },
    { name: "Student Life", count: 2, active: false },
    { name: "Sports", count: 2, active: false },
    { name: "Events", count: 2, active: false },
    { name: "Campus", count: 1, active: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="King's Kids Gallery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Media
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Capturing moments of excellence, achievement, and joy at King's Kids Schools
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Gallery Stats */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">500+</CardTitle>
                  <CardDescription>Photos</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-school-blue" />
                  </div>
                  <CardTitle className="text-2xl">50+</CardTitle>
                  <CardDescription>Videos</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">100+</CardTitle>
                  <CardDescription>Events Covered</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-school-green" />
                  </div>
                  <CardTitle className="text-2xl">25+</CardTitle>
                  <CardDescription>Years Documented</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Browse by Category</h2>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive collection of memories and achievements
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src}
                      alt={image.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                    </div>
                    <Button
                      size="icon"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      variant="secondary"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Featured Collections */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">Featured Collections</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <GraduationCap className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>Graduation Ceremonies</CardTitle>
                  <CardDescription>
                    Celebrating academic milestones and student achievements across all programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="#graduation">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-school-blue/20 to-primary/20 flex items-center justify-center">
                  <Users className="h-16 w-16 text-school-blue" />
                </div>
                <CardHeader>
                  <CardTitle>School Events</CardTitle>
                  <CardDescription>
                    Annual celebrations, cultural events, and special school activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="#events">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-school-orange/20 flex items-center justify-center">
                  <Heart className="h-16 w-16 text-accent" />
                </div>
                <CardHeader>
                  <CardTitle>Student Life</CardTitle>
                  <CardDescription>
                    Daily activities, friendships, and memorable moments in school life
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to="#student-life">View Collection</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Video Gallery */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Video Gallery</h2>
                <p className="text-lg text-muted-foreground">
                  Experience King's Kids Schools through our video collection
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-school-blue/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white bg-primary/80 rounded-full p-2" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">School Tour 2024</CardTitle>
                    <CardDescription>Take a virtual tour of our facilities</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 bg-gradient-to-br from-accent/20 to-school-green/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white bg-accent/80 rounded-full p-2" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Sports Day Highlights</CardTitle>
                    <CardDescription>Best moments from our annual sports day</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 bg-gradient-to-br from-school-gold/20 to-primary/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white bg-school-gold/80 rounded-full p-2" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">Cultural Festival</CardTitle>
                    <CardDescription>Celebrating diversity and cultural heritage</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Want to Be Part of Our Story?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join our community and create your own memorable moments at King's Kids Schools
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

export default Gallery;
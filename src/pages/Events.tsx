import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar,
  Clock,
  MapPin,
  Users,
  Tag,
  Star,
  Ticket,
  ArrowRight,
  CalendarDays,
  Trophy,
  Music,
  BookOpen
} from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day 2024",
      description: "Join us for a day of athletic competition, team spirit, and school pride as all students showcase their sporting talents.",
      date: "2024-04-15",
      time: "8:00 AM - 4:00 PM",
      location: "Main Campus Sports Complex",
      category: "Sports",
      featured: true,
      price: "Free",
      capacity: "All Students & Parents",
      image: "/lovable-uploads/calistus-chimobi-chukwuma.jpg"
    },
    {
      id: 2,
      title: "Science Fair & Innovation Expo",
      description: "Students present their innovative science projects and research findings in this annual celebration of STEM excellence.",
      date: "2024-04-20",
      time: "10:00 AM - 3:00 PM", 
      location: "Science Laboratory Complex",
      category: "Academic",
      featured: true,
      price: "Free",
      capacity: "Open to Public",
      image: "/lovable-uploads/enyiekan-awasi-irvine-obot.jpg"
    },
    {
      id: 3,
      title: "Cultural Heritage Festival",
      description: "A colorful celebration of Nigerian culture featuring traditional music, dance, art, and cuisine from various ethnic groups.",
      date: "2024-05-01",
      time: "9:00 AM - 5:00 PM",
      location: "School Auditorium & Grounds",
      category: "Cultural",
      featured: false,
      price: "₦500",
      capacity: "500 People",
      image: "/lovable-uploads/columbus-munachimso-oleka.jpg"
    },
    {
      id: 4,
      title: "Inter-House Academic Competition",
      description: "Students compete across subjects including Mathematics, English, Science, and General Knowledge in this exciting academic battle.",
      date: "2024-05-10",
      time: "9:00 AM - 2:00 PM",
      location: "Main Assembly Hall",
      category: "Academic",
      featured: false,
      price: "Free",
      capacity: "Students Only",
      image: "/lovable-uploads/ansel-joseph-akpan.jpg"
    },
    {
      id: 5,
      title: "End of Year Awards Ceremony",
      description: "Celebrating academic excellence, outstanding achievements, and character development of our students throughout the academic year.",
      date: "2024-07-15",
      time: "4:00 PM - 7:00 PM",
      location: "School Auditorium",
      category: "Ceremony",
      featured: false,
      price: "By Invitation",
      capacity: "200 People",
      image: "/lovable-uploads/adeosin-adeola-adebimpe.jpg"
    }
  ];

  const pastEvents = [
    {
      title: "Christmas Carol Service 2023",
      date: "2023-12-15",
      category: "Religious",
      image: "/lovable-uploads/gc5a0117e.jpg"
    },
    {
      title: "Graduation Ceremony 2023",
      date: "2023-07-20",
      category: "Ceremony", 
      image: "/lovable-uploads/imohabasi-emmanuel-akpabio.jpg"
    },
    {
      title: "Inter-School Mathematics Competition",
      date: "2023-11-10",
      category: "Academic",
      image: "/lovable-uploads/gc5a0121er.jpg"
    }
  ];

  const eventCategories = ["All", "Academic", "Sports", "Cultural", "Ceremony", "Religious"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="King's Kids Events" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Media
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            School Events
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover upcoming events, activities, and celebrations that make King's Kids Schools a vibrant community
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Events Stats */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CalendarDays className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">100+</CardTitle>
                  <CardDescription>Annual Events</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-school-blue" />
                  </div>
                  <CardTitle className="text-2xl">25+</CardTitle>
                  <CardDescription>Competitions</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Music className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">15+</CardTitle>
                  <CardDescription>Cultural Events</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-school-green" />
                  </div>
                  <CardTitle className="text-2xl">5000+</CardTitle>
                  <CardDescription>Annual Attendees</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground">
                Filter events by category to find what interests you most
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {eventCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  <Tag className="h-4 w-4" />
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Featured Events */}
          <section className="mb-16">
            <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              Featured Events
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {upcomingEvents.filter(event => event.featured).map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {event.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                      </div>
                      <Badge variant="outline">{event.price}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {event.description}
                    </CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {event.capacity}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full group">
                      <Link to={`/events/${event.id}`}>
                        <Ticket className="h-4 w-4 mr-2" />
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* All Upcoming Events */}
          <section className="mb-16">
            <h3 className="text-2xl font-display font-bold mb-8">All Upcoming Events</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {event.category}
                    </Badge>
                    {event.featured && (
                      <Badge className="absolute top-4 left-4 bg-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <Badge variant="outline">{event.price}</Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {event.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {event.description}
                    </CardDescription>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/events/${event.id}`}>
                        View Event
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Past Events Gallery</h2>
                <p className="text-lg text-muted-foreground">
                  Relive memorable moments from our recent events and celebrations
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <Badge variant="secondary" className="absolute top-4 right-4">
                        {event.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link to="/gallery">
                    View All Past Events
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Event Calendar CTA */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Never Miss an Event</h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our event calendar and get notified about upcoming activities and celebrations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Calendar className="h-4 w-4 mr-2" />
                Subscribe to Calendar
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">
                  Get Event Updates
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
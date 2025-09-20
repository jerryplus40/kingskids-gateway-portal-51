import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar,
  User,
  Clock,
  Tag,
  TrendingUp,
  BookOpen,
  Award,
  Users,
  ArrowRight
} from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "King's Kids Students Excel in National Mathematics Competition",
      excerpt: "Our High School students brought home multiple awards from the National Mathematics Olympiad, showcasing excellence in STEM education.",
      category: "Achievements",
      date: "2024-03-15",
      author: "Admin Team",
      readTime: "3 min read",
      featured: true,
      image: "/lovable-uploads/ansel-joseph-akpan.jpg"
    },
    {
      id: 2,
      title: "New Science Laboratory Officially Opens",
      excerpt: "State-of-the-art science laboratory equipped with modern equipment to enhance practical learning experience for all students.",
      category: "Infrastructure",
      date: "2024-03-10",
      author: "Principal's Office",
      readTime: "4 min read",
      featured: true,
      image: "/lovable-uploads/school-building-hero.jpg"
    },
    {
      id: 3,
      title: "Annual Cultural Festival Celebrates Diversity",
      excerpt: "Students showcased the rich cultural heritage of Nigeria through music, dance, and traditional exhibitions.",
      category: "Events",
      date: "2024-03-05",
      author: "Cultural Committee",
      readTime: "5 min read",
      featured: false,
      image: "/lovable-uploads/columbus-munachimso-oleka.jpg"
    },
    {
      id: 4,
      title: "Montessori Program Receives International Accreditation",
      excerpt: "Our Montessori program has been officially accredited by the International Montessori Council, affirming our commitment to authentic Montessori education.",
      category: "Academic",
      date: "2024-02-28",
      author: "Academic Board",
      readTime: "6 min read",
      featured: false,
      image: "/lovable-uploads/gc5a0117e.jpg"
    },
    {
      id: 5,
      title: "Student Environmental Club Wins Green Schools Award",
      excerpt: "Recognition for outstanding environmental initiatives and sustainability projects implemented by our dedicated student environmental club.",
      category: "Achievements",
      date: "2024-02-20",
      author: "Environmental Club",
      readTime: "4 min read",
      featured: false,
      image: "/lovable-uploads/gc5a0121er.jpg"
    },
    {
      id: 6,
      title: "New Partnership with Local University Announced",
      excerpt: "Strategic partnership will provide advanced learning opportunities and seamless transition pathways for our graduating students.",
      category: "Partnerships",
      date: "2024-02-15",
      author: "Management",
      readTime: "3 min read",
      featured: false,
      image: "/lovable-uploads/calistus-chimobi-chukwuma.jpg"
    }
  ];

  const categories = ["All", "Achievements", "Academic", "Events", "Infrastructure", "Partnerships"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/school-building-hero.jpg" 
            alt="King's Kids News" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-school-blue/70 to-accent/60" />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            Media
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
            School News
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest happenings, achievements, and developments at King's Kids Schools
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* News Stats */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">150+</CardTitle>
                  <CardDescription>News Articles</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-school-blue" />
                  </div>
                  <CardTitle className="text-2xl">50+</CardTitle>
                  <CardDescription>Achievement Stories</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">25+</CardTitle>
                  <CardDescription>Monthly Updates</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-school-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-school-green" />
                  </div>
                  <CardTitle className="text-2xl">1000+</CardTitle>
                  <CardDescription>Newsletter Subscribers</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* Category Filter */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Latest News & Updates</h2>
              <p className="text-lg text-muted-foreground">
                Browse news by category to stay informed about what matters most to you
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
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

          {/* Featured News */}
          <section className="mb-16">
            <h3 className="text-2xl font-display font-bold mb-8">Featured Stories</h3>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {newsArticles.filter(article => article.featured).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-primary">
                      Featured
                    </Badge>
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full group">
                      <Link to={`/news/${article.id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Recent News */}
          <section className="mb-16">
            <h3 className="text-2xl font-display font-bold mb-8">Recent News</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.filter(article => !article.featured).map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString()}
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/news/${article.id}`}>
                        Read Article
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Stay Updated</h2>
                <p className="text-lg text-muted-foreground">
                  Subscribe to our newsletter and never miss important school news and updates
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                  />
                  <Button size="lg" className="px-8">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Join 1000+ parents and students who stay informed about school activities
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Have a Story to Share?</h2>
            <p className="text-xl mb-8 text-white/90">
              We'd love to hear about your achievements, events, or experiences at King's Kids Schools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Submit a Story
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
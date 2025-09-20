import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Video, 
  Calendar, 
  Users, 
  Award, 
  BookOpen, 
  Music, 
  Trophy,
  Play,
  Download,
  ExternalLink,
  Image as ImageIcon,
  FileText
} from 'lucide-react';

const Media = () => {
  const mediaCategories = [
    {
      icon: Camera,
      title: "Photo Gallery",
      description: "Explore moments from school life, events, and achievements",
      count: "500+ Photos"
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Watch school events, performances, and educational content",
      count: "50+ Videos"
    },
    {
      icon: FileText,
      title: "News & Articles",
      description: "Stay updated with school news, announcements, and articles",
      count: "Latest Updates"
    },
    {
      icon: Trophy,
      title: "Achievements",
      description: "Celebrate student and school accomplishments",
      count: "Award Gallery"
    }
  ];

  const recentNews = [
    {
      title: "Annual Science Fair 2024 Winners Announced",
      date: "March 15, 2024",
      category: "Academic",
      excerpt: "Students showcase innovative projects in annual science competition with record participation.",
      image: "/lovable-uploads/gc5a0117e.jpg"
    },
    {
      title: "New Computer Lab Inaugurated",
      date: "March 10, 2024", 
      category: "Infrastructure",
      excerpt: "State-of-the-art computer laboratory equipped with latest technology for enhanced learning.",
      image: "/lovable-uploads/gc5a0121er.jpg"
    },
    {
      title: "Inter-School Sports Championship Victory",
      date: "March 5, 2024",
      category: "Sports",
      excerpt: "Krismore College emerges victorious in regional inter-school sports championship.",
      image: "/lovable-uploads/b221a2af-caae-41aa-a241-115d00a63444.png"
    },
    {
      title: "Cultural Week Celebrations",
      date: "February 28, 2024",
      category: "Cultural",
      excerpt: "Students showcase diverse talents during the annual cultural week celebrations.",
      image: "/lovable-uploads/dfbc2b6e-0cab-4685-a3de-68f248f3e165.png"
    }
  ];

  const featuredVideos = [
    {
      title: "Virtual School Tour 2024",
      duration: "8:45",
      thumbnail: "/lovable-uploads/school-building-hero.jpg",
      description: "Take a comprehensive tour of our beautiful campus and modern facilities"
    },
    {
      title: "Student Testimonials",
      duration: "5:30", 
      thumbnail: "/lovable-uploads/b4b12bb8-bed2-4ebc-931c-a2a962b55df7.png",
      description: "Hear from our students about their learning experience at Krismore College"
    },
    {
      title: "Annual Day Highlights",
      duration: "12:20",
      thumbnail: "/lovable-uploads/87ff614b-72c4-4a5b-8918-743060138383.png",
      description: "Memorable moments from our annual day celebration and performances"
    }
  ];

  const photoGalleries = [
    {
      title: "Graduation Ceremony 2024",
      count: "45 Photos",
      thumbnail: "/lovable-uploads/59b5ff11-5cd8-4812-902f-16387f07dfa3.png",
      category: "Events"
    },
    {
      title: "Sports Day Activities",
      count: "60 Photos",
      thumbnail: "/lovable-uploads/6f3faff4-396a-4ae0-83ca-482ebe95b218.png", 
      category: "Sports"
    },
    {
      title: "Science Exhibition",
      count: "35 Photos",
      thumbnail: "/lovable-uploads/gc5a0117e.jpg",
      category: "Academic"
    },
    {
      title: "Arts & Crafts Fair",
      count: "40 Photos",
      thumbnail: "/lovable-uploads/gc5a0121er.jpg",
      category: "Cultural"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/school-building-hero.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-secondary/80" />
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Media Center</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Explore our rich collection of photos, videos, news, and memorable moments from school life
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Media Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Explore Our Media</Badge>
            <h2 className="text-4xl font-bold mb-6">Media Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover different types of content showcasing our vibrant school community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaCategories.map((category, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-3">{category.description}</p>
                <Badge variant="outline">{category.count}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Stay Updated</Badge>
            <h2 className="text-4xl font-bold mb-6">Latest News & Updates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Keep up with the latest happenings, achievements, and announcements from our school
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentNews.map((news, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url('${news.image}')` }} />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{news.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {news.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <div className="flex items-center text-primary font-medium cursor-pointer hover:underline">
                    Read More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Video Content</Badge>
            <h2 className="text-4xl font-bold mb-6">Featured Videos</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch our featured video content showcasing school life and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-video bg-cover bg-center group cursor-pointer" style={{ backgroundImage: `url('${video.thumbnail}')` }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Galleries */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Photo Gallery</Badge>
            <h2 className="text-4xl font-bold mb-6">Photo Collections</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse through our photo galleries capturing memorable moments and events
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photoGalleries.map((gallery, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-cover bg-center relative group" style={{ backgroundImage: `url('${gallery.thumbnail}')` }}>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black/70 text-white">{gallery.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-1">{gallery.title}</h3>
                  <p className="text-muted-foreground text-sm">{gallery.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, updates, and media content directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 text-sm font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
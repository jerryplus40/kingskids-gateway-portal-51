import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  DollarSign, 
  Calendar, 
  FileText,
  HandHeart,
  Target,
  TrendingUp,
  Home,
  Award,
  Globe,
  PieChart
} from "lucide-react";

const FoundationDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-accent">Child & Youth Foundation</h1>
                  <p className="text-sm text-muted-foreground">Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline">Non-Profit</Badge>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/"><Home className="h-4 w-4 mr-2" />Home</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-foreground">Foundation Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Supporting underprivileged children's education and youth development
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Beneficiaries</CardTitle>
              <Users className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">1,247</div>
              <p className="text-xs text-muted-foreground">Children supported</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scholarships</CardTitle>
              <Award className="h-4 w-4 text-school-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-blue">189</div>
              <p className="text-xs text-muted-foreground">Active scholarships</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Donations</CardTitle>
              <DollarSign className="h-4 w-4 text-school-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-green">₦45.2M</div>
              <p className="text-xs text-muted-foreground">This year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Volunteers</CardTitle>
              <HandHeart className="h-4 w-4 text-school-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-orange">156</div>
              <p className="text-xs text-muted-foreground">Active volunteers</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Projects & Donations */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Foundation Projects & Initiatives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2 text-accent" />
                  Foundation Projects & Initiatives
                </CardTitle>
                <CardDescription>
                  Active programs and community outreach initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="w-full justify-start" variant="outline">
                      <Target className="h-4 w-4 mr-2" />
                      View All Projects
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Globe className="h-4 w-4 mr-2" />
                      Community Outreach
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Active Projects</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">School Feeding Program</p>
                          <p className="text-xs text-muted-foreground">850 children • 12 schools</p>
                        </div>
                        <Badge className="bg-school-green text-white">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Scholarship Initiative</p>
                          <p className="text-xs text-muted-foreground">189 students • All levels</p>
                        </div>
                        <Badge className="bg-school-blue text-white">Ongoing</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Digital Literacy Program</p>
                          <p className="text-xs text-muted-foreground">320 youth • 6 centers</p>
                        </div>
                        <Badge className="bg-accent text-white">Expanding</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Skill Development Centers</p>
                          <p className="text-xs text-muted-foreground">150 participants • 3 locations</p>
                        </div>
                        <Badge variant="secondary">Planning</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Online Donation & Sponsorship Portal */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-school-green" />
                  Online Donation & Sponsorship Portal
                </CardTitle>
                <CardDescription>
                  Donation management and sponsorship programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button variant="outline" size="sm" className="bg-accent text-white hover:bg-accent/90">
                      Make Donation
                    </Button>
                    <Button variant="outline" size="sm">
                      Sponsor a Child
                    </Button>
                    <Button variant="outline" size="sm">
                      Monthly Giving
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Recent Donations</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Anonymous Donor</p>
                          <p className="text-xs text-muted-foreground">General Fund</p>
                        </div>
                        <span className="font-bold text-school-green">₦50,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Corporate Partner XYZ</p>
                          <p className="text-xs text-muted-foreground">Scholarship Fund</p>
                        </div>
                        <span className="font-bold text-school-green">₦500,000</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Alumni Association</p>
                          <p className="text-xs text-muted-foreground">Infrastructure</p>
                        </div>
                        <span className="font-bold text-school-green">₦200,000</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t">
                      <div className="text-center">
                        <p className="text-lg font-bold text-primary">₦2,850,000</p>
                        <p className="text-xs text-muted-foreground">Total raised this month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Event Announcements & Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-school-blue" />
                  Event Announcements & Reports
                </CardTitle>
                <CardDescription>
                  Upcoming events and program reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline">Create Event</Button>
                    <Button variant="outline">View Reports</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Upcoming Events</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Annual Fundraising Gala</p>
                          <p className="text-xs text-muted-foreground">December 20, 2024</p>
                        </div>
                        <Badge className="bg-accent text-white">Featured</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Volunteer Appreciation Day</p>
                          <p className="text-xs text-muted-foreground">January 15, 2025</p>
                        </div>
                        <Badge variant="outline">Upcoming</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Scholarship Award Ceremony</p>
                          <p className="text-xs text-muted-foreground">February 8, 2025</p>
                        </div>
                        <Badge variant="outline">Planning</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Transparency Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-school-orange" />
                  Financial Transparency Reports
                </CardTitle>
                <CardDescription>
                  Fund utilization and impact reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button variant="outline" size="sm">Monthly Report</Button>
                    <Button variant="outline" size="sm">Annual Report</Button>
                    <Button variant="outline" size="sm">Impact Report</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Fund Allocation (2024)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Educational Programs</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Feeding Programs</span>
                        <span className="font-medium">20%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Infrastructure</span>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Administrative</span>
                        <span className="font-medium">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Volunteers & Impact */}
          <div className="space-y-6">
            
            {/* Volunteer Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HandHeart className="h-5 w-5 mr-2 text-school-orange" />
                  Volunteer Registration
                </CardTitle>
                <CardDescription>
                  Volunteer management and coordination
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full bg-school-orange hover:bg-school-orange/90 text-white">
                    Register as Volunteer
                  </Button>
                  <Button className="w-full" variant="outline">
                    Volunteer Opportunities
                  </Button>
                  <Button className="w-full" variant="outline">
                    Volunteer Directory
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Active Volunteers</h4>
                    <div className="space-y-2">
                      <div className="text-xs">
                        <p className="font-medium">Teaching Support</p>
                        <p className="text-muted-foreground">45 volunteers</p>
                      </div>
                      <div className="text-xs">
                        <p className="font-medium">Mentorship Program</p>
                        <p className="text-muted-foreground">32 volunteers</p>
                      </div>
                      <div className="text-xs">
                        <p className="font-medium">Event Organization</p>
                        <p className="text-muted-foreground">28 volunteers</p>
                      </div>
                      <div className="text-xs">
                        <p className="font-medium">Administrative Support</p>
                        <p className="text-muted-foreground">51 volunteers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Impact Metrics
                </CardTitle>
                <CardDescription>
                  Program effectiveness and outcomes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-3">2024 Achievements</h4>
                    <div className="space-y-3">
                      <div className="text-center">
                        <p className="text-xl font-bold text-accent">98%</p>
                        <p className="text-xs text-muted-foreground">Scholarship retention rate</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-school-green">1,247</p>
                        <p className="text-xs text-muted-foreground">Children reached</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-school-blue">85%</p>
                        <p className="text-xs text-muted-foreground">Skill program completion</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold text-school-orange">156</p>
                        <p className="text-xs text-muted-foreground">Active volunteers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-accent" />
                  Success Stories
                </CardTitle>
                <CardDescription>
                  Testimonials and beneficiary stories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    View All Stories
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Featured Story</h4>
                    <div className="text-xs space-y-2">
                      <p className="font-medium">"From Street to Success"</p>
                      <p className="text-muted-foreground">
                        Kemi's journey from a struggling street child to university graduate 
                        through our scholarship program.
                      </p>
                      <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" size="sm" variant="outline">
                    Emergency Fund
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Partner Organizations
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Grant Applications
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Newsletter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationDashboard;
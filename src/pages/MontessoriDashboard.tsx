import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Users, 
  Calendar, 
  BookOpen, 
  ClipboardCheck, 
  MessageSquare,
  User,
  PlusCircle,
  GraduationCap,
  Home
} from "lucide-react";

const MontessoriDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-school-blue rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-school-blue">King's Kids Montessori</h1>
                  <p className="text-sm text-muted-foreground">Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline">Ages 2-6</Badge>
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
          <h2 className="text-3xl font-bold mb-2 text-foreground">Montessori School Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Child-centered learning environment for ages 2-6 years
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-school-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-blue">145</div>
              <p className="text-xs text-muted-foreground">Active enrollment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes</CardTitle>
              <BookOpen className="h-4 w-4 text-school-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-green">8</div>
              <p className="text-xs text-muted-foreground">Mixed-age groups</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Teachers</CardTitle>
              <GraduationCap className="h-4 w-4 text-school-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-orange">16</div>
              <p className="text-xs text-muted-foreground">Certified Montessori</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <ClipboardCheck className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">96%</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Student Management */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Student Registration & Admissions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-school-blue" />
                  Student Registration & Admissions
                </CardTitle>
                <CardDescription>
                  Manage student enrollment and admission processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="w-full justify-start" variant="outline">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Student Registration
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      View All Students
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-2">Recent Admissions</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Emma Johnson (Age 3)</span>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Michael Brown (Age 4)</span>
                        <Badge className="bg-school-green text-white">Approved</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Sophia Davis (Age 2)</span>
                        <Badge variant="secondary">Under Review</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Class Timetables & Learning Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-school-green" />
                  Class Timetables & Learning Resources
                </CardTitle>
                <CardDescription>
                  Schedule management and educational materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button variant="outline" size="sm">View Schedules</Button>
                    <Button variant="outline" size="sm">Learning Materials</Button>
                    <Button variant="outline" size="sm">Activity Planning</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Today's Activities</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Practical Life Activities</p>
                          <p className="text-xs text-muted-foreground">9:00 AM - 10:30 AM</p>
                        </div>
                        <Badge variant="outline">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Sensorial Materials</p>
                          <p className="text-xs text-muted-foreground">10:45 AM - 11:30 AM</p>
                        </div>
                        <Badge variant="secondary">Upcoming</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Language Development</p>
                          <p className="text-xs text-muted-foreground">1:00 PM - 2:00 PM</p>
                        </div>
                        <Badge variant="secondary">Upcoming</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ClipboardCheck className="h-5 w-5 mr-2 text-school-orange" />
                  Attendance Tracking
                </CardTitle>
                <CardDescription>
                  Monitor daily attendance and participation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline">Mark Attendance</Button>
                    <Button variant="outline">View Reports</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Attendance Summary</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-school-green">138</p>
                        <p className="text-xs text-muted-foreground">Present Today</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-destructive">7</p>
                        <p className="text-xs text-muted-foreground">Absent</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-accent">96%</p>
                        <p className="text-xs text-muted-foreground">Attendance Rate</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Communication & Reports */}
          <div className="space-y-6">
            
            {/* Performance Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-accent" />
                  Performance Reports
                </CardTitle>
                <CardDescription>
                  Continuous assessment and development tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Generate Reports
                  </Button>
                  <Button className="w-full" variant="outline">
                    Assessment Tools
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Recent Assessments</h4>
                    <div className="space-y-2">
                      <div className="text-xs">
                        <p className="font-medium">Practical Life Skills</p>
                        <p className="text-muted-foreground">15 students assessed</p>
                      </div>
                      <div className="text-xs">
                        <p className="font-medium">Language Development</p>
                        <p className="text-muted-foreground">22 students assessed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parent-Teacher Communication */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Parent Communication
                </CardTitle>
                <CardDescription>
                  Connect with parents and guardians
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Send Messages
                  </Button>
                  <Button className="w-full" variant="outline">
                    Schedule Meetings
                  </Button>
                  <Button className="w-full" variant="outline">
                    View Conversations
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Recent Messages</h4>
                    <div className="space-y-2">
                      <div className="text-xs">
                        <p className="font-medium">Mrs. Johnson</p>
                        <p className="text-muted-foreground">Emma's progress update</p>
                      </div>
                      <div className="text-xs">
                        <p className="font-medium">Mr. Brown</p>
                        <p className="text-muted-foreground">Parent-teacher meeting</p>
                      </div>
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
                    Emergency Contacts
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Medical Records
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Daily Reports
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Meal Planning
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

export default MontessoriDashboard;
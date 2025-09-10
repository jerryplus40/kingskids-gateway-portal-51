import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Users, 
  Calendar, 
  ClipboardCheck, 
  MessageSquare,
  CreditCard,
  User,
  PlusCircle,
  Home,
  Trophy,
  Apple,
  FileText
} from "lucide-react";

const BasicStudiesDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-school-green rounded-full flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-school-green">King's Kids Basic Studies</h1>
                  <p className="text-sm text-muted-foreground">Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline">Primary 1-6</Badge>
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
          <h2 className="text-3xl font-bold mb-2 text-foreground">Basic Studies Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Foundation education for Primary 1-6 students
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-school-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-green">324</div>
              <p className="text-xs text-muted-foreground">Primary students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes</CardTitle>
              <BookOpen className="h-4 w-4 text-school-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-blue">12</div>
              <p className="text-xs text-muted-foreground">Active classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Teachers</CardTitle>
              <Trophy className="h-4 w-4 text-school-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-orange">24</div>
              <p className="text-xs text-muted-foreground">Qualified teachers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <ClipboardCheck className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">95%</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Academic Management */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Admission Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-school-green" />
                  Admission Management
                </CardTitle>
                <CardDescription>
                  Student enrollment and registration processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="w-full justify-start" variant="outline">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Admission
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Student Database
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-2">Recent Admissions</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Adunni Okafor (Primary 3)</span>
                        <Badge className="bg-school-green text-white">Admitted</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Kemi Adebayo (Primary 1)</span>
                        <Badge variant="secondary">Processing</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Chidi Nwankwo (Primary 4)</span>
                        <Badge variant="secondary">Under Review</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Class Scheduling & Resource Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-school-blue" />
                  Class Scheduling & Resource Sharing
                </CardTitle>
                <CardDescription>
                  Timetable management and educational resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button variant="outline" size="sm">View Timetables</Button>
                    <Button variant="outline" size="sm">Learning Resources</Button>
                    <Button variant="outline" size="sm">Lesson Plans</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Today's Classes</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Mathematics (Primary 4A)</p>
                          <p className="text-xs text-muted-foreground">9:00 AM - 10:00 AM</p>
                        </div>
                        <Badge variant="outline">Room 204</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">English Language (Primary 5B)</p>
                          <p className="text-xs text-muted-foreground">10:30 AM - 11:30 AM</p>
                        </div>
                        <Badge variant="outline">Room 305</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Science (Primary 6A)</p>
                          <p className="text-xs text-muted-foreground">2:00 PM - 3:00 PM</p>
                        </div>
                        <Badge variant="outline">Lab 1</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continuous Assessment & Grading */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ClipboardCheck className="h-5 w-5 mr-2 text-school-orange" />
                  Continuous Assessment & Grading
                </CardTitle>
                <CardDescription>
                  Student evaluation and progress tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline">Grade Assignments</Button>
                    <Button variant="outline">Assessment Reports</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Assessment Summary</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Math Test (Primary 4)</p>
                          <p className="text-xs text-muted-foreground">Average: 78%</p>
                        </div>
                        <Badge className="bg-school-green text-white">Completed</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">English Quiz (Primary 3)</p>
                          <p className="text-xs text-muted-foreground">Average: 85%</p>
                        </div>
                        <Badge className="bg-school-green text-white">Completed</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Science Project (Primary 5)</p>
                          <p className="text-xs text-muted-foreground">Due: Dec 20</p>
                        </div>
                        <Badge variant="secondary">In Progress</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Homework/Assignment Uploads */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-accent" />
                  Homework/Assignment Uploads
                </CardTitle>
                <CardDescription>
                  Digital assignment submission and tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline">Upload Assignment</Button>
                    <Button variant="outline">View Submissions</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Recent Assignments</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Math Worksheets (Primary 2)</span>
                        <Badge className="bg-accent text-accent-foreground">85% Submitted</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Reading Comprehension (Primary 4)</span>
                        <Badge className="bg-accent text-accent-foreground">92% Submitted</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Science Drawings (Primary 1)</span>
                        <Badge variant="secondary">70% Submitted</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Communication & Payment */}
          <div className="space-y-6">
            
            {/* Parent Engagement Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Parent Engagement Tools
                </CardTitle>
                <CardDescription>
                  Communication and collaboration with parents
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
                    Progress Reports
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Recent Communications</h4>
                    <div className="space-y-2">
                      <div className="text-xs">
                        <p className="font-medium">Mrs. Adebayo</p>
                        <p className="text-muted-foreground">Kemi's progress update</p>
                      </div>
                      <div className="text-xs">
                        <p className="font-medium">Mr. Okafor</p>
                        <p className="text-muted-foreground">Parent-teacher meeting</p>
                      </div>
                      <div className="text-xs">
                        <p className="font-medium">Mrs. Nwankwo</p>
                        <p className="text-muted-foreground">Homework assistance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fee Payment & Receipts Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-school-green" />
                  Fee Payment & Receipts
                </CardTitle>
                <CardDescription>
                  Financial transactions and payment tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Process Payment
                  </Button>
                  <Button className="w-full" variant="outline">
                    Generate Receipt
                  </Button>
                  <Button className="w-full" variant="outline">
                    Payment History
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Payment Status</h4>
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-xs text-center">
                        <div>
                          <p className="text-lg font-bold text-school-green">289</p>
                          <p className="text-muted-foreground">Paid</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-destructive">35</p>
                          <p className="text-muted-foreground">Pending</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold text-primary">₦89,245,000</p>
                        <p className="text-xs text-muted-foreground">Total collected this term</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Extracurricular Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-school-orange" />
                  Extracurricular Activities
                </CardTitle>
                <CardDescription>
                  Sports, arts, and other activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">Sports</Button>
                    <Button variant="outline" size="sm">Music</Button>
                    <Button variant="outline" size="sm">Art</Button>
                    <Button variant="outline" size="sm">Drama</Button>
                  </div>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Active Programs</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Football Club</span>
                        <span className="font-medium">42 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Music Choir</span>
                        <span className="font-medium">28 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Art & Crafts</span>
                        <span className="font-medium">35 students</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Drama Club</span>
                        <span className="font-medium">19 students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* School Meals & Nutrition */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Apple className="h-5 w-5 mr-2 text-accent" />
                  School Meals & Nutrition
                </CardTitle>
                <CardDescription>
                  Meal planning and nutrition tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" size="sm" variant="outline">
                    Weekly Menu
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Dietary Requirements
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Meal Attendance
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Today's Menu</h4>
                    <div className="space-y-1 text-xs">
                      <p><span className="font-medium">Breakfast:</span> Porridge & Fruit</p>
                      <p><span className="font-medium">Lunch:</span> Rice & Chicken</p>
                      <p><span className="font-medium">Snack:</span> Biscuits & Juice</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicStudiesDashboard;
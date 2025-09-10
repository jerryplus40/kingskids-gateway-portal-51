import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Calendar, 
  BookOpen, 
  ClipboardCheck, 
  FileText,
  User,
  PlusCircle,
  Library,
  Award,
  Home,
  Briefcase,
  FlaskConical
} from "lucide-react";

const HighSchoolDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-school-orange rounded-full flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-school-orange">King's Kids High School</h1>
                  <p className="text-sm text-muted-foreground">Dashboard</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline">JSS 1 - SS 3</Badge>
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
          <h2 className="text-3xl font-bold mb-2 text-foreground">High School Dashboard</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive secondary education for JSS 1 - SS 3 students
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <Users className="h-4 w-4 text-school-orange" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-orange">487</div>
              <p className="text-xs text-muted-foreground">JSS & SS students</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Classes</CardTitle>
              <BookOpen className="h-4 w-4 text-school-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-blue">18</div>
              <p className="text-xs text-muted-foreground">Active classes</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">WAEC Rate</CardTitle>
              <Award className="h-4 w-4 text-school-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-school-green">94%</div>
              <p className="text-xs text-muted-foreground">Pass rate 2024</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance</CardTitle>
              <ClipboardCheck className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">92%</div>
              <p className="text-xs text-muted-foreground">This week</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Academic Management */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Online Admission & Registration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2 text-school-orange" />
                  Online Admission & Registration
                </CardTitle>
                <CardDescription>
                  Manage student admissions and enrollment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button className="w-full justify-start" variant="outline">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      New Application
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="h-4 w-4 mr-2" />
                      Student Records
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-2">Recent Applications</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>David Okafor (JSS 1)</span>
                        <Badge className="bg-school-green text-white">Approved</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>Sarah Ahmed (SS 1)</span>
                        <Badge variant="secondary">Under Review</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>John Smith (JSS 2)</span>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subject/Course Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-school-blue" />
                  Subject/Course Management
                </CardTitle>
                <CardDescription>
                  Curriculum planning and subject administration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button variant="outline" size="sm">Core Subjects</Button>
                    <Button variant="outline" size="sm">Electives</Button>
                    <Button variant="outline" size="sm">Timetables</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Active Subjects</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Mathematics</span>
                        <Badge variant="outline">Core</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>English Language</span>
                        <Badge variant="outline">Core</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Physics</span>
                        <Badge className="bg-school-blue text-white">Science</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Chemistry</span>
                        <Badge className="bg-school-blue text-white">Science</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Biology</span>
                        <Badge className="bg-school-blue text-white">Science</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Literature</span>
                        <Badge className="bg-school-green text-white">Arts</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Assignments, Projects & Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-school-green" />
                  Assignments, Projects & Results
                </CardTitle>
                <CardDescription>
                  Academic work and assessment management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline">Upload Assignment</Button>
                    <Button variant="outline">View Results</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Recent Submissions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Mathematics Assignment 5</p>
                          <p className="text-xs text-muted-foreground">Due: Dec 15, 2024</p>
                        </div>
                        <Badge className="bg-accent text-accent-foreground">75% Submitted</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">Chemistry Lab Report</p>
                          <p className="text-xs text-muted-foreground">Due: Dec 18, 2024</p>
                        </div>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-sm">English Literature Essay</p>
                          <p className="text-xs text-muted-foreground">Due: Dec 20, 2024</p>
                        </div>
                        <Badge variant="secondary">Not Started</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Examination Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ClipboardCheck className="h-5 w-5 mr-2 text-accent" />
                  Examination Management & Report Cards
                </CardTitle>
                <CardDescription>
                  Exam scheduling and academic reporting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-3">
                    <Button variant="outline" size="sm">Schedule Exams</Button>
                    <Button variant="outline" size="sm">Grade Papers</Button>
                    <Button variant="outline" size="sm">Generate Reports</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4 bg-muted/20">
                    <h4 className="font-medium mb-3">Upcoming Examinations</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>First Term Exams</span>
                        <Badge variant="outline">Dec 10-20, 2024</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>WAEC Mock Exams</span>
                        <Badge variant="outline">Jan 15-30, 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span>NECO Preparation</span>
                        <Badge variant="outline">Feb 2025</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Additional Features */}
          <div className="space-y-6">
            
            {/* Student Behavior & Discipline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Behavior & Discipline
                </CardTitle>
                <CardDescription>
                  Student conduct and disciplinary records
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Record Incident
                  </Button>
                  <Button className="w-full" variant="outline">
                    Merit Awards
                  </Button>
                  <Button className="w-full" variant="outline">
                    Behavior Reports
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">This Week</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs text-center">
                      <div>
                        <p className="text-lg font-bold text-school-green">23</p>
                        <p className="text-muted-foreground">Merit Points</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-destructive">3</p>
                        <p className="text-muted-foreground">Incidents</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Library & Resource Center */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Library className="h-5 w-5 mr-2 text-school-blue" />
                  Library & Resources
                </CardTitle>
                <CardDescription>
                  Digital and physical learning resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button className="w-full" variant="outline">
                    Book Catalog
                  </Button>
                  <Button className="w-full" variant="outline">
                    Digital Resources
                  </Button>
                  <Button className="w-full" variant="outline">
                    Research Tools
                  </Button>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Library Stats</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Books Available</span>
                        <span className="font-medium">2,847</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Digital Resources</span>
                        <span className="font-medium">1,234</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Borrowers</span>
                        <span className="font-medium">189</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Science Laboratories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FlaskConical className="h-5 w-5 mr-2 text-school-green" />
                  Science Laboratories
                </CardTitle>
                <CardDescription>
                  Lab scheduling and equipment management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" size="sm">Physics</Button>
                    <Button variant="outline" size="sm">Chemistry</Button>
                    <Button variant="outline" size="sm">Biology</Button>
                  </div>
                  
                  <div className="border rounded-lg p-3 bg-muted/20">
                    <h4 className="font-medium text-sm mb-2">Lab Schedule</h4>
                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="font-medium">Chemistry Lab A</p>
                        <p className="text-muted-foreground">SS2 - 10:00 AM</p>
                      </div>
                      <div>
                        <p className="font-medium">Physics Lab</p>
                        <p className="text-muted-foreground">SS3 - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Guidance & Alumni */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-2 text-accent" />
                  Career Guidance & Alumni
                </CardTitle>
                <CardDescription>
                  Future planning and alumni network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" size="sm" variant="outline">
                    Career Counseling
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    University Prep
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Alumni Network
                  </Button>
                  <Button className="w-full" size="sm" variant="outline">
                    Scholarship Info
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

export default HighSchoolDashboard;
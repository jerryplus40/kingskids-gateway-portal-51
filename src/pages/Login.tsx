import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, User, Lock, Loader2, UserPlus } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { UserRole } from "@/lib/supabase";
import { SignUpDialog } from "@/components/auth/SignUpDialog";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("student");
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await signIn(email, password);

      if (error) {
        toast.error(
          error.message === "Invalid login credentials"
            ? "That email and password don't match an account. Check the details, or ask the school office to create your account."
            : error.message
        );
        return;
      }

      const { data: { user } } = await supabase.auth.getUser();
      let actualRole: UserRole | null = null;

      if (user) {
        const { data } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .limit(1)
          .maybeSingle();
        actualRole = ((data as { role: UserRole } | null)?.role) ?? null;
      }

      toast.success(`Welcome back${actualRole ? `, ${ROLE_LABELS[actualRole]}` : ""}!`);
      navigate(actualRole ? ROLE_HOME[actualRole] : "/");
    } catch (error: any) {
      toast.error("An unexpected error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };


  const roles: Array<{ value: UserRole; label: string; color: string }> = [
    { value: "student", label: "Student", color: "bg-school-blue" },
    { value: "parent", label: "Parent", color: "bg-school-green" },
    { value: "teacher", label: "Teacher", color: "bg-school-orange" },
    { value: "admin", label: "Administrator", color: "bg-primary" },
    { value: "finance", label: "Finance Officer", color: "bg-accent" },
    { value: "foundation", label: "Foundation Manager", color: "bg-destructive" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-school-green/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-foreground">King's Kids Schools</h1>
              <p className="text-sm text-muted-foreground">Portal Login</p>
            </div>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label>Select Your Role</Label>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((roleOption) => (
                    <Button
                      key={roleOption.value}
                      type="button"
                      variant={role === roleOption.value ? "default" : "outline"}
                      className={`justify-center py-3 px-4 text-sm transition-all cursor-pointer ${
                        role === roleOption.value 
                          ? "bg-primary text-primary-foreground shadow-md ring-2 ring-primary/20" 
                          : "hover:bg-primary/10 hover:border-primary hover:text-primary border-2"
                      }`}
                      onClick={() => {
                        setRole(roleOption.value);
                        console.log("Role selected:", roleOption.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setRole(roleOption.value);
                        }
                      }}
                      tabIndex={0}
                      aria-pressed={role === roleOption.value}
                      aria-label={`Select ${roleOption.label} role`}
                    >
                      {roleOption.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            {/* Additional Links */}
            <div className="mt-6 space-y-3">
              <div className="bg-muted/50 p-4 rounded-lg border text-xs text-muted-foreground">
                Use the email and password given to you by the school. Administrators can create
                accounts for teachers, students, parents and staff on the Portal Accounts page.
              </div>

              
              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot your password?
                </a>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    New to King's Kids?
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <SignUpDialog>
                  <Button variant="outline" size="sm" className="w-full">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign Up
                  </Button>
                </SignUpDialog>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Quick Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/montessori">Montessori</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/basicstudies">Basic Studies</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/highschool">High School</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/foundation">Foundation</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
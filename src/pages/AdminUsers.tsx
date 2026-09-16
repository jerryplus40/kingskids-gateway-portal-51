import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { Loader2, UserPlus, Copy, ShieldAlert } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ROLE_LABELS, UserRole } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface DirectoryRow {
  id: string;
  full_name: string | null;
  email: string | null;
  role?: UserRole;
}

const randomPassword = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  return Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

const AdminUsers = () => {
  const { user, role, loading } = useAuth();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(randomPassword());
  const [newRole, setNewRole] = useState<UserRole>("student");
  const [saving, setSaving] = useState(false);
  const [rows, setRows] = useState<DirectoryRow[]>([]);
  const [lastCreated, setLastCreated] = useState<{ email: string; password: string } | null>(null);

  const isAdmin = role === "admin";

  const loadDirectory = async () => {
    const [{ data: profiles }, { data: roles }] = await Promise.all([
      supabase.from("profiles").select("id, full_name, email").order("full_name"),
      supabase.from("user_roles").select("user_id, role"),
    ]);

    const roleMap = new Map((roles ?? []).map((r: any) => [r.user_id, r.role as UserRole]));
    setRows(((profiles ?? []) as DirectoryRow[]).map((p) => ({ ...p, role: roleMap.get(p.id) })));
  };

  useEffect(() => {
    if (!loading && !user) navigate("/login");
    if (isAdmin) loadDirectory();
  }, [loading, user, isAdmin]);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const { data, error } = await supabase.functions.invoke("admin-create-user", {
        body: { full_name: fullName, email, password, role: newRole },
      });

      const errorMessage = (data as any)?.error;
      if (error || errorMessage) {
        toast.error(errorMessage || error?.message || "Could not create the account");
        return;
      }

      toast.success(`${ROLE_LABELS[newRole]} account created for ${fullName}`);
      setLastCreated({ email, password });
      setFullName("");
      setEmail("");
      setPassword(randomPassword());
      loadDirectory();
    } finally {
      setSaving(false);
    }
  };

  const grouped = useMemo(() => {
    return rows.reduce<Record<string, DirectoryRow[]>>((acc, row) => {
      const key = row.role ?? "student";
      acc[key] = [...(acc[key] ?? []), row];
      return acc;
    }, {});
  }, [rows]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <ShieldAlert className="h-10 w-10 mx-auto text-destructive mb-2" />
            <CardTitle>Administrators only</CardTitle>
            <CardDescription>
              This page is for school administrators. Sign in with an administrator account to add
              teachers and students.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3 justify-center">
            <Button asChild><Link to="/login">Go to login</Link></Button>
            <Button variant="outline" asChild><Link to="/">Back home</Link></Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-school-green/5 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Portal Accounts</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Create logins for teachers, students, parents and staff, then share the details with them.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <UserPlus className="h-5 w-5 text-primary" /> Add a new person
            </CardTitle>
            <CardDescription>The account works immediately — no email confirmation needed.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="e.g. Grace Adeyemi" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newEmail">Email (used to sign in)</Label>
                <Input id="newEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="grace@kingskids.edu" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">Temporary password</Label>
                <div className="flex gap-2">
                  <Input id="newPassword" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required />
                  <Button type="button" variant="outline" onClick={() => setPassword(randomPassword())}>New</Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <Select value={newRole} onValueChange={(v: UserRole) => setNewRole(v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(Object.keys(ROLE_LABELS) as UserRole[]).map((r) => (
                      <SelectItem key={r} value={r}>{ROLE_LABELS[r]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full md:w-auto" disabled={saving}>
                  {saving ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" />Creating…</>) : "Create account"}
                </Button>
              </div>
            </form>

            {lastCreated && (
              <div className="mt-4 rounded-xl border bg-muted/40 p-4 text-sm space-y-2">
                <p className="font-semibold">Login details to share</p>
                <p>Email: <strong>{lastCreated.email}</strong></p>
                <p>Password: <strong>{lastCreated.password}</strong></p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard.writeText(`Email: ${lastCreated.email}\nPassword: ${lastCreated.password}`);
                    toast.success("Login details copied");
                  }}
                >
                  <Copy className="h-4 w-4 mr-2" /> Copy details
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Existing accounts ({rows.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {rows.length === 0 && <p className="text-sm text-muted-foreground">No accounts yet.</p>}
            {Object.entries(grouped).map(([groupRole, people]) => (
              <div key={groupRole} className="space-y-2">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                  {ROLE_LABELS[groupRole as UserRole] ?? groupRole}
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {people.map((p) => (
                    <div key={p.id} className="flex items-center justify-between gap-3 rounded-lg border p-3">
                      <div className="min-w-0">
                        <p className="font-medium truncate">{p.full_name || "Unnamed"}</p>
                        <p className="text-xs text-muted-foreground truncate">{p.email}</p>
                      </div>
                      <Badge variant="secondary">{ROLE_LABELS[groupRole as UserRole] ?? groupRole}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminUsers;

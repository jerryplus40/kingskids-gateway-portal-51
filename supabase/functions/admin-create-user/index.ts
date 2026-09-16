import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ALLOWED_ROLES = ["student", "parent", "teacher", "admin", "finance", "foundation"];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader.startsWith("Bearer ")) {
      return json({ error: "Not signed in" }, 401);
    }

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Validate the caller and confirm they are an admin
    const { data: caller, error: callerError } = await admin.auth.getUser(
      authHeader.replace("Bearer ", ""),
    );
    if (callerError || !caller.user) {
      return json({ error: "Invalid session" }, 401);
    }

    const { data: adminRole } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", caller.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!adminRole) {
      return json({ error: "Only administrators can create accounts" }, 403);
    }

    const body = await req.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const fullName = String(body.full_name ?? "").trim();
    const role = String(body.role ?? "student");

    if (!email || !password || password.length < 6 || !fullName) {
      return json({ error: "Name, email and a password of at least 6 characters are required" }, 400);
    }
    if (!ALLOWED_ROLES.includes(role)) {
      return json({ error: "Unknown role" }, 400);
    }

    const { data: created, error: createError } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: fullName, role },
    });

    if (createError) {
      return json({ error: createError.message }, 400);
    }

    return json({ user_id: created.user?.id, email, role, full_name: fullName });
  } catch (error) {
    console.error("admin-create-user failed", error);
    return json({ error: "Unexpected error creating the account" }, 500);
  }
});

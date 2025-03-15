
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export function AuthButtons() {
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span>Welcome, {user.name}!</span>
        <Button variant="outline" onClick={() => window.location.href = "/"}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => {
        const script = document.createElement("script");
        script.src = "https://auth.util.repl.co/script.js";
        script.setAttribute("authed", "window.location.reload()");
        document.body.appendChild(script);
      }}
    >
      Login with Replit
    </Button>
  );
}

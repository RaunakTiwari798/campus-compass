import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const cols = [
    {
      title: "Product",
      items: [
        { to: "/chat", label: "AI Chat" },
        { to: "/colleges", label: "Colleges" },
        { to: "/compare", label: "Compare" },
        { to: "/future-colleges", label: "Future AI" },
      ],
    },
    {
      title: "Community",
      items: [
        { to: "/reviews", label: "Student Reviews" },
        { to: "/mentors", label: "Mentor Marketplace" },
        { to: "/dashboard", label: "Dashboard" },
      ],
    },
    {
      title: "Company",
      items: [
        { to: "/pricing", label: "Pricing" },
        { to: "/contact", label: "Contact" },
      ],
    },
  ];
  return (
    <footer className="mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
              <Sparkles className="size-4 text-background" />
            </div>
            <span className="font-semibold tracking-tight text-lg">
              Campus<span className="text-gradient">AI</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-sm">
            India's AI-powered college discovery, counseling and community platform —
            built for the next generation of students.
          </p>
          <div className="flex gap-3 pt-2">
            <a className="size-9 grid place-items-center rounded-lg glass hover:text-primary" href="#"><Twitter className="size-4" /></a>
            <a className="size-9 grid place-items-center rounded-lg glass hover:text-primary" href="#"><Github className="size-4" /></a>
            <a className="size-9 grid place-items-center rounded-lg glass hover:text-primary" href="#"><Linkedin className="size-4" /></a>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {c.items.map((i) => (
                <li key={i.to}>
                  <Link to={i.to} className="hover:text-foreground transition-colors">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CampusAI. All rights reserved.
      </div>
    </footer>
  );
}
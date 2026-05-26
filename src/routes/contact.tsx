import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({ component: Contact });

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Let's <span className="text-gradient">talk.</span></h1>
          <p className="mt-3 text-muted-foreground">Questions, partnerships, or feature ideas — we read everything.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[{ icon: Mail, label: "Email", value: "hello@campusai.app" }, { icon: MessageCircle, label: "WhatsApp", value: "+91 98765 43210" }, { icon: MapPin, label: "Office", value: "HSR Layout, Bangalore" }].map((c) => (
            <div key={c.label} className="glass rounded-2xl p-5">
              <c.icon className="size-5 text-primary" />
              <div className="text-xs text-muted-foreground mt-3">{c.label}</div>
              <div className="font-medium mt-1">{c.value}</div>
            </div>
          ))}
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 glass-strong rounded-3xl p-6 md:p-8 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Your name" className="bg-white/5 border-white/10" />
            <Input placeholder="Email" type="email" className="bg-white/5 border-white/10" />
          </div>
          <Input placeholder="Subject" className="bg-white/5 border-white/10" />
          <Textarea placeholder="How can we help?" rows={5} className="bg-white/5 border-white/10" />
          <Button className="bg-gradient-to-r from-primary to-accent text-background">Send message</Button>
        </form>
      </section>
    </SiteLayout>
  );
}
import { motion } from "motion/react";
import { Brain, Map, FileText, Trophy, GitCompare, BellRing } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Branch Predictor", desc: "Tell us your interests — get the branch that fits your career path." },
  { icon: Map, title: "Career Roadmap", desc: "Personalized roadmap from 12th to dream job, generated in seconds." },
  { icon: FileText, title: "Resume Analyzer", desc: "Upload your resume, get scored against top placement profiles." },
  { icon: Trophy, title: "Scholarship Finder", desc: "AI scans every scholarship you qualify for — government & private." },
  { icon: GitCompare, title: "College Comparison", desc: "Compare any two colleges side-by-side across 25+ data points." },
  { icon: BellRing, title: "Application Tracker", desc: "Never miss a deadline. Live alerts for forms, exams and counselling." },
];

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex glass rounded-full px-3 py-1 text-xs text-muted-foreground">AI features</div>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
          Every tool a student needs, <span className="text-gradient">powered by AI</span>
        </h2>
      </div>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors group"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
              <f.icon className="size-5 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold tracking-tight">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
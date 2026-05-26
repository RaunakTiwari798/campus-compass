import { motion } from "motion/react";
import { MapPin, TrendingUp, IndianRupee, Star } from "lucide-react";
import type { College } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export function CollegeCard({ college, index = 0 }: { college: College; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={college.image}
          alt={college.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute top-3 left-3 glass-strong rounded-full px-2.5 py-1 text-xs flex items-center gap-1">
          <Star className="size-3 fill-primary text-primary" /> {college.rating}
        </div>
        <div className="absolute top-3 right-3 glass-strong rounded-full px-2.5 py-1 text-xs">
          <span className="text-gradient font-semibold">{college.match}%</span> match
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg tracking-tight">{college.name}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          <MapPin className="size-3" /> {college.city}, {college.state}
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
          <div>
            <div className="text-muted-foreground flex items-center gap-1"><TrendingUp className="size-3" /> Avg package</div>
            <div className="font-semibold text-base mt-0.5">₹{college.package} LPA</div>
          </div>
          <div>
            <div className="text-muted-foreground flex items-center gap-1"><IndianRupee className="size-3" /> Total fees</div>
            <div className="font-semibold text-base mt-0.5">₹{college.fees}L</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
            <span>Admission probability</span>
            <span className="text-foreground font-medium">{college.probability}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${college.probability}%` }}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {college.tags.map((t) => (
            <Badge key={t} variant="secondary" className="bg-white/5 text-muted-foreground border-white/5 font-normal">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
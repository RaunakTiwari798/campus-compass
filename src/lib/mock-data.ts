export type College = {
  id: string;
  name: string;
  city: string;
  state: string;
  branch: string[];
  fees: number; // lakhs total
  package: number; // avg LPA
  highest: number; // LPA
  rating: number;
  match: number; // AI compatibility 0-100
  probability: number; // admission 0-100
  tags: string[];
  image: string;
};

export const colleges: College[] = [
  {
    id: "iitb",
    name: "IIT Bombay",
    city: "Mumbai", state: "Maharashtra",
    branch: ["CSE", "AI", "ECE", "Mech"],
    fees: 9.5, package: 23.5, highest: 1.65 * 100,
    rating: 4.9, match: 96, probability: 12,
    tags: ["Tier 1", "Research", "Coding Culture"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80",
  },
  {
    id: "bits",
    name: "BITS Pilani",
    city: "Pilani", state: "Rajasthan",
    branch: ["CSE", "ECE", "EEE"],
    fees: 18, package: 18.2, highest: 75,
    rating: 4.7, match: 91, probability: 34,
    tags: ["Private", "Flexible Curriculum"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=80",
  },
  {
    id: "iiitb",
    name: "IIIT Bangalore",
    city: "Bangalore", state: "Karnataka",
    branch: ["CSE", "AI", "Data Science"],
    fees: 12, package: 21, highest: 65,
    rating: 4.6, match: 89, probability: 28,
    tags: ["AI Focus", "Startup Hub"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
  },
  {
    id: "vit",
    name: "VIT Vellore",
    city: "Vellore", state: "Tamil Nadu",
    branch: ["CSE", "AI", "ECE", "Mech", "Civil"],
    fees: 8.5, package: 9.2, highest: 41,
    rating: 4.4, match: 84, probability: 72,
    tags: ["Large Campus", "Placements"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900&q=80",
  },
  {
    id: "manipal",
    name: "Manipal Institute",
    city: "Manipal", state: "Karnataka",
    branch: ["CSE", "Mech", "Biotech"],
    fees: 16, package: 10.5, highest: 39,
    rating: 4.3, match: 80, probability: 65,
    tags: ["Hostel Life", "Diverse"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80",
  },
  {
    id: "iiith",
    name: "IIIT Hyderabad",
    city: "Hyderabad", state: "Telangana",
    branch: ["CSE", "AI", "ECE"],
    fees: 14, package: 28, highest: 1.2 * 100,
    rating: 4.8, match: 93, probability: 18,
    tags: ["Research", "Top Coding"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=80",
  },
];

export type FutureCollege = {
  id: string;
  name: string;
  city: string;
  focus: string;
  growth: number;
  startup: number;
  coding: number;
  partners: string[];
  blurb: string;
};

export const futureColleges: FutureCollege[] = [
  {
    id: "scaler",
    name: "Scaler School of Technology",
    city: "Bangalore",
    focus: "Applied AI · Systems",
    growth: 94, startup: 88, coding: 96,
    partners: ["Google", "Meta", "Stripe"],
    blurb: "Industry-led 4-year program with deep AI specialization and live projects.",
  },
  {
    id: "masai",
    name: "Masai School (Degree)",
    city: "Bangalore",
    focus: "Full-stack · GenAI",
    growth: 86, startup: 78, coding: 92,
    partners: ["AWS", "OpenAI", "Razorpay"],
    blurb: "Outcome-based learning with pay-after-placement model and GenAI tracks.",
  },
  {
    id: "newton",
    name: "Newton School of Technology",
    city: "Pune",
    focus: "AI · Product Eng",
    growth: 89, startup: 82, coding: 90,
    partners: ["Flipkart", "Swiggy", "Zomato"],
    blurb: "UGC-recognised BTech in CS & AI with global faculty and startup grants.",
  },
  {
    id: "plaksha",
    name: "Plaksha University",
    city: "Mohali",
    focus: "Interdisciplinary AI",
    growth: 91, startup: 85, coding: 87,
    partners: ["MIT", "UCB", "Microsoft"],
    blurb: "Tech-meets-liberal-arts campus with venture lab and global immersion.",
  },
];

export type Mentor = {
  id: string;
  name: string;
  college: string;
  branch: string;
  rating: number;
  reviews: number;
  price: number; // per 30 min
  tags: string[];
  avatar: string;
  available: string;
};

export const mentors: Mentor[] = [
  { id: "1", name: "Aarav Mehta", college: "IIT Bombay", branch: "CSE '25", rating: 4.9, reviews: 142, price: 499, tags: ["JEE Strategy", "Placements", "Hostel Life"], avatar: "https://i.pravatar.cc/120?img=12", available: "Today · 7pm" },
  { id: "2", name: "Priya Sharma", college: "IIIT Hyderabad", branch: "AI '24", rating: 4.8, reviews: 98, price: 399, tags: ["AI Career", "Research", "Internships"], avatar: "https://i.pravatar.cc/120?img=47", available: "Tomorrow · 6pm" },
  { id: "3", name: "Rohan Iyer", college: "BITS Pilani", branch: "ECE '23", rating: 4.7, reviews: 67, price: 349, tags: ["Branch Change", "Core Jobs"], avatar: "https://i.pravatar.cc/120?img=33", available: "Today · 9pm" },
  { id: "4", name: "Sneha Reddy", college: "VIT Vellore", branch: "CSE '25", rating: 4.6, reviews: 51, price: 299, tags: ["Campus Life", "Coding Clubs"], avatar: "https://i.pravatar.cc/120?img=45", available: "Sat · 11am" },
];

export type Review = {
  id: string;
  student: string;
  college: string;
  branch: string;
  rating: number;
  text: string;
  upvotes: number;
  verified: boolean;
  avatar: string;
};

export const reviews: Review[] = [
  { id: "r1", student: "Karthik N.", college: "IIIT Hyderabad", branch: "AI · 3rd year", rating: 5, text: "Coding culture is unreal. Hackathons every month, research labs are open to undergrads, and placements crossed 30 LPA average for AI this year.", upvotes: 234, verified: true, avatar: "https://i.pravatar.cc/100?img=15" },
  { id: "r2", student: "Ananya P.", college: "VIT Vellore", branch: "CSE · Alumni", rating: 4, text: "Massive campus, super diverse crowd. Hostels are decent. Placements are great if you grind LeetCode early — got 18 LPA at a SaaS company.", upvotes: 189, verified: true, avatar: "https://i.pravatar.cc/100?img=23" },
  { id: "r3", student: "Dev R.", college: "BITS Pilani", branch: "ECE · 2nd year", rating: 5, text: "Flexible curriculum lets me take CS electives. Practice School is a game changer — I'm interning at a fintech right now.", upvotes: 156, verified: true, avatar: "https://i.pravatar.cc/100?img=58" },
];
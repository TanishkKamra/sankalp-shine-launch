import { Smile, Star, HeadphonesIcon } from "lucide-react";

const stats = [
  { icon: Smile, value: "50K+", label: "Happy Families" },
  { icon: Star, value: "4.8", label: "Rated on Google" },
  { icon: HeadphonesIcon, value: "10K+", label: "Claims Served" },
];

const StatsBar = () => (
  <section className="bg-surface py-12">
    <div className="container flex flex-wrap justify-center gap-8 md:gap-16">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-foreground">{value}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;

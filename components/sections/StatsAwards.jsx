import { stats } from "@/data/amenities";
import CountUp from "@/components/ui/CountUp";

export default function StatsAwards() {
  return (
    <section className="border-y border-line-light bg-bg-main">
      <div className="mx-auto grid w-full max-w-container grid-cols-2 gap-y-l px-pp py-l md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
            <span className="font-display text-h3 italic text-brand">
              <CountUp value={stat.value} />
            </span>
            <span className="text-footnote uppercase tracking-eyebrow text-text-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
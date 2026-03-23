interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  reversed?: boolean;
}

export default function FeatureCard({ icon, title, description, bullets, reversed = false }: FeatureCardProps) {
  return (
    <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}>
      <div className="flex-1">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl sm:text-3xl font-bold text-dark">{title}</h3>
        <p className="mt-3 text-gray-600 text-lg leading-relaxed">{description}</p>
        <ul className="mt-5 space-y-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="mt-1 h-5 w-5 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 w-full max-w-md lg:max-w-none">
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center">
          <span className="text-7xl">{icon}</span>
        </div>
      </div>
    </div>
  );
}

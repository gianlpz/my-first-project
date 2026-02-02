const timelineItems = [
  {
    title: "UX Designer",
    date: "2023 - Present",
    description: "Creating user-centered digital experiences.",
  },
  {
    title: "Healthcare Professional",
    date: "2019 - 2023",
    description: "Developed deep empathy and attention to detail.",
  },
];

export function Background() {
  return (
    <section id="background" className="py-16 md:py-24 px-4 md:px-8 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12">
          Background
        </h2>

        <div className="space-y-0">
          {timelineItems.map((item, index) => (
            <div
              key={item.title}
              className={`timeline-item ${
                index === timelineItems.length - 1 ? "pb-0" : ""
              }`}
            >
              <h3 className="text-white text-lg md:text-xl font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-coral text-sm mb-2">{item.date}</p>
              <p className="text-white/60 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

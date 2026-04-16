const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 bg-[#1d1d1f] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-sm font-medium text-[#0071e3] tracking-widest uppercase mb-4">
              О компании
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6 leading-tight">
              Мы создаём<br />технологии<br />будущего
            </h2>
            <p className="text-[#a1a1a6] leading-relaxed mb-6 text-lg">
              Pulse — технологическая компания нового поколения. Основана в 2021 году командой
              инженеров и дизайнеров, которые верят: лучшие устройства — это те, что исчезают
              за опытом их использования.
            </p>
            <p className="text-[#a1a1a6] leading-relaxed text-lg">
              iPulse 5G — наш первый смартфон. Но не последний. Мы строим экосистему,
              в центре которой — человек, а не устройство.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "2021", label: "Год основания" },
              { num: "500+", label: "Инженеров в команде" },
              { num: "38", label: "Патентов на Apex G1" },
              { num: "47", label: "Стран доставки" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#2d2d2f] rounded-2xl p-6">
                <p className="text-3xl font-semibold text-white mb-1">{stat.num}</p>
                <p className="text-sm text-[#6e6e73]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://cdn.poehali.dev/projects/90d9f86a-707e-4b5e-913f-d9494815ae5c/files/ed22eab2-3974-404f-a178-bc6370a3515b.jpg"
            alt="Линейка iPulse"
            className="w-full h-72 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Вся линейка iPulse
            </h3>
            <p className="text-[#a1a1a6]">iPulse · iPulse Plus · iPulse Max</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            {
              title: "Дизайн",
              text: "Алюминий авиационного класса, сапфировое стекло и точность до 0.01 мм.",
            },
            {
              title: "Экология",
              text: "100% переработанный алюминий в корпусе. Нулевой углеродный след к 2030.",
            },
            {
              title: "Конфиденциальность",
              text: "Все данные обрабатываются на устройстве. Мы не знаем о вас ничего лишнего.",
            },
          ].map((card) => (
            <div key={card.title} className="bg-[#2d2d2f] rounded-2xl p-7">
              <h4 className="text-lg font-semibold text-white mb-3">{card.title}</h4>
              <p className="text-[#a1a1a6] text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

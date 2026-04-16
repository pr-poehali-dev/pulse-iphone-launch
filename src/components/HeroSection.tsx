const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-14 bg-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-[#0071e3] tracking-widest uppercase mb-4">
          Добро пожаловать в будущее
        </p>
        <h1 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] leading-tight mb-4 tracking-tight">
          iPulse 5G
        </h1>
        <p className="text-xl md:text-2xl text-[#6e6e73] font-light mb-3">
          На процессоре Apex G1
        </p>
        <p className="text-base md:text-lg text-[#6e6e73] max-w-2xl mx-auto mb-10 leading-relaxed">
          Новое поколение скорости, интеллекта и дизайна. <br className="hidden md:block" />
          Телефон, который думает быстрее, чем ты успеваешь нажать.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#buy"
            className="px-8 py-3.5 rounded-full bg-[#0071e3] text-white text-base font-medium hover:bg-[#0077ed] transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Купить за $899
          </a>
          <a
            href="#specs"
            className="px-8 py-3.5 rounded-full bg-[#f5f5f7] text-[#1d1d1f] text-base font-medium hover:bg-[#e8e8ed] transition-all duration-200"
          >
            Узнать больше
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10 pointer-events-none" />
          <img
            src="https://cdn.poehali.dev/projects/90d9f86a-707e-4b5e-913f-d9494815ae5c/files/7a8e2d4e-62d0-40b6-a148-08928483ae21.jpg"
            alt="iPulse 5G"
            className="animate-float w-64 md:w-80 rounded-3xl shadow-2xl shadow-black/20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

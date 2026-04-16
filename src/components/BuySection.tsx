import { useState } from "react";

const models = [
  {
    id: "standard",
    name: "iPulse 5G",
    price: "$899",
    tagline: "Мощь без компромиссов",
    color: "bg-white",
    badge: null,
    features: [
      "Дисплей 6.1\" 2K AMOLED",
      "Процессор Apex G1",
      "Камера 200 МП",
      "Аккумулятор 4800 мАч",
      "RAM 12 ГБ · 256 ГБ",
      "5G · Wi-Fi 7",
    ],
  },
  {
    id: "plus",
    name: "iPulse Plus",
    price: "$1099",
    tagline: "Больше экрана. Больше возможностей",
    color: "bg-[#1d1d1f]",
    badge: "Популярный",
    features: [
      "Дисплей 6.7\" 2K AMOLED Pro",
      "Процессор Apex G1 Pro",
      "Тройная камера 200 МП",
      "Аккумулятор 5200 мАч",
      "RAM 16 ГБ · 512 ГБ",
      "5G · Wi-Fi 7 · UWB",
    ],
  },
  {
    id: "max",
    name: "iPulse Max",
    price: "$1399",
    tagline: "Абсолютный максимум",
    color: "bg-[#f5f5f7]",
    badge: "Топ",
    features: [
      "Дисплей 6.9\" 4K AMOLED Ultra",
      "Процессор Apex G1 Ultra",
      "Камера 200 МП + перископ",
      "Аккумулятор 5800 мАч",
      "RAM 24 ГБ · 1 ТБ",
      "5G · Wi-Fi 7 · UWB · Satellite",
    ],
  },
];

const BuySection = () => {
  const [selected, setSelected] = useState("plus");

  return (
    <section id="buy" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#0071e3] tracking-widest uppercase mb-3">
            Выберите модель
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            iPulse для каждого
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
            Три версии — один уровень качества. Найдите свой.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => {
            const isSelected = selected === model.id;
            const isDark = model.id === "plus";
            return (
              <div
                key={model.id}
                onClick={() => setSelected(model.id)}
                className={`relative rounded-3xl p-8 cursor-pointer transition-all duration-300 border-2 ${
                  isDark ? "bg-[#1d1d1f]" : model.color
                } ${
                  isSelected
                    ? "border-[#0071e3] shadow-xl shadow-blue-500/10 scale-[1.02]"
                    : "border-transparent hover:border-[#d2d2d7]"
                }`}
              >
                {model.badge && (
                  <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-[#0071e3] text-white text-xs font-medium">
                    {model.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-1 ${isDark ? "text-white" : "text-[#1d1d1f]"}`}>
                    {model.name}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}>
                    {model.tagline}
                  </p>
                </div>

                <p className={`text-4xl font-semibold mb-8 ${isDark ? "text-white" : "text-[#1d1d1f]"}`}>
                  {model.price}
                </p>

                <ul className="space-y-3 mb-8">
                  {model.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-sm ${isDark ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  isDark
                    ? "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]"
                    : "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                }`}>
                  Купить {model.name}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-sm text-[#6e6e73] mt-8">
          Бесплатная доставка · 30 дней на возврат · Гарантия 2 года
        </p>
      </div>
    </section>
  );
};

export default BuySection;

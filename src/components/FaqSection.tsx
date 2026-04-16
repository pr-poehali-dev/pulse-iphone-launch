import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Когда начнутся поставки iPulse 5G?",
    a: "Поставки начнутся с 1 июня 2026 года. При предзаказе — гарантированно получите в первой волне.",
  },
  {
    q: "Чем Apex G1 отличается от других процессоров?",
    a: "Apex G1 — это первый чип, разработанный Pulse с нуля. 3-нанометровый техпроцесс обеспечивает на 40% больше производительности при на 25% меньшем энергопотреблении по сравнению с конкурентами.",
  },
  {
    q: "Какая разница между iPulse, Plus и Max?",
    a: "iPulse — базовая модель с 6.1\" экраном. Plus добавляет большой 6.7\" Pro-дисплей, улучшенный процессор и батарею. Max — флагман с 6.9\" Ultra-экраном, перископной камерой и спутниковой связью.",
  },
  {
    q: "Есть ли гарантия и как вернуть товар?",
    a: "На все устройства действует 2-летняя гарантия производителя. Возврат без объяснения причин в течение 30 дней с момента получения.",
  },
  {
    q: "Поддерживается ли беспроводная зарядка?",
    a: "Да, все модели поддерживают беспроводную зарядку MagPulse 30W и обратную беспроводную зарядку 10W.",
  },
  {
    q: "В каких странах доступна доставка?",
    a: "Доставляем в 47 стран. Полный список доступен при оформлении заказа. Среднее время доставки — 3–7 рабочих дней.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 px-6 bg-[#f5f5f7]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#0071e3] tracking-widest uppercase mb-3">
            Поддержка
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Частые вопросы
          </h2>
          <p className="text-lg text-[#6e6e73]">
            Нашли ответ на большинство вопросов. Не нашли — напишите нам.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-[#1d1d1f] font-medium">{faq.q}</span>
                <Icon
                  name={open === i ? "Minus" : "Plus"}
                  size={16}
                  className="text-[#6e6e73] flex-shrink-0"
                />
              </button>
              {open === i && (
                <div className="px-7 pb-5">
                  <p className="text-[#6e6e73] leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

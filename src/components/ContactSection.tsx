import { useState } from "react";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#0071e3] tracking-widest uppercase mb-3">
            Связаться
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Контакты
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
            Есть вопросы или предложения? Мы ответим в течение 24 часов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {[
              { icon: "MapPin", label: "Адрес", value: "Сан-Франциско, Калифорния, США" },
              { icon: "Mail", label: "Email", value: "hello@pulse.com" },
              { icon: "Phone", label: "Телефон", value: "+1 (800) PULSE-5G" },
              { icon: "Clock", label: "Поддержка", value: "Пн–Пт, 9:00 – 20:00 PT" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={18} className="text-[#0071e3]" />
                </div>
                <div>
                  <p className="text-sm text-[#6e6e73] mb-0.5">{item.label}</p>
                  <p className="text-[#1d1d1f] font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f5f5f7] rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[#0071e3] flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2">Сообщение отправлено</h3>
                <p className="text-[#6e6e73]">Мы свяжемся с вами в течение 24 часов.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#d2d2d7] text-[#1d1d1f] placeholder:text-[#6e6e73] focus:outline-none focus:border-[#0071e3] transition-colors text-sm"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#d2d2d7] text-[#1d1d1f] placeholder:text-[#6e6e73] focus:outline-none focus:border-[#0071e3] transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1d1d1f] mb-2">Сообщение</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#d2d2d7] text-[#1d1d1f] placeholder:text-[#6e6e73] focus:outline-none focus:border-[#0071e3] transition-colors text-sm resize-none"
                    placeholder="Расскажите, чем мы можем помочь..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#0071e3] text-white text-sm font-medium hover:bg-[#0077ed] transition-colors duration-200"
                >
                  Отправить сообщение
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

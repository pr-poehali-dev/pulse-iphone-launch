import Icon from "@/components/ui/icon";

const specs = [
  { icon: "Cpu", label: "Процессор", value: "Apex G1", sub: "3nm, 10 ядер" },
  { icon: "Wifi", label: "Связь", value: "5G", sub: "Wi-Fi 7 · Bluetooth 5.4" },
  { icon: "Camera", label: "Камера", value: "200 МП", sub: "Тройная система · 8K видео" },
  { icon: "Battery", label: "Аккумулятор", value: "5200 мАч", sub: "Быстрая зарядка 120W" },
  { icon: "Monitor", label: "Дисплей", value: "6.7\"", sub: "ProMotion 1-120Hz · 2K AMOLED" },
  { icon: "HardDrive", label: "Память", value: "256 ГБ", sub: "UFS 4.0 · RAM 12 ГБ" },
];

const SpecsSection = () => {
  return (
    <section id="specs" className="py-28 px-6 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-[#0071e3] tracking-widest uppercase mb-3">
            Технологии
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight mb-4">
            Характеристики
          </h2>
          <p className="text-lg text-[#6e6e73] max-w-xl mx-auto">
            Каждая деталь продумана до мелочей — от процессора до стекла.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f5f5f7] flex items-center justify-center mb-5">
                <Icon name={spec.icon} size={20} className="text-[#0071e3]" />
              </div>
              <p className="text-sm text-[#6e6e73] mb-1">{spec.label}</p>
              <p className="text-2xl font-semibold text-[#1d1d1f] mb-1">{spec.value}</p>
              <p className="text-sm text-[#6e6e73]">{spec.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1d1d1f] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <p className="text-sm font-medium text-[#0071e3] tracking-widest uppercase mb-4">
                Сердце устройства
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Apex G1
              </h3>
              <p className="text-[#a1a1a6] leading-relaxed mb-6">
                Наш первый собственный чип. 3-нанометровый техпроцесс, нейронный движок с
                производительностью 38 TOPs и энергоэффективность, которая переписывает правила игры.
              </p>
              <ul className="space-y-2">
                {["10-ядерный CPU", "16-ядерный GPU", "Нейронный движок 38 TOPs", "AV1 декодирование"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#a1a1a6]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#1d1d1f] to-[#2d2d2f]">
              <img
                src="https://cdn.poehali.dev/projects/90d9f86a-707e-4b5e-913f-d9494815ae5c/files/1e502207-9ad9-443e-a962-894b59c46133.jpg"
                alt="Apex G1"
                className="w-64 h-64 object-cover rounded-2xl opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
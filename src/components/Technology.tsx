import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Technology = () => {
  const technologies = [
    {
      icon: "Scan",
      title: "Кассы самообслуживания",
      description: "Быстрое и удобное оформление покупок без очередей",
      emoji: "🛒",
    },
    {
      icon: "QrCode",
      title: "Оплата по QR-коду",
      description: "Мгновенная оплата через мобильное приложение",
      emoji: "📱",
    },
    {
      icon: "Smile",
      title: "Оплата по улыбке",
      description: "Инновационная биометрическая система оплаты",
      emoji: "😊",
    },
    {
      icon: "Zap",
      title: "Другие новинки",
      description: "Постоянно внедряем новые технологические решения",
      emoji: "⚡",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maria-dark mb-4">
            Современные технологии
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы активно внедряем инновационные решения, чтобы сделать процесс
            покупки еще более удобным и быстрым для наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="space-y-4">
                <div className="text-4xl mb-3">{tech.emoji}</div>
                <div className="w-12 h-12 bg-maria-red/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-maria-red transition-colors">
                  <Icon
                    name={tech.icon as any}
                    size={24}
                    className="text-maria-red group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-lg font-semibold text-maria-dark">
                  {tech.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-maria-red/5 to-maria-orange/5 rounded-3xl p-8 text-center">
          <Icon
            name="Rocket"
            size={48}
            className="mx-auto mb-4 text-maria-red"
          />
          <h3 className="text-2xl font-bold text-maria-dark mb-4">
            Инновации для удобства
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Мы не стоим на месте и постоянно ищем новые способы улучшить опыт
            покупок. Наша цель — сделать каждое посещение магазина максимально
            комфортным и эффективным.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-maria-red/10 rounded-full">
            <Icon name="TrendingUp" size={20} className="text-maria-red mr-2" />
            <span className="text-maria-red font-medium">
              Активно внедряем новые технологии
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

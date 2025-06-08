import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Target",
      title: "Стратегическое консультирование",
      description:
        "Помогаю определить цели, построить стратегию и найти оптимальные пути развития вашего бизнеса.",
      features: ["Анализ рынка", "Планирование", "Roadmap развития"],
      price: "от 15 000 ₽",
    },
    {
      icon: "Palette",
      title: "Креативные решения",
      description:
        "Разработка уникальных концепций, брендинга и творческих решений для вашего проекта.",
      features: ["Брендинг", "Дизайн концепции", "Креативная стратегия"],
      price: "от 25 000 ₽",
    },
    {
      icon: "Settings",
      title: "Управление проектами",
      description:
        "Полное сопровождение проектов от идеи до реализации с контролем качества и сроков.",
      features: ["Планирование", "Контроль качества", "Команда экспертов"],
      price: "от 20 000 ₽",
    },
    {
      icon: "BarChart",
      title: "Аналитика и исследования",
      description:
        "Глубокие исследования рынка, анализ конкурентов и поведения пользователей.",
      features: ["Исследования", "Отчеты", "Рекомендации"],
      price: "от 18 000 ₽",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Мои услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексные решения для развития вашего бизнеса и достижения
            поставленных целей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-xl transition-shadow duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={28}
                    className="text-purple-600 group-hover:text-white transition-colors"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-purple-600">
                      {service.price}
                    </span>
                    <Button
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Icon
                name="Gift"
                size={48}
                className="mx-auto mb-4 text-purple-200"
              />
              <h3 className="text-2xl font-bold mb-4">
                Бесплатная консультация
              </h3>
              <p className="text-purple-100 mb-6">
                Получите персональную консультацию по вашему проекту. Обсудим
                задачи и найдем оптимальное решение.
              </p>
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

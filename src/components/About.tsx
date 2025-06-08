import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const regions = [
    "Алтайский край",
    "Республика Алтай",
    "Новосибирская область",
    "Кемеровская область",
    "Томская область",
  ];

  const achievements = [
    {
      icon: "Store",
      title: "1308",
      subtitle: "магазинов в сети",
      color: "maria-red",
    },
    {
      icon: "MapPin",
      title: "279",
      subtitle: "населенных пунктов",
      color: "maria-orange",
    },
    {
      icon: "Map",
      title: "5",
      subtitle: "регионов присутствия",
      color: "maria-yellow",
    },
    {
      icon: "Trophy",
      title: "ТОП-15",
      subtitle: "в России",
      color: "maria-green",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maria-dark mb-4">
            О компании
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мария-Ра — крупнейшая розничная сеть Сибири, которая входит в топ-15
            продовольственных компаний России и представлена в пяти регионах
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              На 1 января 2025 года торговая сеть Мария-Ра объединяет 1308
              магазинов в 279 населенных пунктах пяти регионов Сибири. Мы
              создали уникальную экосистему розничной торговли, которая включает
              как современные супермаркеты, так и уютные магазины шаговой
              доступности.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Наша миссия — сделать качественные продукты доступными для каждого
              жителя Сибири. Мы постоянно развиваемся, внедряя современные
              технологии и расширяя географию присутствия.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-maria-dark">
                Регионы присутствия:
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Icon name="MapPin" size={16} className="text-maria-red" />
                    <span className="text-gray-700">{region}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-maria-red/10 to-maria-orange/10 rounded-3xl"></div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-maria-red rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-maria-dark">
                    Постоянный рост
                  </p>
                  <p className="text-sm text-gray-600">и развитие сети</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-maria-red/20"
            >
              <CardContent className="space-y-3">
                <div
                  className={`w-12 h-12 bg-${achievement.color}/10 rounded-full flex items-center justify-center mx-auto`}
                >
                  <Icon
                    name={achievement.icon as any}
                    size={24}
                    className={`text-${achievement.color}`}
                  />
                </div>
                <div className="text-3xl font-bold text-maria-dark">
                  {achievement.title}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.subtitle}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

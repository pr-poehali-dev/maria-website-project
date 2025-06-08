import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const skills = [
    { name: "Стратегическое планирование", level: 95 },
    { name: "Креативные решения", level: 88 },
    { name: "Управление проектами", level: 92 },
    { name: "Аналитика и исследования", level: 85 },
  ];

  const achievements = [
    { icon: "Trophy", title: "50+", subtitle: "Успешных проектов" },
    { icon: "Clock", title: "5+", subtitle: "Лет опыта" },
    { icon: "Heart", title: "98%", subtitle: "Довольных клиентов" },
    { icon: "Award", title: "15+", subtitle: "Наград и признаний" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Обо мне</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Профессионал с многолетним опытом в создании успешных проектов и
            решений
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Меня зовут Мария, и я увлечена тем, что помогаю людям и компаниям
              реализовывать их смелые идеи. За годы работы я научилась находить
              уникальные подходы к каждой задаче.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Мой опыт охватывает различные сферы: от стратегического
              планирования до креативной реализации. Я верю, что каждый проект —
              это возможность создать что-то особенное.
            </p>

            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-purple-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl"></div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Креативный подход
                  </p>
                  <p className="text-sm text-gray-600">к каждому проекту</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow"
            >
              <CardContent className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Icon
                    name={achievement.icon as any}
                    size={24}
                    className="text-purple-600"
                  />
                </div>
                <div className="text-3xl font-bold text-gray-900">
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

import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Мария Ра
              </h1>
              <p className="text-xl text-purple-600 font-medium">
                Эксперт в создании уникальных решений
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Помогаю людям и брендам достигать целей через креативный подход,
                профессиональную экспертизу и внимание к деталям.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать портфолио
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon
                  name="Star"
                  size={20}
                  className="text-yellow-500 fill-current"
                />
                <span className="text-gray-600">4.9 рейтинг</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={20} className="text-purple-600" />
                <span className="text-gray-600">200+ клиентов</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-sm text-gray-600 mb-2">Последний проект</p>
                  <p className="font-semibold text-gray-900">
                    Ребрендинг для стартапа
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Завершен</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

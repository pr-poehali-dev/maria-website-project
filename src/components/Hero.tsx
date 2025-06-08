import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-maria-light to-white flex items-center"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-maria-red/10 rounded-full">
                <Icon name="Award" size={16} className="text-maria-red mr-2" />
                <span className="text-sm font-medium text-maria-red">
                  ТОП-15 крупнейших продовольственных компаний России
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-maria-dark leading-tight">
                Мария-Ра
              </h1>
              <p className="text-xl text-maria-red font-medium">
                Крупнейшая розничная сеть Сибири
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                1308 магазинов в 279 населенных пунктах пяти регионов. От
                супермаркетов с кафе до уютных магазинов у дома — мы делаем
                покупки комфортными для каждого.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-maria-red hover:bg-maria-dark-red text-white"
              >
                <Icon name="MapPin" size={20} className="mr-2" />
                Найти магазин
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-maria-red text-maria-red hover:bg-maria-red/5"
              >
                <Icon name="Store" size={20} className="mr-2" />
                Стать партнёром
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-maria-dark">1308</div>
                <div className="text-sm text-gray-600">магазинов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-maria-dark">279</div>
                <div className="text-sm text-gray-600">населенных пунктов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-maria-dark">5</div>
                <div className="text-sm text-gray-600">регионов Сибири</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-maria-red/20 to-maria-orange/20 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-maria-red/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Современные технологии
                  </p>
                  <p className="font-semibold text-maria-dark">
                    Оплата по улыбке и QR-коду
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-maria-green rounded-full"></div>
                    <span className="text-xs text-gray-600">
                      Активно внедряется
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-maria-yellow rounded-full flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

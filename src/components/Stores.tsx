import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Stores = () => {
  const storeTypes = [
    {
      icon: "Store",
      title: "Супермаркеты с кафе",
      description:
        "Просторные магазины с широким ассортиментом товаров и уютной зоной кафе для отдыха и перекуса.",
      features: [
        "Широкий ассортимент продуктов",
        "Зона кафе и готовой еды",
        "Парковка и удобный доступ",
        "Кассы самообслуживания",
      ],
      image: "🏪",
    },
    {
      icon: "Home",
      title: "Магазины у дома",
      description:
        "Уютные магазины шаговой доступности с необходимыми товарами для ежедневных покупок.",
      features: [
        "Шаговая доступность",
        "Товары первой необходимости",
        "Быстрое обслуживание",
        "Приветливый персонал",
      ],
      image: "🏘️",
    },
  ];

  return (
    <section id="stores" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maria-dark mb-4">
            Наши магазины
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            В сети Мария-Ра каждый покупатель сможет выбрать наиболее комфортный
            для себя формат магазина
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {storeTypes.map((store, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4 text-center">{store.image}</div>
                <div className="w-14 h-14 bg-maria-red/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-maria-red transition-colors">
                  <Icon
                    name={store.icon as any}
                    size={28}
                    className="text-maria-red group-hover:text-white transition-colors"
                  />
                </div>
                <CardTitle className="text-xl text-maria-dark text-center">
                  {store.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed text-center">
                  {store.description}
                </p>

                <div className="space-y-2">
                  {store.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-maria-green"
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-center">
                  <Button
                    variant="outline"
                    className="border-maria-red text-maria-red hover:bg-maria-red hover:text-white transition-colors"
                  >
                    Найти на карте
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-to-r from-maria-red to-maria-dark-red text-white max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Icon
                name="MapPin"
                size={48}
                className="mx-auto mb-4 text-maria-light"
              />
              <h3 className="text-2xl font-bold mb-4">
                Найдите ближайший магазин
              </h3>
              <p className="text-maria-light mb-6">
                Воспользуйтесь картой магазинов, чтобы найти ближайший к вам
                магазин Мария-Ра и узнать режим работы
              </p>
              <Button
                size="lg"
                className="bg-white text-maria-red hover:bg-maria-light"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Открыть карту магазинов
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Stores;

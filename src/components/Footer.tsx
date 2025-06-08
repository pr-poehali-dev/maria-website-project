import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-maria-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-maria-red to-maria-dark-red rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">М</span>
              </div>
              <div>
                <span className="text-xl font-bold">Мария-Ра</span>
                <p className="text-xs text-gray-300">Крупнейшая сеть Сибири</p>
              </div>
            </div>
            <p className="text-gray-300">
              1308 магазинов в 279 населенных пунктах пяти регионов Сибири.
              Входим в ТОП-15 продовольственных компаний России.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#stores"
                  className="hover:text-white transition-colors"
                >
                  Наши магазины
                </a>
              </li>
              <li>
                <a
                  href="#technology"
                  className="hover:text-white transition-colors"
                >
                  Технологии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Сотрудничество</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Франшиза
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Поставщикам
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Инвесторам
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <Icon name="Building" size={16} />
                г. Новосибирск
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (383) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@maria-ra.ru
              </li>
            </ul>

            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-3">Социальные сети</h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-maria-red transition-colors"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-maria-red transition-colors"
                >
                  <Icon name="Youtube" size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-maria-red transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ООО "Мария-Ра". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

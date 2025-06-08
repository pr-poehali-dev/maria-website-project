import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">МР</span>
              </div>
              <span className="text-xl font-bold">Мария Ра</span>
            </div>
            <p className="text-gray-400">
              Профессиональные решения для вашего бизнеса. Креативность и
              экспертиза в каждом проекте.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Стратегические консультации
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Креативные решения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Управление проектами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Аналитика
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                maria@example.com
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, Россия
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Следите за обновлениями
            </h4>
            <p className="text-gray-400 mb-4">
              Подпишитесь на новости и получайте полезные материалы
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Мария Ра. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

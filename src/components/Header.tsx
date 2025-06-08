import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">МР</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Мария Ра</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Обо мне
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <Button className="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white">
            Связаться
          </Button>

          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-maria-red to-maria-dark-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">М</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-maria-dark">
                Мария-Ра
              </span>
              <p className="text-xs text-gray-600">Крупнейшая сеть Сибири</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-700 hover:text-maria-red transition-colors font-medium"
            >
              О компании
            </a>
            <a
              href="#stores"
              className="text-gray-700 hover:text-maria-red transition-colors font-medium"
            >
              Магазины
            </a>
            <a
              href="#technology"
              className="text-gray-700 hover:text-maria-red transition-colors font-medium"
            >
              Технологии
            </a>
            <a
              href="#career"
              className="text-gray-700 hover:text-maria-red transition-colors font-medium"
            >
              Карьера
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-maria-red transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>

          <Button className="hidden md:flex bg-maria-red hover:bg-maria-dark-red text-white">
            Франшиза
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

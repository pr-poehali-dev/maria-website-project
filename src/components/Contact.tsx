import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Mail",
      title: "Email",
      value: "maria@example.com",
      link: "mailto:maria@example.com",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      link: "tel:+79991234567",
    },
    {
      icon: "MapPin",
      title: "Местоположение",
      value: "Москва, Россия",
      link: "#",
    },
    {
      icon: "Clock",
      title: "Время работы",
      value: "Пн-Пт: 9:00 - 18:00",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: "Instagram", link: "#", label: "Instagram" },
    { icon: "Linkedin", link: "#", label: "LinkedIn" },
    { icon: "MessageCircle", link: "#", label: "Telegram" },
    { icon: "Mail", link: "#", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готова обсудить ваш проект и найти наилучшее решение. Свяжитесь со
            мной удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Свяжитесь со мной
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <CardContent className="flex items-start gap-3 p-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={info.icon as any}
                          size={20}
                          className="text-purple-600"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {info.title}
                        </p>
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-purple-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Социальные сети
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors group"
                    aria-label={social.label}
                  >
                    <Icon name={social.icon as any} size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardContent className="space-y-6 p-0">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Отправить сообщение
                </h3>
                <p className="text-gray-600">
                  Заполните форму, и я свяжусь с вами в ближайшее время
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Тема
                  </label>
                  <Input placeholder="Тема сообщения" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Расскажите о вашем проекте..."
                    className="min-h-32"
                  />
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="text-center text-sm text-gray-500">
                Отвечу в течение 24 часов
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

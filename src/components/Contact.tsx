import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      icon: "Building",
      title: "Головной офис",
      value: "г. Новосибирск, ул. Промышленная, 1",
      link: "#",
    },
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (383) 123-45-67",
      link: "tel:+73831234567",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@maria-ra.ru",
      link: "mailto:info@maria-ra.ru",
    },
    {
      icon: "Clock",
      title: "Время работы",
      value: "Пн-Пт: 9:00 - 18:00",
      link: "#",
    },
  ];

  const businessContacts = [
    {
      icon: "Handshake",
      title: "Франшиза",
      value: "franchise@maria-ra.ru",
      description: "Возможности партнерства",
    },
    {
      icon: "Briefcase",
      title: "Поставщикам",
      value: "suppliers@maria-ra.ru",
      description: "Сотрудничество с поставщиками",
    },
    {
      icon: "Users",
      title: "HR-отдел",
      value: "hr@maria-ra.ru",
      description: "Вакансии и карьера",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maria-dark mb-4">Контакты</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для решения любых вопросов или предложений о
            сотрудничестве
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-maria-dark mb-6">
                Основные контакты
              </h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="p-4 hover:shadow-md transition-shadow"
                  >
                    <CardContent className="flex items-start gap-3 p-0">
                      <div className="w-10 h-10 bg-maria-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={info.icon as any}
                          size={20}
                          className="text-maria-red"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-maria-dark">
                          {info.title}
                        </p>
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-maria-red transition-colors"
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
              <h4 className="text-lg font-semibold text-maria-dark mb-4">
                Деловые контакты
              </h4>
              <div className="space-y-3">
                {businessContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg"
                  >
                    <Icon
                      name={contact.icon as any}
                      size={20}
                      className="text-maria-red"
                    />
                    <div>
                      <p className="font-medium text-maria-dark">
                        {contact.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        {contact.description}
                      </p>
                      <a
                        href={`mailto:${contact.value}`}
                        className="text-sm text-maria-red hover:underline"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-6">
            <CardContent className="space-y-6 p-0">
              <div>
                <h3 className="text-2xl font-bold text-maria-dark mb-2">
                  Обратная связь
                </h3>
                <p className="text-gray-600">
                  Напишите нам, и мы обязательно ответим на ваш запрос
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
                  <Input placeholder="Тема обращения" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Опишите ваш вопрос или предложение..."
                    className="min-h-32"
                  />
                </div>

                <Button className="w-full bg-maria-red hover:bg-maria-dark-red text-white">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>

              <div className="text-center text-sm text-gray-500">
                Ответим в течение 1 рабочего дня
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

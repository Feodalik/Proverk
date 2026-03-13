import { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      toast.error("Пожалуйста, заполните обязательные поля");
      return;
    }

    toast.success("Спасибо! Мы свяжемся с вами в течение 15 минут", {
      duration: 5000,
    });

    setFormData({
      name: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Форма */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl tracking-tight mb-4">
              Получите бесплатный дизайн-проект уже завтра
            </h2>
            <p className="text-xl text-stone-600 mb-8">
              Оставьте заявку и наш дизайнер свяжется с вами в течение 15 минут
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name">
                  Ваше имя <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="border-stone-300 focus:border-amber-700 py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone">
                  Телефон <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="border-stone-300 focus:border-amber-700 py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-comment">Комментарий</Label>
                <Textarea
                  id="contact-comment"
                  placeholder="Расскажите о своих пожеланиях..."
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  rows={4}
                  className="border-stone-300 focus:border-amber-700 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6 text-lg rounded-none shadow-lg"
              >
                Получить расчет
                <Send className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-center text-stone-500">
                Нажимая кнопку, вы соглашаетесь с политикой обработки
                персональных данных
              </p>
            </form>
          </motion.div>

          {/* Контакты */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-12"
          >
            <div className="sticky top-8 space-y-8">
              <div>
                <h3 className="text-3xl mb-6">Наши контакты</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">Телефон</p>
                      <a
                        href="tel:+79996405612"
                        className="text-2xl hover:text-amber-700 transition-colors"
                      >
                        +7 (999) 640-56-12
                      </a>
                      <p className="text-sm text-stone-600 mt-1">
                        Ежедневно с 9:00 до 21:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">Email</p>
                      <a
                        href="mailto:info@mebel-russia.ru"
                        className="text-xl hover:text-amber-700 transition-colors"
                      >
                        info@mebel-russia.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-600 mb-1">Адрес</p>
                      <p className="text-xl">
                        г. Иркутск
                      </p>
                      <p className="text-sm text-stone-600 mt-1">
                        Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 rounded-lg p-8">
                <h4 className="text-xl mb-4">Что вы получите?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-stone-700">
                      Бесплатный выезд замерщика
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-stone-700">
                      3D-визуализацию за 24 часа
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-stone-700">
                      Точный расчет стоимости
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-stone-700">
                      Консультацию дизайнера
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
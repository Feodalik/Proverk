import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* О компании */}
          <div>
            <h3 className="text-2xl mb-6">Мебель России</h3>
            <p className="text-stone-400 leading-relaxed mb-2">
              Мебель от дяди Жени
            </p>
            <p className="text-stone-400 leading-relaxed mb-6">
              Производим качественные кухни с 2014 года. Более 1200 довольных
              клиентов по всей России.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h4 className="text-lg mb-6">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Кухни на заказ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  3D-проектирование
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Замер помещения
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Доставка и установка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Гарантийное обслуживание
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h4 className="text-lg mb-6">Информация</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Наши работы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Акции
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="text-lg mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <a
                    href="tel:+79996405612"
                    className="text-stone-400 hover:text-amber-500 transition-colors"
                  >
                    +7 (999) 640-56-12
                  </a>
                  <p className="text-sm text-stone-500">Ежедневно с 9:00 до 21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@mebel-russia.ru"
                  className="text-stone-400 hover:text-amber-500 transition-colors"
                >
                  info@mebel-russia.ru
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-stone-400">
                  г. Иркутск
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижний блок */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © 2014-2026 Мебель России. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-stone-500 hover:text-amber-500 transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-stone-500 hover:text-amber-500 transition-colors"
              >
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
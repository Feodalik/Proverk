import { motion } from "motion/react";
import { Gift, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface PromoProps {
  onCtaClick: () => void;
}

export function Promo({ onCtaClick }: PromoProps) {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-amber-50 to-white relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-700 to-amber-600 p-8 text-white text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
                <Clock className="h-5 w-5" />
                <span>Акция действует до конца марта</span>
              </div>
              <h2 className="text-4xl lg:text-5xl mb-4">
                Специальное предложение
              </h2>
              <p className="text-xl text-white/90">
                Успейте заказать кухню по выгодной цене
              </p>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                    <Gift className="h-8 w-8 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2">Скидка 15%</h3>
                    <p className="text-stone-600">
                      На все кухни при заказе до 31 марта 2026 года
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                    <Gift className="h-8 w-8 text-amber-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2">Мойка в подарок</h3>
                    <p className="text-stone-600">
                      Качественная мойка из нержавеющей стали стоимостью до 15 000 ₽
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl mb-4">Дополнительные бонусы:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span className="text-stone-700">
                      Бесплатная доставка по городу
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span className="text-stone-700">
                      Рассрочка 0% на 12 месяцев
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span className="text-stone-700">
                      3D-проект в подарок (экономия 5 000 ₽)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button
                  onClick={onCtaClick}
                  size="lg"
                  className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-6 text-lg rounded-none shadow-lg hover:shadow-xl transition-all"
                >
                  Получить скидку 15%
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-stone-500 mt-4">
                  Количество акционных кухонь ограничено
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-stone-50 to-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Контент */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-amber-700 text-xl lg:text-2xl"
              >
                Мебель от дяди Жени
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl lg:text-7xl tracking-tight"
              >
                Кухня на заказ под ваш стиль и бюджет{" "}
                <span className="text-amber-700">с гарантией 5 лет</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl lg:text-2xl text-stone-600"
              >
                Создадим 3D-проект бесплатно и зафиксируем цену в договоре
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                onClick={onCtaClick}
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg rounded-none shadow-lg hover:shadow-xl transition-all"
              >
                Получить бесплатный проект
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Триггеры доверия */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-stone-200"
            >
              <div>
                <div className="text-3xl lg:text-4xl text-amber-700">12</div>
                <div className="text-sm text-stone-600 mt-1">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-amber-700">1200+</div>
                <div className="text-sm text-stone-600 mt-1">реализованных проектов</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-amber-700">4.9</div>
                <div className="text-sm text-stone-600 mt-1">рейтинг клиентов</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Изображение */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704428381527-71b82d7fc7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rkm4lMjB3aGl0ZSUyMGtpdGNoZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI1MzA3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Современная кухня"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Декоративный элемент */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
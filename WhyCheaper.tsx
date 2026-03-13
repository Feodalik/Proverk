import { motion } from "motion/react";
import { TrendingDown, Factory, Users, Zap } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Собственное производство",
    description:
      "У нас своя фабрика. Мы не платим посредникам и снижаем цену для вас на 30-40%.",
  },
  {
    icon: Users,
    title: "Прямые поставки",
    description:
      "Работаем напрямую с поставщиками фурнитуры и материалов без торговых наценок.",
  },
  {
    icon: TrendingDown,
    title: "Без шоу-румов в центре",
    description:
      "Не переплачиваем за аренду дорогих помещений в центре города. Экономия - вам.",
  },
  {
    icon: Zap,
    title: "Оптимизированные процессы",
    description:
      "Современное оборудование и отлаженные процессы позволяют снизить себестоимость.",
  },
];

export function WhyCheaper() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl tracking-tight mb-4">
            Почему наши кухни дешевле салонов
          </h2>
          <p className="text-xl text-stone-600">
            При том же качестве вы экономите 30-40% бюджета
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex p-6 bg-amber-100 rounded-full mb-6">
                  <Icon className="h-10 w-10 text-amber-700" />
                </div>
                <h3 className="text-xl mb-3">{reason.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-amber-50 rounded-lg p-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-5xl lg:text-7xl text-amber-700 mb-4">
              30-40%
            </div>
            <p className="text-2xl mb-2">экономии вашего бюджета</p>
            <p className="text-stone-600">
              по сравнению с кухонными салонами при том же уровне качества
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

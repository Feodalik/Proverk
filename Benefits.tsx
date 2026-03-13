import { motion } from "motion/react";
import { Factory, Award, Sparkles, FileCheck, Clock } from "lucide-react";

const benefits = [
  {
    icon: Factory,
    title: "Собственное производство",
    description: "Прямые цены без наценок посредников",
  },
  {
    icon: Award,
    title: "Европейская фурнитура",
    description: "Качественные механизмы от Blum и Hettich",
  },
  {
    icon: Sparkles,
    title: "Индивидуальный дизайн",
    description: "Уникальный проект под ваш интерьер",
  },
  {
    icon: FileCheck,
    title: "Работаем по договору",
    description: "Фиксированная цена и сроки в документе",
  },
  {
    icon: Clock,
    title: "Сроки соблюдаем",
    description: "Изготовление от 14 дней, установка за 1 день",
  },
];

export function Benefits() {
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
            Почему выбирают нас
          </h2>
          <p className="text-xl text-stone-600">
            Профессиональный подход на каждом этапе
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-4 bg-amber-100 rounded-lg group-hover:bg-amber-700 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-amber-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl">{benefit.title}</h3>
                  <p className="text-stone-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

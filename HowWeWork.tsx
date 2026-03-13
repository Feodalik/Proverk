import { motion } from "motion/react";
import { MessageSquare, Ruler, Palette, Wrench } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Заявка",
    description: "Вы оставляете заявку, мы связываемся в течение 15 минут",
  },
  {
    icon: Ruler,
    number: "02",
    title: "Бесплатный замер",
    description: "Выезжаем к вам, снимаем размеры и обсуждаем пожелания",
  },
  {
    icon: Palette,
    number: "03",
    title: "3D-проект",
    description: "Создаём визуализацию и фиксируем цену в договоре за 24 часа",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Производство и установка",
    description: "Изготавливаем за 14 дней, устанавливаем за 1 день",
  },
];

export function HowWeWork() {
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
            Как мы работаем
          </h2>
          <p className="text-xl text-stone-600">
            Простой и прозрачный процесс от заявки до установки
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col items-start space-y-4">
                  {/* Номер шага */}
                  <div className="text-7xl text-amber-700/20 absolute -top-4 -left-2 -z-10">
                    {step.number}
                  </div>

                  {/* Иконка */}
                  <div className="p-4 bg-amber-100 rounded-lg relative z-10">
                    <Icon className="h-8 w-8 text-amber-700" />
                  </div>

                  {/* Контент */}
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Линия соединения */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-amber-200 to-transparent -translate-x-1/2"></div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

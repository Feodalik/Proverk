import { motion } from "motion/react";
import { Shield, FileCheck, Award, Headphones } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Гарантия 5 лет",
    description: "На все виды работ и материалы",
  },
  {
    icon: FileCheck,
    title: "Договор с фиксацией цены",
    description: "Никаких скрытых доплат",
  },
  {
    icon: Award,
    title: "Сертифицированные материалы",
    description: "Документы на всю продукцию",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description: "Всегда на связи с клиентами",
  },
];

export function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl tracking-tight mb-4">
            Гарантии и безопасность
          </h2>
          <p className="text-xl text-stone-400">
            Ваше спокойствие - наша ответственность
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex p-6 bg-amber-700/20 rounded-full mb-4">
                  <Icon className="h-10 w-10 text-amber-500" />
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-stone-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Блок с сертификатами */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-800 rounded-lg p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl mb-6">
                Работаем официально
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-300">
                    Все материалы сертифицированы по ГОСТ
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-300">
                    Официальный договор с печатью организации
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-300">
                    Предоставляем все необходимые документы для отчётности
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-stone-300">
                    Гарантийное обслуживание в течение 5 лет
                  </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-stone-700 rounded-lg flex items-center justify-center"
                >
                  <Award className="h-16 w-16 text-stone-600" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

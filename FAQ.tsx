import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Сколько времени занимает изготовление кухни?",
    answer:
      "Стандартный срок изготовления кухни составляет от 14 до 21 дня в зависимости от сложности проекта. Установка занимает 1 день. Точные сроки фиксируются в договоре.",
  },
  {
    question: "Может ли измениться цена после замера?",
    answer:
      "Нет, цена фиксируется в договоре и не меняется. Мы работаем честно и прозрачно. Все возможные расходы учитываются на этапе проектирования, поэтому скрытых доплат не будет.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Мы используем только качественные материалы: ЛДСП и МДФ от проверенных европейских производителей, фурнитуру Blum и Hettich, столешницы из искусственного камня, пластика HPL или натурального дерева на выбор.",
  },
  {
    question: "Предоставляете ли вы гарантию?",
    answer:
      "Да, мы предоставляем гарантию 5 лет на все виды работ и материалы. В течение этого времени мы бесплатно устраняем любые дефекты, возникшие не по вине клиента.",
  },
  {
    question: "Как происходит оплата?",
    answer:
      "Мы работаем по следующей схеме: 50% предоплата после утверждения проекта и подписания договора, 50% после установки кухни. Также доступна рассрочка 0% на 12 месяцев.",
  },
  {
    question: "Что делать, если я не знаю, какую кухню хочу?",
    answer:
      "Наши дизайнеры помогут вам определиться со стилем, материалами и планировкой. Мы учтем ваш образ жизни, привычки и бюджет, чтобы создать идеальную кухню именно для вас.",
  },
  {
    question: "Работаете ли вы в других городах?",
    answer:
      "Да, мы работаем по всей России. Выезд замерщика бесплатный в пределах 50 км от города. Доставку и установку организуем в любой регион.",
  },
  {
    question: "Можно ли посмотреть вашу мебель вживую?",
    answer:
      "Конечно! У нас есть шоу-рум, где вы можете увидеть и потрогать наши кухни, оценить качество материалов и фурнитуры. Запишитесь на визит по телефону.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl tracking-tight mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-stone-600">
            Ответы на самые популярные вопросы о заказе кухни
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-none shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg hover:text-amber-700 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-stone-600">
            Не нашли ответ на свой вопрос?{" "}
            <a href="tel:+79996405612" className="text-amber-700 hover:text-amber-800">
              Позвоните нам
            </a>{" "}
            или оставьте заявку
          </p>
        </motion.div>
      </div>
    </section>
  );
}
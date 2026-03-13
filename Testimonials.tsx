import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    location: "Москва",
    rating: 5,
    text: "Заказывали кухню в мае, всё сделали точно в срок за 16 дней. Качество отличное, фурнитура Blum работает идеально. Цена не изменилась ни на рубль от той, что была в договоре. Очень довольны!",
    project: "Современная кухня 14 м²",
    image: "https://images.unsplash.com/photo-1560185993-4025ef02be1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwaG9tZSUyMHJlbm92YXRpb258ZW58MXx8fHwxNzcyNTMyMzMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Сергей Иванов",
    location: "Санкт-Петербург",
    rating: 5,
    text: "Делали кухню второй раз через эту компанию. Первая стоит уже 4 года - ни одной проблемы. Теперь заказали для новой квартиры. Рекомендую всем, кто ценит качество и честность.",
    project: "Классическая кухня 18 м²",
  },
  {
    id: 3,
    name: "Мария Соколова",
    location: "Казань",
    rating: 5,
    text: "Отличный сервис! 3D-проект сделали за день, дизайнер учёл все наши пожелания. Монтажники установили за 8 часов, всё убрали за собой. Спасибо за профессионализм!",
    project: "Минималистичная кухня 12 м²",
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    location: "Екатеринбург",
    rating: 5,
    text: "Обращался в несколько компаний, здесь самая адекватная цена при отличном качестве. Понравилось, что работают напрямую с производством без посредников. Рассрочка 0% - тоже большой плюс.",
    project: "Кухня-гостиная 22 м²",
  },
];

export function Testimonials() {
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
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-stone-600">
            Более 1000 довольных владельцев кухонь
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-stone-50 rounded-lg p-8 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-amber-700/20" />
              
              <div className="flex items-start gap-4 mb-6">
                {testimonial.image && (
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-stone-600 mb-2">
                    {testimonial.location}
                  </p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-stone-700 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="border-t border-stone-200 pt-4">
                <p className="text-sm text-stone-600">{testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Видео-отзыв секция */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-amber-50 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl lg:text-3xl mb-4">
            Смотрите видео-отзывы на нашем YouTube канале
          </h3>
          <p className="text-stone-600 mb-6">
            Реальные истории наших клиентов о процессе работы и результате
          </p>
          <div className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 cursor-pointer">
            <span className="text-lg">Перейти к видео-отзывам →</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const portfolioItems = [
  {
    id: 1,
    category: "современная",
    image: "https://images.unsplash.com/photo-1723641877400-55a814f2703e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGVzaWduJTIwc2NhbmRpbmF2aWFufGVufDF8fHx8MTc3MjUzMjMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Скандинавская кухня",
    area: "12 м²",
  },
  {
    id: 2,
    category: "современная",
    image: "https://images.unsplash.com/photo-1758548157243-f4ef3e614684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBraXRjaGVuJTIwd29vZCUyMGNhYmluZXRzfGVufDF8fHx8MTc3MjUzMjMzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Современная кухня с деревом",
    area: "15 м²",
  },
  {
    id: 3,
    category: "минимализм",
    image: "https://images.unsplash.com/photo-1761123393191-3a8733313ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwa2l0Y2hlbiUyMGJsYWNrJTIwd2hpdGV8ZW58MXx8fHwxNzcyNTMyMzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Минималистичная кухня",
    area: "10 м²",
  },
  {
    id: 4,
    category: "классика",
    image: "https://images.unsplash.com/photo-1768039049614-f3c2bae3f1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwa2l0Y2hlbiUyMG1hcmJsZSUyMGNvdW50ZXJ0b3B8ZW58MXx8fHwxNzcyNTMyMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Классическая кухня с мрамором",
    area: "18 м²",
  },
  {
    id: 5,
    category: "лофт",
    image: "https://images.unsplash.com/photo-1696420691256-b325ec3ec3a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Z0JTIwaW5kdXN0cmlhbCUyMGtpdGNoZW58ZW58MXx8fHwxNzcyNTMyMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Индустриальная кухня",
    area: "20 м²",
  },
  {
    id: 6,
    category: "современная",
    image: "https://images.unsplash.com/photo-1758240689297-d8613ca753f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBtb2Rlcm4lMjBraXRjaGVuJTIwaXNsYW5kfGVufDF8fHx8MTc3MjUzMjMzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Кухня с островом",
    area: "25 м²",
  },
  {
    id: 7,
    category: "минимализм",
    image: "https://images.unsplash.com/photo-1686023858213-9653d3248fdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBraXRjaGVuJTIwY2FiaW5ldHN8ZW58MXx8fHwxNzcyNDM0NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Минимализм в белом",
    area: "14 м²",
  },
  {
    id: 8,
    category: "современная",
    image: "https://images.unsplash.com/photo-1704428381527-71b82d7fc7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rkm4lMjB3aGl0ZSUyMGtpdGNoZW4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI1MzA3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Светлая современная кухня",
    area: "16 м²",
  },
];

const categories = [
  { id: "все", label: "Все проекты" },
  { id: "современная", label: "Современная" },
  { id: "классика", label: "Классика" },
  { id: "минимализм", label: "Минимализм" },
  { id: "лофт", label: "Лофт" },
];

interface PortfolioProps {
  onCtaClick: () => void;
}

export function Portfolio({ onCtaClick }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState("все");

  const filteredItems =
    activeCategory === "все"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
            Наши работы
          </h2>
          <p className="text-xl text-stone-600">
            Более 1200 реализованных проектов по всей России
          </p>
        </motion.div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-amber-700 text-white shadow-lg"
                  : "bg-white text-stone-700 hover:bg-amber-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Галерея */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-stone-600">{item.area}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <Button
                      onClick={onCtaClick}
                      className="bg-white text-amber-700 hover:bg-amber-50"
                    >
                      Рассчитать похожий проект
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 rounded-none shadow-lg"
          >
            Заказать бесплатный дизайн-проект
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

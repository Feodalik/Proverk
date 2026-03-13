import { useState } from "react";
import { motion } from "motion/react";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

export function Calculator() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    style: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Пожалуйста, заполните обязательные поля");
      return;
    }

    toast.success("Заявка отправлена! Мы свяжемся с вами в течение 15 минут", {
      duration: 5000,
    });
    
    setFormData({
      name: "",
      phone: "",
      area: "",
      style: "",
      budget: "",
    });
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-amber-700 to-amber-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Gift className="h-5 w-5" />
              <span>Бонус: чек-лист "7 ошибок при заказе кухни"</span>
            </div>
            <h2 className="text-4xl lg:text-6xl tracking-tight mb-4">
              Рассчитайте стоимость кухни за 60 секунд
            </h2>
            <p className="text-xl text-white/90">
              Получите точный расчет и бесплатный 3D-проект за 24 часа
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-lg p-8 lg:p-12 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-stone-700">
                    Площадь кухни (м²)
                  </Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Например: 12"
                    value={formData.area}
                    onChange={(e) =>
                      setFormData({ ...formData, area: e.target.value })
                    }
                    className="border-stone-300 focus:border-amber-700 text-stone-900"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="style" className="text-stone-700">
                    Стиль кухни
                  </Label>
                  <Select
                    value={formData.style}
                    onValueChange={(value) =>
                      setFormData({ ...formData, style: value })
                    }
                  >
                    <SelectTrigger className="border-stone-300 focus:border-amber-700 text-stone-900">
                      <SelectValue placeholder="Выберите стиль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern">Современная</SelectItem>
                      <SelectItem value="classic">Классика</SelectItem>
                      <SelectItem value="minimalism">Минимализм</SelectItem>
                      <SelectItem value="loft">Лофт</SelectItem>
                      <SelectItem value="scandinavian">Скандинавский</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-stone-700">
                  Бюджет (₽)
                </Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) =>
                    setFormData({ ...formData, budget: value })
                  }
                >
                  <SelectTrigger className="border-stone-300 focus:border-amber-700 text-stone-900">
                    <SelectValue placeholder="Выберите бюджет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="200000">До 200 000 ₽</SelectItem>
                    <SelectItem value="400000">200 000 - 400 000 ₽</SelectItem>
                    <SelectItem value="600000">400 000 - 600 000 ₽</SelectItem>
                    <SelectItem value="800000">600 000 - 800 000 ₽</SelectItem>
                    <SelectItem value="1000000">Более 800 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border-t border-stone-200 pt-6 mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-stone-700">
                      Ваше имя <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Иван"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="border-stone-300 focus:border-amber-700 text-stone-900"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-stone-700">
                      Телефон <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="border-stone-300 focus:border-amber-700 text-stone-900"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-6 text-lg rounded-none shadow-lg"
              >
                Получить расчет и чек-лист
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-center text-stone-500">
                Нажимая кнопку, вы соглашаетесь с политикой обработки
                персональных данных
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

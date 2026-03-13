import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "./ui/button";

interface FloatingButtonsProps {
  onCallClick: () => void;
}

export function FloatingButtons({ onCallClick }: FloatingButtonsProps) {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Кнопки */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* Кнопка звонка */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <Button
            onClick={onCallClick}
            size="lg"
            className="w-16 h-16 rounded-full bg-amber-700 hover:bg-amber-800 shadow-2xl hover:shadow-amber-700/50 transition-all"
            aria-label="Заказать звонок"
          >
            <Phone className="h-6 w-6" />
          </Button>
        </motion.div>

        {/* Кнопка чата */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        >
          <Button
            onClick={() => setShowChat(!showChat)}
            size="lg"
            className="w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 shadow-2xl hover:shadow-green-600/50 transition-all"
            aria-label="Онлайн-чат"
          >
            {showChat ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </motion.div>
      </div>

      {/* Модальное окно чата */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-32 right-8 z-50 w-80 bg-white rounded-lg shadow-2xl overflow-hidden"
          >
            <div className="bg-green-600 text-white p-4">
              <h3 className="text-lg">Онлайн-консультант</h3>
              <p className="text-sm text-green-100">
                Обычно отвечаем в течение 2 минут
              </p>
            </div>
            <div className="p-4 h-64 overflow-y-auto bg-stone-50">
              <div className="bg-white rounded-lg p-3 shadow-sm mb-3">
                <p className="text-sm text-stone-700">
                  Здравствуйте! 👋 Я помогу вам с выбором кухни. Какие у вас
                  вопросы?
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-stone-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Напишите сообщение..."
                  className="flex-1 px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-green-600"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  Отправить
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

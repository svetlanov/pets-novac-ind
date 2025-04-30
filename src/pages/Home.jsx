import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

export default function Home() {
    const navigate = useNavigate();
  return (
    <div className="relative w-screen h-screen overflow-hidden m-0 p-0">
      {/* Видео на фоне */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>

      {/* Контент поверх */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Добро пожаловать в Novak Pets!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl text-white mb-8 max-w-2xl"
        >
          Питомцы делают наш мир ярче.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-2xl text-white mb-8 max-w-2xl"
        >
          Давай заботиться о них каждый день.
        </motion.p>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span
            onClick={() => navigate("/pets")}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg cursor-pointer"
          >
            Перейти к питомцам
          </span>
        </motion.div>
      </div>
    </div>
  );
}

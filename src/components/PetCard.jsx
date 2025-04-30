import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PetCard({ pet, onDelete }) {
    const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = async () => {
    setIsDeleting(true);
    await onDelete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between p-6 hover:shadow-xl transition-all"
    >
      {/* Фото питомца */}
      <div className="w-32 h-32 overflow-hidden rounded-xl bg-gray-100 flex-shrink-0">
        <img
          src={pet.imageUrl}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Информация */}
      <div className="flex-1 mx-6 mt-4 md:mt-0 text-center md:text-left">
        <h3 className="text-2xl font-bold text-blue-700">{pet.name}</h3>
        <p className="text-gray-600">{pet.type} • {pet.breed}</p>
        <p className="text-gray-500">{pet.temperament}</p>
        <p className="text-sm text-gray-400">Возраст: {pet.age} лет</p>
      </div>

      {/* Кнопки управления */}
      <div className="flex flex-col gap-3 mt-4 md:mt-0">
        <span
          onClick={() => navigate(`/edit/${pet.id}`)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-md text-center cursor-pointer"
        >
          Редактировать
        </span>
        <button
          onClick={handleDeleteClick}
          disabled={isDeleting}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 shadow-md cursor-pointer"
        >
          {isDeleting ? 'Удаление...' : 'Удалить'}
        </button>
      </div>
    </motion.div>
  );
}

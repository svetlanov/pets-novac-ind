import { useState } from 'react';

export default function PetForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    type: initialData.type || '',
    breed: initialData.breed || '',
    temperament: initialData.temperament || '',
    age: initialData.age || '',
    imageUrl: initialData.imageUrl || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto mt-8">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* Фото питомца */}
        <div className="flex flex-col items-center">
          {formData.imageUrl ? (
            <img
              src={formData.imageUrl}
              alt="Превью питомца"
              className="w-48 h-48 object-cover rounded-xl border border-gray-300"
            />
          ) : (
            <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
              Нет изображения
            </div>
          )}
        </div>

        {/* Поля формы */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          {/* <input
            type="text"
            name="type"
            placeholder="Тип (Собака, Кошка и т.д.)"
            value={formData.type}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          /> */}

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Выберите тип</option>
            <option value="Собака">Собака</option>
            <option value="Кошка">Кошка</option>
            <option value="Попугай">Попугай</option>
          </select>

          <input
            type="text"
            name="breed"
            placeholder="Порода"
            value={formData.breed}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <select
            name="temperament"
            value={formData.temperament}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Выберите темперамент</option>
            <option value="Игривый">Игривый</option>
            <option value="Спокойный">Спокойный</option>
            <option value="Разговорчивый">Разговорчивый</option>
            <option value="Дружелюбный">Дружелюбный</option>
          </select>

          <input
            type="number"
            name="age"
            placeholder="Возраст (лет)"
            value={formData.age}
            onChange={handleChange}
            min="0"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="URL изображения"
            value={formData.imageUrl}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Сохранить
          </button>
        </div>

      </form>
    </div>
  );
}

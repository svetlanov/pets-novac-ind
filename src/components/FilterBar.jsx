export default function FilterBar({ searchTerm, setSearchTerm, filterType, setFilterType, sortOrder, setSortOrder }) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Поиск */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="🔍 Поиск по имени..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
  
        {/* Фильтр по типу */}
        <div className="flex-1">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">Все типы</option>
            <option value="Собака">Собаки</option>
            <option value="Кошка">Кошки</option>
            <option value="Попугай">Попугаи</option>
          </select>
        </div>
  
        {/* Сортировка */}
        <div className="flex-1">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="asc">Возраст: по возрастанию</option>
            <option value="desc">Возраст: по убыванию</option>
          </select>
        </div>
      </div>
    );
  }
  
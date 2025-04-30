import React from 'react';
import { useNavigate } from 'react-router';

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 bg-white shadow-md flex justify-between items-center p-4 z-50">
        <h1 onClick={() => navigate("/")} className="text-2xl font-bold text-blue-700 cursor-pointer">Novak Pets</h1>
        <nav className="flex space-x-4">
          <span onClick={() => navigate("/pets")} className="text-blue-500 hover:underline cursor-pointer">Питомцы</span>
          <span onClick={() => navigate("/add")}  className="text-blue-500 hover:underline cursor-pointer">Добавить</span>
        </nav>
      </header>
    );
}
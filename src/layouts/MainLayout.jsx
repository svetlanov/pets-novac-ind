import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Хэдер */}
      <Header />

      {/* Контент */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Футер */}
      <Footer />
    </div>
  );
}

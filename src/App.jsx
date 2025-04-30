import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Pets from './pages/Pets';
import AddPet from './pages/AddPet';
import EditPet from './pages/EditPet';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="pets" element={<Pets />} />
          <Route path="add" element={<AddPet />} />
          <Route path="edit/:id" element={<EditPet />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
}

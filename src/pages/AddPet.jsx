import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addPet } from '../store/pets/petsActions';
import PetForm from '../components/PetForm';

export default function AddPet() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = async (petData) => {
    await dispatch(addPet(petData));
    navigate('/pets');
  };

  return (
    <div>
      <h2 className='text-3xl font-bold text-blue-800 mb-8 text-center mt-8'>Добавить питомца</h2>
      <PetForm onSubmit={handleAdd} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { editPet } from '../store/pets/petsActions';
import { getPetById } from '../api/pets/petsAPI';
import PetForm from '../components/PetForm';
import PetFormSkeleton from '../components/PetFormSkeleton';



export default function EditPet() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pets = useSelector((state) => state.pets.pets);

  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const existingPet = pets.find((p) => p.id === id);
    if (existingPet) {
      setPet(existingPet);
      setLoading(false);
    } else {
      getPetById(id)
        .then((fetchedPet) => {
          if (fetchedPet) {
            setPet(fetchedPet);
          } else {
            setError('Питомец не найден.');
          }
        })
        .catch(() => {
          navigate('/404');
          //setError('Ошибка загрузки питомца.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, pets])

  const handleEdit = async (updatedPet) => {
    await dispatch(editPet({ ...updatedPet, id }));
    navigate('/pets');
  };

  return (
    <div>
      <h2 className='text-3xl font-bold text-blue-800 mb-8 text-center mt-8'>Редактировать питомца</h2>
      {(pet && pet?.id) && <PetForm onSubmit={handleEdit} initialData={pet} /> }
      {loading && <PetFormSkeleton />}
      {error && (
        <p className='text-center mt-8 text-red-500'>
          Ошибка загрузки: {error}
        </p>
      )}
    </div>
  );
}

import { toast } from 'react-toastify';
import { fetchStart, fetchSuccess, fetchFailure, addPetSuccess, deletePetSuccess, editPetSuccess } from './petsSlice';
import { getPets, createPet, updatePet, removePet } from '../../api/pets/petsAPI';

export const fetchPets = () => async (dispatch) => {
  dispatch(fetchStart());
  try {
    const data = await getPets();
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchFailure(error.message));
    toast.error('Ошибка загрузки питомцев!');
  }
};

export const addPet = (pet) => async (dispatch) => {
  try {
    const newPet = await createPet(pet);
    dispatch(addPetSuccess(newPet));
    toast.success('Питомец успешно добавлен!');
  } catch (error) {
    console.error('Ошибка добавления питомца', error);
    toast.error('Ошибка при добавлении питомца!');
  }
};

export const editPet = (pet) => async (dispatch) => {
  try {
    const updatedPet = await updatePet(pet);
    dispatch(editPetSuccess(updatedPet));
    toast.success('Данные питомца успешно обновлены!');
  } catch (error) {
    console.error('Ошибка редактирования питомца', error);
    toast.error('Ошибка при обновлении питомца!');
  }
};

export const deletePet = (id) => async (dispatch) => {
  try {
    await removePet(id);
    dispatch(deletePetSuccess(id));
    toast.success('Питомец успешно удалён!');
  } catch (error) {
    console.error('Ошибка удаления питомца', error);
    toast.error('Ошибка при удалении питомца!');
  }
};

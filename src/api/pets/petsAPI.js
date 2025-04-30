import axios from 'axios';

const API_URL = 'https://67fbe5891f8b41c816853166.mockapi.io/api/pets';

export const getPets = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getPetById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createPet = async (pet) => {
  const response = await axios.post(API_URL, pet);
  return response.data;
};

export const updatePet = async (pet) => {
  const response = await axios.put(`${API_URL}/${pet.id}`, pet);
  return response.data;
};

export const removePet = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

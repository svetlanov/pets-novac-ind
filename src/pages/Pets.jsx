import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPets, deletePet } from '../store/pets/petsActions';
import PetCard from '../components/PetCard';
import FilterBar from '../components/FilterBar';
import PetSkeleton from '../components/PetSkeleton';

export default function Pets() {
	const dispatch = useDispatch();
	const { pets, status, error } = useSelector((state) => state.pets);

	const [searchTerm, setSearchTerm] = useState('');
	const [filterType, setFilterType] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');

	useEffect(() => {
		dispatch(fetchPets());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deletePet(id));
	};

	const filteredPets = pets
		.filter((pet) =>
			pet.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
		.filter((pet) =>
			filterType
				? pet.type.toLowerCase() === filterType.toLowerCase()
				: true
		)
		.sort((a, b) => (sortOrder === 'asc' ? a.age - b.age : b.age - a.age));


	return (
		<div className='max-w-7xl mx-auto px-4 mb-8'>
			<h2 className='text-3xl font-bold text-blue-800 mb-8 text-center  mt-6'>
				Список питомцев
			</h2>
			<FilterBar
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				filterType={filterType}
				setFilterType={setFilterType}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
			/>
			{status === 'loading' && (
				<div className='flex flex-col gap-6'>
					{[...Array(3)].map((_, index) => (
						<PetSkeleton key={index} />
					))}
				</div>
			)}

			{error && (
				<p className='text-center mt-8 text-red-500'>
					Ошибка загрузки: {error}
				</p>
			)}

			{status === 'succeeded' && (
				<div className='flex flex-col gap-8'>
					{filteredPets.length > 0 ? (
						filteredPets.map((pet) => (
							<PetCard
								key={pet.id}
								pet={pet}
								onDelete={() => handleDelete(pet.id)}
							/>
						))
					) : (
						<p className='text-center text-gray-500'>
							Питомцы не найдены.
						</p>
					)}
				</div>
			)}
		</div>
	);
}

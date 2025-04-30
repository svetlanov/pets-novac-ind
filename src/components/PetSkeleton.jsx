import Skeleton from 'react-loading-skeleton';

export default function PetSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 flex flex-col md:flex-row items-center justify-between p-6">
      {/* Фото */}
      <div className="w-32 h-32">
        <Skeleton circle width={128} height={128} />
      </div>

      {/* Информация */}
      <div className="flex-1 mx-6 mt-4 md:mt-0 space-y-3 w-full">
        <Skeleton height={24} width="40%" />
        <Skeleton height={20} width="60%" />
        <Skeleton height={20} width="50%" />
        <Skeleton height={16} width="30%" />
      </div>

      {/* Кнопки */}
      <div className="flex flex-col gap-3 mt-4 md:mt-0 w-24">
        <Skeleton height={40} />
        <Skeleton height={40} />
      </div>
    </div>
  );
}

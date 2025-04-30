import Skeleton from 'react-loading-skeleton';

export default function PetFormSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 max-w-4xl mx-auto mt-8 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Скелетон картинки */}
        <div className="flex flex-col items-center">
          <Skeleton width={192} height={192} circle />
        </div>

        {/* Скелетон формы */}
        <div className="flex flex-col space-y-4 w-full">
          <Skeleton height={48} />
          <Skeleton height={48} />
          <Skeleton height={48} />
          <Skeleton height={48} />
          <Skeleton height={48} />
          <Skeleton height={48} />
          <Skeleton height={48} width={150} />
        </div>
      </div>
    </div>
  );
}

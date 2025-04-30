import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<div className='relative w-screen h-screen overflow-hidden m-0 p-0'>
			<video
				className='absolute top-0 left-0 w-full h-full object-cover'
				autoPlay
				muted
				loop
				playsInline
			>
				<source src='/videos/background.mp4' type='video/mp4' />
			</video>
			<div className='relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30'>
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className='text-6xl font-bold text-blue-600 mb-4 z-10'
				>
					404
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.7 }}
					className='text-2xl text-white mb-8 z-10'
				>
					Страница не найдена
				</motion.p>
				<span
					className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition cursor-pointer z-10'
					onClick={() => navigate('/')}
				>
					Вернуться на главную
				</span>
			</div>
		</div>
	);
}

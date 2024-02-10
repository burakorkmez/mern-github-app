const ExplorePage = () => {
	return (
		<div className='px-4'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img src='/javascript.svg' alt='JavaScript ogo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer' />
				</div>
			</div>
		</div>
	);
};
export default ExplorePage;

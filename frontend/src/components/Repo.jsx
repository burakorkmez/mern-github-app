import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";

const Repo = () => {
	return (
		<li className='mb-10 ms-7'>
			<span
				className='absolute flex items-center justify-center w-6 h-6 bg-blue-100
    rounded-full -start-3 ring-8 ring-white'
			>
				<FaCodeBranch className='w-5 h-5 text-blue-800' />
			</span>
			<div className='flex gap-2 items-center flex-wrap'>
				<a
					href={"https://github.com/burakorkmez/mern-chat-app"}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					mern-chat-app
				</a>
				<span
					className='bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5
        py-0.5 rounded-full flex items-center gap-1'
				>
					<FaRegStar /> 167
				</span>
				<span
					className='bg-purple-100 text-purple-800 text-xs font-medium
         px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCodeFork /> 25
				</span>
				<span
					className='cursor-pointer bg-green-100 text-green-800 text-xs
        font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1'
				>
					<FaCopy /> Clone
				</span>
			</div>

			<time
				className='block my-1 text-xs font-normal leading-none
     text-gray-400'
			>
				Released on Jan 1, 2021
			</time>
			<p className='mb-4 text-base font-normal text-gray-500'>Real Time Chat App | MERN && Socket.io && JWT</p>
			<img src={"/javascript.svg"} alt='Programming language icon' className='h-8' />
		</li>
	);
};
export default Repo;

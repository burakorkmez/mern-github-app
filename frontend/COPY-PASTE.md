# COPY-PASTE LIST FOR THE UI DESIGN

### SETUP THE App.jsx

```jsx
function App() {
	return (
		<div className='flex'>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/signup' element={<SignUpPage />} />
					<Route path='/explore' element={<ExplorePage />} />
					<Route path='/likes' element={<LikesPage />} />
				</Routes>
			</div>
		</div>
	);
}
```

### SIDEBAR.JSX

```jsx
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";

const Sidebar = () => {
	const authUser = false;
	return (
		<aside
			className='flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto border-r bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
		hover:bg-gray-600/10 border-gray-800 text-white'
		>
			<nav className='h-full flex flex-col gap-3'>
				<Link to='/' className='flex justify-center'>
					<img className='h-8' src='/github.svg' alt='Github Logo' />
				</Link>

				<Link
					to='/'
					className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg 
					hover:bg-gray-800'
				>
					<IoHomeSharp size={20} />
				</Link>

				{authUser && (
					<Link
						to='/likes'
						className='p-1.5 flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<FaHeart size={22} />
					</Link>
				)}

				{authUser && (
					<Link
						to='/explore'
						className='p-1.5  flex justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdOutlineExplore size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/login'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<PiSignInBold size={25} />
					</Link>
				)}

				{!authUser && (
					<Link
						to='/signup'
						className='p-1.5 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-800'
					>
						<MdEditDocument size={25} />
					</Link>
				)}
				{authUser && (
					<div className='flex flex-col gap-2 mt-auto'>
						<Logout />
					</div>
				)}
			</nav>
		</aside>
	);
};
```

### LOGOUT COMPONENT

```jsx
import { MdLogout } from "react-icons/md";
// TODO Implement Logout functionality

const Logout = () => {
	return (
		<>
			<img
				src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
				className='w-10 h-10 rounded-full border border-gray-800'
			/>

			<div className='cursor-pointer flex items-center p-2 rounded-lg bg-glass mt-auto border border-gray-800'>
				<MdLogout size={22} />
			</div>
		</>
	);
};
```

### SIGNUP PAGE

```jsx
import { FaGithub, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpPage = () => {
	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
			<div className='w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold md:text-2xl text-center'>Create Account</h1>
					<button
						type='button'
						className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4
						focus:ring-[#24292F]/50 font-medium rounded-lg flex gap-2 p-2 items-center w-full 
						text-center justify-center'
					>
						<FaGithub className='w-5 h-5' />
						Sign up with Github
					</button>
					<p className='text-gray-300'>
						By signing up, you will unlock all the features of the app.
						<span>
							<FaUnlockAlt className='w-4 h-4 inline mx-2' />
						</span>
					</p>
					<p className='text-sm font-light text-gray-500'>
						Already have an account?{" "}
						<Link to='/login' className='font-medium text-primary-600 hover:underline text-blue-600'>
							Login
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
```

### LOGIN PAGE

```jsx
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
			<div className='w-full bg-glass rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
				<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold  md:text-2xl text-center'>Login to your account</h1>
					<button
						type='button'
						className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
						focus:outline-none focus:ring-[#24292F]/50 
              font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center'
					>
						<FaGithub className='w-5 h-5' />
						Login with Github
					</button>
					<p className='text-sm font-light text-gray-500'>
						{"Don't"} have an account?{" "}
						<Link to='/signup' className='font-medium text-primary-600 hover:underline text-blue-600'>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
```

### LIKES PAGE

```jsx
import { FaHeart } from "react-icons/fa";

const LikesPage = () => {
	return (
		<div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
			<table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
				<thead className='text-xs uppercase bg-glass'>
					<tr>
						<th scope='col' className='p-4'>
							<div className='flex items-center'>No</div>
						</th>
						<th scope='col' className='px-6 py-3'>
							Username
						</th>
						<th scope='col' className='px-6 py-3'>
							Date
						</th>
						<th scope='col' className='px-6 py-3'>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className='bg-glass border-b'>
						<td className='w-4 p-4'>
							<div className='flex items-center'>
								<span>1</span>
							</div>
						</td>
						<th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap '>
							<img
								className='w-10 h-10 rounded-full'
								src={"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"}
								alt='Jese image'
							/>
							<div className='ps-3'>
								<div className='text-base font-semibold'>dasdas</div>
							</div>
						</th>
						<td className='px-6 py-4'>das</td>
						<td className='px-6 py-4'>
							<div className='flex items-center'>
								<FaHeart size={22} className='text-red-500 mx-2' />
								Liked your profile
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
```

### EXPLORE PAGE

```jsx
const ExplorePage = () => {
	return (
		<div className='px-4'>
			<div className='bg-glass max-w-2xl mx-auto rounded-md p-4'>
				<h1 className='text-xl font-bold text-center'>Explore Popular Repositories</h1>
				<div className='flex flex-wrap gap-2 my-2 justify-center'>
					<img src='/javascript.svg' alt='JavaScript' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/typescript.svg' alt='TypeScript logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/c++.svg' alt='C++ logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/python.svg' alt='Python logo' className='h-11 sm:h-20 cursor-pointer' />
					<img src='/java.svg' alt='Java logo' className='h-11 sm:h-20 cursor-pointer' />
				</div>
			</div>
		</div>
	);
};
```

### HOME PAGE

```jsx
const HomePage = () => {
	return (
		<div className='m-4'>
			<Search />
			<SortRepos />
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				<ProfileInfo />
				<Repos />
				<Spinner />
			</div>
		</div>
	);
};
```

### SEARCH COMPONENT

```jsx
import { IoSearch } from "react-icons/io5";

const Search = () => {
	return (
		<form className='max-w-xl mx-auto p-2 sm:w-72'>
			<label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only'>
				Search
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center z-10 ps-3 pointer-events-none'>
					<IoSearch className='w-5 h-5' />
				</div>
				<input
					type='search'
					id='default-search'
					className='block w-full p-4 ps-10 text-sm rounded-lg bg-glass focus:ring-blue-500 focus:border-blue-500 bg-transparent focus:bg-transparent '
					placeholder='i.e. johndoe'
					required
				/>
				<button
					type='submit'
					className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  bg-gradient-to-r from-cyan-900 to-blue-900 hover:scale-95 active:scale-90 transition-all duration-300'
				>
					Search
				</button>
			</div>
		</form>
	);
};
```

### SORT REPOS COMPONENT

```jsx
const SortRepos = () => {
	return (
		<div className='mb-2 flex justify-center lg:justify-end'>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
			>
				Most Recent
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
			>
				Most Stars
			</button>
			<button
				type='button'
				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass`}
			>
				Most Forks
			</button>
		</div>
	);
};
```

### PROFILE INFO COMPONENT

```jsx
import { IoLocationOutline } from "react-icons/io5";
import { RiGitRepositoryFill, RiUserFollowFill, RiUserFollowLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";

const ProfileInfo = () => {
	const userProfile = {
		avatar_url: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
		bio: "👨🏻‍💻👨🏻‍💻👨🏻‍💻",
		email: "johndoe@gmail.com",
		followers: 100,
		following: 200,
		html_url: "https://github.com/burakorkmez",
		location: "Somewhere, Earth",
		name: "John Doe",
		public_gists: 100,
		public_repos: 100,
		twitter_username: "johndoe",
		login: "johndoe",
	};

	return (
		<div className='lg:w-1/3 w-full flex flex-col gap-2 md:sticky md:top-10'>
			<div className='bg-glass rounded-lg p-4'>
				<div className='flex gap-4 items-center'>
					{/* User Avatar */}
					<a href={userProfile?.html_url} target='_blank' rel='noreferrer'>
						<img src={userProfile?.avatar_url} className='rounded-md w-24 h-24 mb-2' alt='' />
					</a>
					{/* View on Github */}
					<div className='flex gap-2 items-center flex-col'>
						<a
							href={userProfile.html_url}
							target='_blank'
							rel='noreferrer'
							className='bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2'
						>
							<FaEye size={16} />
							View on Github
						</a>
					</div>
				</div>

				{/* User Bio */}
				{userProfile?.bio ? (
					<div className='flex items-center gap-2'>
						<TfiThought />
						<p className='text-sm'>{userProfile?.bio.substring(0, 60)}...</p>
					</div>
				) : null}

				{/* Location */}
				{userProfile?.location ? (
					<div className='flex items-center gap-2'>
						<IoLocationOutline />
						{userProfile?.location}
					</div>
				) : null}

				{/* Twitter Username */}
				{userProfile?.twitter_username ? (
					<a
						href={`https://twitter.com/${userProfile.twitter_username}`}
						target='_blank'
						rel='noreferrer'
						className='flex items-center gap-2 hover:text-sky-500'
					>
						<FaXTwitter />
						{userProfile?.twitter_username}
					</a>
				) : null}

				{/* Member Since Date */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Member since</p>
					<p className=''>21 Sep, 2023</p>
				</div>

				{/* Email Address */}
				{userProfile?.email && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Email address</p>
						<p className=''>{userProfile.email}</p>
					</div>
				)}

				{/* Full Name */}
				{userProfile?.name && (
					<div className='my-2'>
						<p className='text-gray-600 font-bold text-sm'>Full name</p>
						<p className=''>{userProfile?.name}</p>
					</div>
				)}

				{/* Username */}
				<div className='my-2'>
					<p className='text-gray-600 font-bold text-sm'>Username</p>
					<p className=''>{userProfile?.login}</p>
				</div>
			</div>

			<div className='flex flex-wrap gap-2 mx-4'>
				{/* Followers Count */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Followers: {userProfile?.followers}</p>
				</div>

				{/* Following count */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiUserFollowLine className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Following: {userProfile?.following}</p>
				</div>

				{/* Number of public repos */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Public repos: {userProfile?.public_repos}</p>
				</div>

				{/* Number of public gists */}
				<div className='flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24'>
					<RiGitRepositoryFill className='w-5 h-5 text-blue-800' />
					<p className='text-xs'>Public gists: {userProfile?.public_gists}</p>
				</div>
			</div>
		</div>
	);
};
```

### REPOS COMPONENT

```jsx
import Repo from "./Repo";

const Repos = () => {
	return (
		<div className={`lg:w-2/3 w-full bg-glass rounded-lg px-8 py-6`}>
			<ol className='relative border-s border-gray-200'>
				<Repo />
				<Repo />
				<Repo />
			</ol>
		</div>
	);
};
```

### REPO COMPONENT

```jsx
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
```

### SPINNER COMPONENT

```jsx
const Spinner = () => {
	return (
		<div className='text-center'>
			<div role='status'>
				<svg
					aria-hidden='true'
					className='inline w-8 h-8 text-gray-200 animate-spin fill-blue-600'
					viewBox='0 0 100 101'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
						fill='currentColor'
					/>
					<path
						d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
						fill='currentFill'
					/>
				</svg>
				<span className='sr-only'>Loading...</span>
			</div>
		</div>
	);
};
```

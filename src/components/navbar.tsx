import Image from 'next/image'

import { routes } from '@/app/routes'

import NavLink from './ui/nav-link'

const Navbar = () => {
	return (
		<nav className='h-20 bg-white shadow-md'>
			<div className='flex items-center justify-between container mx-auto h-full'>
				<Image
					src='/images/logo.png'
					alt='em-bunny-logo'
					width={80}
					height={80}
				/>
				<div className='flex gap-6'>
					{routes?.map(({ path, content }) => {
						return (
							<NavLink
								href={path}
								key={path}
							>
								<div className='flex items-center gap-1'>
									{<content.icon />}
									{content.text}
								</div>
							</NavLink>
						)
					})}
				</div>
				<button
					type='button'
					title='Liên hệ'
				>
					Liên hệ
				</button>
			</div>
		</nav>
	)
}

export default Navbar

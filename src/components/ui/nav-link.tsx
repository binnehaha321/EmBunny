'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

interface IProps {
	href: string
	children: React.ReactNode
}

const NavLink = ({ href, children }: IProps) => {
	const pathname = usePathname()

	return (
		<Link
			href={href}
			className={cn('', {
				'text-base': href === pathname
			})}
		>
			<div className='flex gap-3'></div>
			{children}
		</Link>
	)
}

export default NavLink

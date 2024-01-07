import {
	AppetiziersIcon,
	DetoxIcon,
	HomeIcon,
	MainDishIcon
} from '@/components/ui/icons'

interface IRoute {
	path: string
	content: {
		icon: () => JSX.Element
		text: string
	}
	children?: IRoute[]
}

export const routes: IRoute[] = [
	{
		path: '/',
		content: {
			icon: HomeIcon,
			text: 'Trang chủ'
		}
	},
	{
		path: '/main-dish',
		content: {
			icon: MainDishIcon,
			text: 'Bữa chính'
		}
	},
	{
		path: '/appetizers',
		content: {
			icon: AppetiziersIcon,
			text: 'Tráng miệng'
		}
	},
	{
		path: '/detox',
		content: {
			icon: DetoxIcon,
			text: 'Thanh lọc'
		}
	}
]

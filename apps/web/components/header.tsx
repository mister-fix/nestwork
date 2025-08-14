import { Button } from '@repo/ui/components/button';
import { Separator } from '@repo/ui/components/separator';
import { cn } from '@repo/ui/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { LogoImage } from '@/components/logo-image';
import { ThemeToggler } from '@/components/theme-toggler';

import logoLight from '@repo/assets/branding/nestwork-light.svg';
import logoPrimary from '@repo/assets/branding/nestwork-primary.svg';

const menuItems = [
	{ label: 'Product', path: '#' },
	{ label: 'Resources', path: '#' },
	{ label: 'Pricing', path: '#' },
	{ label: 'Customers', path: '#' },
	{ label: 'Docs', path: '#' },
	{ label: 'Contact', path: '#' },
];

export function Header() {
	const { theme } = useTheme();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<header
			className={cn(
				'fixed z-20 h-18 w-full items-center justify-start border-b bg-transparent backdrop-blur transition-all',
				isScrolled ?
					'border-neutral-100 dark:border-neutral-900'
				:	'border-b-transparent',
			)}
		>
			<div className="container mx-auto flex h-full items-center justify-start px-4 sm:px-6">
				{/* Navbar brand */}
				<Link href="/">
					<LogoImage
						alt="Nestwork logo"
						height={28}
						width={120}
						srcDark={logoLight}
						srcLight={logoPrimary}
					/>
				</Link>

				{/* Desktop navigation */}
				<nav className="ms-4 hidden items-center justify-start space-x-1 lg:flex">
					{menuItems.map((item) => (
						<Link
							key={item.label}
							className="text-foreground/60 hover:text-foreground/100 text-sm font-medium transition-colors duration-150"
							href={item.path}
						>
							<Button
								size="sm"
								variant="ghost"
							>
								{item.label}
							</Button>
						</Link>
					))}
				</nav>

				{/* Header right */}
				<div className="ms-auto flex items-center space-x-4">
					<div className="flex items-center space-x-2">
						<Link href="/sign-in">
							<Button variant={theme === 'light' ? 'outline' : 'ghost'}>
								Sign in
							</Button>
						</Link>
						<Link href="/sign-up">
							<Button variant={theme === 'light' ? 'default' : 'default'}>
								Sign up
							</Button>
						</Link>
					</div>
					<Separator
						className="w-px data-[orientation=vertical]:min-h-10"
						orientation="vertical"
					/>
					<div className="flex items-center space-x-2">
						<ThemeToggler />
						<Link
							className="hidden h-8 w-8 items-center justify-center lg:flex"
							href="https://github.com/mister-fix/nestwork#readme"
							rel="noreferrer noopener"
							target="_blank"
						>
							<Button
								className="group px-2 py-px transition-all duration-200"
								size="icon"
								variant="ghost"
							>
								<Image
									className="opacity-50 transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert"
									alt="GitHub icon"
									src="/icons/github.svg"
									height={16}
									width={16}
								/>
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

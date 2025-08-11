'use client';

import { Button } from '@repo/ui/components/button';
import { Separator } from '@repo/ui/components/separator';
import { cn } from '@repo/ui/lib/utils';
import { Moon, Sun, TvMinimal } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image, { type ImageProps } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';

import logoDark from '@repo/assets/branding/nestwork-light.svg';
import logoLight from '@repo/assets/branding/nestwork-primary.svg';

type LogoImageProps = Omit<ImageProps, 'src'> & {
	srcDark: string;
	srcLight: string;
};

export const LogoImage = (props: LogoImageProps) => {
	const { srcDark, srcLight, ...rest } = props;

	return (
		<>
			<Image
				className="block dark:hidden"
				src={srcLight}
				height={28}
				width={120}
				{...rest}
			/>
			<Image
				className="hidden dark:block"
				src={srcDark}
				height={28}
				width={120}
				{...rest}
			/>
		</>
	);
};

export function Header() {
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { setTheme, theme } = useTheme();
	const pathname = usePathname();
	const isDesktop = useMediaQuery('(min-width: 1024px)');

	useEffect(() => {
		if (isDesktop && isOpen) {
			setIsOpen(false);
		}
		setMounted(true);
	}, [isDesktop, isOpen]);

	const menuItems = [
		{ label: 'Product', path: '#' },
		{ label: 'Features', path: '#' },
		{ label: 'Pricing', path: '#' },
		{ label: 'Blog', path: '#' },
		{ label: 'Docs', path: `${process.env.NEXT_PUBLIC_DOCS_URL}` },
		{ label: 'Contact', path: '#' },
	];

	return (
		<div className="relative h-full">
			<header className="bg-background/80 fixed top-0 z-50 w-full backdrop-blur">
				<div className="container mx-auto flex h-18 w-full items-center justify-start px-4 sm:px-6">
					{/* Logo */}
					<Link href="/">
						<LogoImage
							alt="Nestwork logo"
							srcDark={logoDark}
							srcLight={logoLight}
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="ms-8 me-auto hidden items-center gap-6 lg:flex">
						{menuItems.map((item) => (
							<Link
								key={item.label}
								className={cn(
									'hover:text-foreground/80 text-sm font-medium transition-colors',
									pathname === item.path ?
										'text-foreground'
									:	'text-foreground/60',
								)}
								href={item.path}
							>
								{item.label}
							</Link>
						))}
					</nav>

					{/* Desktop Right Side */}
					<div className="ms-auto flex items-center space-x-3">
						<div className="hidden border-neutral-100 sm:space-y-0 sm:space-x-3 md:w-fit lg:flex lg:flex-row dark:border-neutral-900">
							<Button
								asChild
								variant="outline"
							>
								<Link href="/login">Log in</Link>
							</Button>
							<Button asChild>
								<Link href="/signup">Sign up</Link>
							</Button>
						</div>

						<Separator
							className="bg-foreground/10 hidden lg:block"
							style={{ height: '38px' }}
							orientation="vertical"
						/>

						<div className="ml-auto flex items-center space-x-3">
							<Link
								className="hidden lg:block"
								href="https://github.com/mister-fix/nestwork#readme"
								rel="noreferrer noopener"
								target="_blank"
							>
								<Button
									className="group px-2 py-px duration-200"
									size="icon"
									variant="outline"
								>
									<Image
										className="opacity-50 transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert"
										aria-hidden
										alt="Github icon"
										src="/icons/github.svg"
										height={16}
										width={16}
									/>
								</Button>
							</Link>

							{/* Theme toggle */}
							{!mounted ?
								<div className="flex items-center justify-center space-x-1 rounded-full border py-0.5 lg:ms-0 lg:px-0.5">
									<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-900" />
									<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-900" />
									<div className="hidden h-8 w-8 rounded-full bg-neutral-100 lg:block dark:bg-neutral-900" />
								</div>
							:	<div className="flex rounded-full border px-0.5 py-0.5 lg:ms-0 lg:space-x-1">
									<Button
										className="flex h-8 w-8 items-center justify-center rounded-full"
										size="sm"
										onClick={() => setTheme('light')}
										variant={theme === 'light' ? 'secondary' : 'ghost'}
									>
										<Sun className="text-foreground h-4 w-4" />
									</Button>
									<Button
										className="flex h-8 w-8 items-center justify-center rounded-full"
										size="sm"
										onClick={() => setTheme('dark')}
										variant={theme === 'dark' ? 'secondary' : 'ghost'}
									>
										<Moon className="text-foreground h-4 w-4" />
									</Button>
									<Button
										className="hidden h-8 w-8 items-center justify-center rounded-full lg:flex"
										size="sm"
										onClick={() => setTheme('system')}
										variant={theme === 'system' ? 'secondary' : 'ghost'}
									>
										<TvMinimal className="text-foreground h-4 w-4" />
									</Button>
								</div>
							}
						</div>
					</div>

					{/* Mobile menu button */}
					<Button
						className="ms-4 me-0 w-max border-0 bg-transparent p-0 shadow-none hover:bg-transparent lg:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						<div className="flex items-center space-x-2">
							<div className="relative flex h-8 w-4 items-center justify-center">
								<div className="relative size-4">
									<>
										<span
											className={cn(
												'bg-foreground absolute top-1 left-0 block h-0.5 w-4 transition-all duration-100',
												isOpen && 'top-1.5 rotate-45',
											)}
										></span>
										<span
											className={cn(
												'bg-foreground absolute top-2.5 left-0 block h-0.5 w-4 transition-all duration-100',
												isOpen && 'top-1.5 -rotate-45',
											)}
										></span>
									</>
								</div>
								<span className="sr-only">Toggle Menu</span>
							</div>
							<span className="text-foreground flex h-8 items-center text-lg leading-none font-medium">
								Menu
							</span>
						</div>
					</Button>
				</div>
			</header>
			{/* Mobile Navigation */}
			{isOpen && (
				<div
					className={cn(
						'bg-background/80 fixed top-[60px] z-20 h-[calc(100dvh-60px)] w-full backdrop-blur-md transition-all lg:hidden',
						!isOpen && 'hidden',
					)}
				>
					<div className="relative mx-auto h-full w-full">
						<div className="container mx-auto px-4 pt-[12px] sm:px-6">
							<div className="space-y-1 pe-2 pt-2 pb-3">
								{menuItems.map((item) => (
									<Link
										key={item.label}
										className="block rounded-md py-2"
										href={item.path}
										onClick={() => setIsOpen(false)}
									>
										<span className="text-foreground text-2xl font-medium text-balance sm:text-base">
											{item.label}
										</span>
									</Link>
								))}
							</div>
						</div>

						<div className="absolute bottom-0 left-0 flex h-17 w-full items-center justify-start space-x-6 border-t border-neutral-100 px-4 text-white sm:px-6 dark:border-neutral-900">
							<div className="flex items-center space-x-3">
								<Link
									href="https://github.com/mister-fix/nestwork#readme"
									rel="noreferrer noopener"
									target="_blank"
								>
									<Button
										className="group px-2 py-px duration-200"
										size="icon"
										variant="outline"
									>
										<Image
											className="opacity-50 transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert"
											aria-hidden
											alt="Github icon"
											src="/icons/github.svg"
											height={16}
											width={16}
										/>
									</Button>
								</Link>

								{/* Theme toggle */}
								{!mounted ?
									<div className="flex items-center justify-center space-x-1 rounded-full border px-0.5 py-0.5">
										<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-900" />
										<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-900" />
										<div className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-900" />
									</div>
								:	<div className="flex space-x-1 rounded-full border px-0.5 py-0.5">
										<Button
											className="flex h-8 w-8 items-center justify-center rounded-full"
											size="sm"
											onClick={() => setTheme('light')}
											variant={theme === 'light' ? 'secondary' : 'ghost'}
										>
											<Sun className="text-foreground h-4 w-4" />
										</Button>
										<Button
											className="flex h-8 w-8 items-center justify-center rounded-full"
											size="sm"
											onClick={() => setTheme('dark')}
											variant={theme === 'dark' ? 'secondary' : 'ghost'}
										>
											<Moon className="text-foreground h-4 w-4" />
										</Button>
										<Button
											className="flex h-8 w-8 items-center justify-center rounded-full"
											size="sm"
											onClick={() => setTheme('system')}
											variant={theme === 'system' ? 'secondary' : 'ghost'}
										>
											<TvMinimal className="text-foreground h-4 w-4" />
										</Button>
									</div>
								}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

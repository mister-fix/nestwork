'use client';

import { Button } from '@repo/ui/components/button';
import { cn } from '@repo/ui/lib/utils';
import { Moon, Sun } from 'lucide-react';
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

const LogoImage = (props: LogoImageProps) => {
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
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('light');
	const isDesktop = useMediaQuery('(min-width: 1024px)');

	useEffect(() => {
		if (isDesktop && isOpen) {
			setIsOpen(false);
		}
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
		<header className="bg-background/90 sticky top-0 z-50 w-full backdrop-blur">
			<div className="container mx-auto flex h-18 w-full items-center justify-between px-4 sm:px-6">
				{/* Logo */}
				<Link href="/">
					<LogoImage
						alt="Nestwork logo"
						srcDark={logoDark}
						srcLight={logoLight}
					/>
				</Link>

				{/* Mobile menu button */}
				<Button
					className="ms-auto me-0 w-max bg-transparent p-0 hover:bg-transparent lg:hidden"
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
				<div className="">
					<div className="hidden lg:flex">
						<div className="border-neutral-900 sm:flex-row sm:space-y-0 sm:space-x-3 md:w-fit lg:flex lg:border-r lg:pr-3">
							<Button
								size="sm"
								asChild
								variant="outline"
							>
								<Link href="/login">Log in</Link>
							</Button>
							<Button
								size="sm"
								asChild
							>
								<Link href="/signup">Sign up</Link>
							</Button>
						</div>

						<Button
							size="icon"
							asChild
							variant="ghost"
						>
							<Link
								href="https://github.com/mister-fix/nestwork#readme"
								rel="noreferrer"
								target="_blank"
							>
								<Image
									className="opacity-50 invert transition-opacity duration-200"
									aria-hidden
									alt="Github icon"
									src="/icons/github.svg"
									height={16}
									width={16}
								/>
							</Link>
						</Button>

						{/* Theme toggle */}
						<Button
							size="icon"
							onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
							variant="ghost"
						>
							{theme === 'light' ?
								<Sun className="h-4 w-4" />
							:	<Moon className="h-4 w-4" />}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div
					className={cn(
						'bg-background/80 absolute top-[72px] left-0 z-20 h-screen w-screen backdrop-blur-xl transition-all lg:hidden',
						!isOpen && 'hidden',
					)}
					style={{
						height: 'calc(100dvh - 72px)',
					}}
				>
					<div className="relative mx-auto h-full w-full">
						<div className="container mx-auto px-4 sm:px-6">
							<div className="space-y-1 pe-2 pt-2 pb-3">
								{menuItems.map((item) => (
									<Link
										key={item.label}
										className="block rounded-md py-2"
										href={item.path}
										onClick={() => setIsOpen(false)}
									>
										<span className="text-2xl font-medium text-balance text-white sm:text-base">
											{item.label}
										</span>
									</Link>
								))}
							</div>
						</div>

						<div className="absolute bottom-0 left-0 flex h-17 w-full items-center justify-start space-x-6 border-t border-neutral-900 px-4 text-white sm:px-6">
							<div className="flex items-center gap-x-4">
								<Link
									href="https://github.com/mister-fix/nestwork#readme"
									rel="noreferrer noopener"
									target="_blank"
								>
									<Button
										className="group px-2 py-px duration-200 hover:[&_img]:opacity-100 hover:[&_img]:invert-0"
										size="sm"
										variant="ghost"
									>
										<Image
											className="opacity-50 invert transition-opacity duration-200"
											aria-hidden
											alt="Github icon"
											src="/icons/github.svg"
											height={18}
											width={18}
										/>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	);
}

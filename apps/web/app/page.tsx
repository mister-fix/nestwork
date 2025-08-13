'use client';

import { Button } from '@repo/ui/components/button';
import { useTheme } from 'next-themes';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { LogoImage } from '@/components/logo-image';
import { ThemeToggler } from '@/components/theme-toggler';

import iconLight from '@repo/assets/branding/icon-dark.svg';
import iconDark from '@repo/assets/branding/icon-light.svg';

import '@repo/ui/styles/globals.css';

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-plus-jakarta-sans',
});

export default function Home() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="flex h-screen w-screen flex-col">
			<header className="flex h-18 w-full items-center justify-end space-x-4 px-4 sm:px-6">
				{!mounted ?
					<Button size="icon"></Button>
				:	<ThemeToggler />}

				<div className="flex items-center space-x-2">
					<Link href="/sign-in">
						<Button variant={theme === 'light' ? 'secondary' : 'outline'}>
							Sign in
						</Button>
					</Link>
					<Link href="/sign-up">
						<Button variant={theme === 'light' ? 'default' : 'secondary'}>
							Sign up
						</Button>
					</Link>
				</div>
			</header>
			<main className="flex flex-1 flex-col items-center justify-center">
				<div
					className={`flex items-end justify-center gap-x-2 ${plusJakarta.className} antialiased`}
				>
					<div className="animate-spin transition-all duration-300 [animation-duration:5s]">
						<LogoImage
							aria-expanded="false"
							alt="Nestwork logo icon"
							height={35}
							width={35}
							srcDark={iconDark}
							srcLight={iconLight}
						/>
					</div>
					<h1 className="text-4xl font-semibold -tracking-widest text-[#121216] dark:text-[#fefefe]">
						nestwork
					</h1>
				</div>
			</main>

			<footer className="flex h-17 w-full items-center justify-center">
				<div className="divide-x-muted flex flex-col items-start gap-x-2 divide-y px-4 sm:gap-x-6 sm:divide-x-0 sm:px-6 md:flex-row md:items-center md:divide-x-1 md:divide-y-0">
					<Link
						className="flex items-center gap-x-1 pe-2 sm:pe-0"
						href={`${process.env.NEXT_PUBLIC_DOCS_URL}`}
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							aria-hidden
							alt="Window icon"
							src="/icons/window.svg"
							height={16}
							width={16}
						/>
						<span>View documentation</span>
					</Link>
					<Link
						className="flex items-center gap-x-1"
						href="https://github.com/mister-fix/nestwork#readme"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							aria-hidden
							alt="Globe icon"
							src="/icons/globe.svg"
							height={16}
							width={16}
						/>
						<span className="block items-center gap-x-0 sm:flex sm:gap-x-1">
							Visit project repository <i className="hidden sm:block">→</i>
						</span>
					</Link>
				</div>
			</footer>
		</div>
	);
}

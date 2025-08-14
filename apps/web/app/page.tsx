'use client';

// import { Plus_Jakarta_Sans } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';

// import { LogoImage } from '@/components/logo-image';
// import iconLight from '@repo/assets/branding/icon-dark.svg';
// import iconDark from '@repo/assets/branding/icon-light.svg';
import '@repo/ui/styles/globals.css';

// const plusJakarta = Plus_Jakarta_Sans({
// 	subsets: ['latin'],
// 	variable: '--font-plus-jakarta-sans',
// });

export default function Home() {
	return (
		<div className="flex h-full w-full flex-col">
			<Header />

			<main className="flex flex-1 flex-col items-center justify-center">
				{/* <div
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
				</div> */}
				<Hero />
			</main>

			{/* <footer className="flex h-17 w-full items-center justify-center">
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
			</footer> */}
			<Footer />
		</div>
	);
}

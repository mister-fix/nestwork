import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import icon from '@repo/assets/branding/icon-light.svg';

import '@repo/ui/styles/globals.css';

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-plus-jakarta-sans',
});

export default function Home() {
	return (
		<div className="bg-background/80 flex h-screen w-screen flex-col">
			<main className="flex flex-1 flex-col items-center justify-center">
				<div
					className={`flex items-end justify-center gap-x-2 ${plusJakarta.className} antialiased`}
				>
					<div className="animate-spin transition-all duration-300 [animation-duration:5s]">
						<Image
							aria-expanded="false"
							alt="Nestwork logo icon"
							src={icon}
							height={35}
							width={35}
						/>
					</div>
					<h1 className="text-foreground text-4xl font-semibold -tracking-widest">
						nestwork
					</h1>
				</div>
			</main>

			<footer className="flex h-17 w-full items-center justify-center">
				<div className="divide-x-muted flex items-center gap-x-2 divide-x px-4 sm:gap-x-6 sm:divide-x-0 sm:px-6">
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

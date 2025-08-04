import icon from '@repo/assets/branding/icon-dark.svg';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const plusJakarta = Plus_Jakarta_Sans({
	subsets: ['latin'],
	variable: '--font-plus-jakarta-sans',
});

export default function Home() {
	return (
		<div className="flex h-screen w-screen flex-col">
			<main className="flex flex-1 flex-col items-center justify-center">
				<div
					className={`flex items-end justify-center gap-x-2 ${plusJakarta.className} antialiased`}
				>
					<div className="animate-spin transition-all duration-300 [animation-duration:5s]">
						<Image
							alt="Nestwork logo icon"
							height={35}
							src={icon}
							width={35}
						/>
					</div>
					<h1 className="text-4xl font-semibold -tracking-widest text-[#121216]">
						nestwork
					</h1>
				</div>
			</main>

			<footer className="flex h-17 w-full items-center justify-center">
				<div className="divide-x-muted flex items-center gap-x-2 divide-x px-4 sm:gap-x-6 sm:divide-x-0 sm:px-6">
					<Link
						className="flex items-center gap-x-1 pe-2 sm:pe-0"
						href="http://localhost:3001"
						rel="noopener noreferrer"
						target="_blank"
					>
						<Image
							alt="Window icon"
							aria-hidden
							height={16}
							src="/window.svg"
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
							alt="Globe icon"
							aria-hidden
							height={16}
							src="/globe.svg"
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

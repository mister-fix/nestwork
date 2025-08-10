import Image from 'next/image';
import Link from 'next/link';

import logo from '@repo/assets/branding/nestwork-light.svg';

export default function Home() {
	return (
		<div className="flex h-screen w-screen flex-col bg-[#101010]">
			<header className="h-17 w-full px-4 sm:px-6">
				<nav className="flex h-full w-full items-center justify-between">
					<div className="container mx-auto h-full max-w-7xl">
						<div className="flex h-full w-full items-center justify-start">
							<Link href="#">
								<Image
									alt="Nestwork logo"
									src={logo}
									height={28}
									width={110}
								/>
							</Link>
						</div>
					</div>
				</nav>
			</header>

			<main className="flex flex-1 flex-col items-center justify-center">
				<ul>
					<li className="text-white">Currently under construction.</li>
				</ul>
			</main>

			<footer className="flex h-17 w-full items-center justify-center">
				<div className="divide-x-muted flex items-center gap-x-2 divide-x px-4 sm:gap-x-6 sm:divide-x-0 sm:px-6">
					<Link
						className="flex items-center gap-x-1 pe-2 sm:pe-0"
						href={`${process.env.NEXT_PUBLIC_WEB_URL}`}
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
						<span className="text-white">Visit Nestwork</span>
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
						<span className="block items-center gap-x-0 text-white sm:flex sm:gap-x-1">
							View project repository <i className="hidden sm:block">→</i>
						</span>
					</Link>
				</div>
			</footer>
		</div>
	);
}

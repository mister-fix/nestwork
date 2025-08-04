import logo from '@repo/assets/branding/nestwork-light.svg';
import Image from 'next/image';
import Link from 'next/link';

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
									height={28}
									src={logo}
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
						href="http://localhost:3000"
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
						<span className="text-white">Visit Nestwork</span>
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
						<span className="block items-center gap-x-0 text-white sm:flex sm:gap-x-1">
							View project repository <i className="hidden sm:block">→</i>
						</span>
					</Link>
				</div>
			</footer>
		</div>
	);
}

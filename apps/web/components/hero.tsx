import { Button } from '@repo/ui/components/button';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
	return (
		<section className="relative h-full w-full py-36">
			<div
				className="absolute inset-0 isolate z-2 hidden opacity-50 contain-strict lg:block"
				aria-hidden
			>
				<div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				<div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
			</div>

			<div className="overflow-hidden bg-white dark:bg-transparent">
				<div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
					<div className="relative z-10 mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-semibold tracking-tighter text-balance md:text-5xl lg:text-7xl">
							Supercharge your team&apos;s workspace
						</h1>
						<p className="mx-auto my-8 max-w-2xl text-xl">
							Officiis laudantium excepturi ducimus rerum dignissimos, and
							tempora nam vitae, excepturi ducimus iste provident dolores.
						</p>

						<div className="flex items-center justify-center space-x-2">
							<Link href="/sign-up">
								<Button
									className="min-w-[160px]"
									size="lg"
								>
									Create workspace
								</Button>
							</Link>
							<Link href="/">
								<Button
									className="min-w-[160px]"
									size="lg"
									variant="outline"
								>
									Learn more
								</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className="mx-auto -mt-16 max-w-7xl">
					<div className="-mr-16 pl-16 perspective-distant lg:-mr-56 lg:pl-56">
						<div className="[transform:rotateX(20deg)]">
							<div className="relative skew-x-[0.36rad] lg:h-176">
								<div
									className="from-background to-background absolute -inset-16 z-1 bg-linear-to-b via-transparent sm:-inset-32"
									aria-hidden
								/>
								<div
									className="from-background to-background absolute -inset-16 z-1 bg-white/50 bg-linear-to-r via-transparent sm:-inset-32 dark:bg-transparent"
									aria-hidden
								/>

								<div
									className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]"
									aria-hidden
								/>
								<div
									className="from-background absolute inset-0 z-11 bg-gradient-to-l"
									aria-hidden
								/>
								<div
									className="absolute inset-0 z-2 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
									aria-hidden
								/>
								<div
									className="absolute inset-0 z-2 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]"
									aria-hidden
								/>

								<Image
									className="relative z-1 rounded-(--radius) border dark:hidden"
									alt="Nestwork hero section"
									src="/images/placeholder-light.png"
									height={2074}
									width={2880}
								/>
								<Image
									className="relative z-1 hidden rounded-(--radius) border dark:block"
									alt="Nestwork hero section"
									src="/images/placeholder-dark.png"
									height={2074}
									width={2880}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

import { Button } from '@repo/ui/components/button';
import { Card, CardContent, CardHeader } from '@repo/ui/components/card';
import { Cpu, Globe, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Comparator } from '@/components/comparator';
import { Integrations } from '@/components/integrations';

import '@repo/ui/styles/globals.css';

export default function Home() {
	return (
		<div className="bg-background/80 relative flex h-full w-full flex-col">
			<main className="flex-1">
				<div
					className="absolute inset-0 isolate z-2 hidden opacity-50 contain-strict lg:block"
					aria-hidden
				>
					<div className="absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
					<div className="absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
					<div className="absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				</div>

				<section className="overflow-hidden bg-white dark:bg-transparent">
					<div className="relative mx-auto max-w-7xl px-6 py-28 md:py-32">
						<div className="relative z-10 mx-auto max-w-2xl text-center">
							<h1 className="text-4xl font-semibold text-balance md:text-5xl lg:text-6xl">
								Modern Software testing reimagined
							</h1>
							<p className="mx-auto my-8 max-w-2xl text-xl">
								Officiis laudantium excepturi ducimus rerum dignissimos, and
								tempora nam vitae, excepturi ducimus iste provident dolores.
							</p>

							<div className="flex items-center justify-center space-x-4">
								<Button
									size="lg"
									asChild
								>
									<Link href="#">
										<span className="btn-label">Get started</span>
									</Link>
								</Button>

								<Button
									size="lg"
									asChild
									variant="outline"
								>
									<Link href="#">
										<span className="btn-label">Learn more</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>

					<div className="mx-auto -mt-16 h-full max-w-7xl">
						<div className="perspective-distant">
							<div className="[transform:rotateX(20deg);]">
								<div className="relative skew-x-[.36rad] lg:h-176">
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
										alt="Placeholder for light mode"
										src="/dashboard-light.png"
										height={2074}
										width={2880}
									/>
									<Image
										className="relative z-1 hidden rounded-(--radius) border dark:block"
										alt="Placeholder for dark mode"
										src="/dashboard.png"
										height={2074}
										width={2880}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-background relative z-10 py-16">
					<div className="m-auto max-w-7xl px-6">
						<h2 className="text-center text-lg font-medium">
							Your favorite companies are our partners.
						</h2>
						<div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
							<Image
								className="h-5 w-fit dark:invert"
								alt="Nvidia Logo"
								src="https://html.tailus.io/blocks/customers/nvidia.svg"
								height={20}
								width={120}
								style={{ height: '20px', width: 'auto' }}
							/>
							<Image
								className="h-4 w-fit dark:invert"
								alt="Column Logo"
								src="https://html.tailus.io/blocks/customers/column.svg"
								height={'16'}
								width={'100'}
								style={{ height: '16', width: 'auto' }}
							/>
							<Image
								className="h-4 w-fit dark:invert"
								alt="GitHub Logo"
								src="https://html.tailus.io/blocks/customers/github.svg"
								height="16"
								width="100"
								style={{ height: '16px', width: 'auto' }}
							/>
							<Image
								className="h-5 w-fit dark:invert"
								alt="Nike Logo"
								src="https://html.tailus.io/blocks/customers/nike.svg"
								height={20}
								width={120}
								style={{ height: '20px', width: 'auto' }}
							/>
							<Image
								className="h-4 w-fit dark:invert"
								alt="Laravel Logo"
								src="https://html.tailus.io/blocks/customers/laravel.svg"
								height="16"
								width="100"
								style={{ height: '16px', width: 'auto' }}
							/>
							<Image
								className="h-7 w-fit dark:invert"
								alt="Lilly Logo"
								src="https://html.tailus.io/blocks/customers/lilly.svg"
								height="28"
								width="100"
								style={{ height: '28px', width: 'auto' }}
							/>
							<Image
								className="h-5 w-fit dark:invert"
								alt="Lemon Squeezy Logo"
								src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
								height="20"
								width="100"
								style={{ height: '20px', width: 'auto' }}
							/>
							<Image
								className="h-6 w-fit dark:invert"
								alt="OpenAI Logo"
								src="https://html.tailus.io/blocks/customers/openai.svg"
								height="24"
								width="100"
								style={{ height: '24px', width: 'auto' }}
							/>
							<Image
								className="h-4 w-fit dark:invert"
								alt="Tailwind CSS Logo"
								src="https://html.tailus.io/blocks/customers/tailwindcss.svg"
								height="16"
								width="100"
								style={{ height: '16px', width: 'auto' }}
							/>
							<Image
								className="h-5 w-fit dark:invert"
								alt="Vercel Logo"
								src="https://html.tailus.io/blocks/customers/vercel.svg"
								height="20"
								width="100"
								style={{ height: '20px', width: 'auto' }}
							/>
							<Image
								className="h-5 w-fit dark:invert"
								alt="Zapier Logo"
								src="https://html.tailus.io/blocks/customers/zapier.svg"
								height="20"
								width="100"
								style={{ height: '20px', width: 'auto' }}
							/>
						</div>
					</div>
				</section>

				<section className="py-16 md:py-32">
					<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
						<h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
							The Lyra ecosystem brings together our models.
						</h2>
						<div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
							<div className="relative space-y-4">
								<p className="text-muted-foreground">
									Gemini is evolving to be more than just the models.{' '}
									<span className="text-accent-foreground font-bold">
										It supports an entire ecosystem
									</span>{' '}
									— from products innovate.
								</p>
								<p className="text-muted-foreground">
									It supports an entire ecosystem — from products to the APIs
									and platforms helping developers and businesses innovate
								</p>

								<div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
									<div className="space-y-3">
										<div className="flex items-center gap-2">
											<Zap className="size-4" />
											<h3 className="text-sm font-medium">Faaast</h3>
										</div>
										<p className="text-muted-foreground text-sm">
											It supports an entire helping developers and innovate.
										</p>
									</div>
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<Cpu className="size-4" />
											<h3 className="text-sm font-medium">Powerful</h3>
										</div>
										<p className="text-muted-foreground text-sm">
											It supports an entire helping developers and businesses.
										</p>
									</div>
								</div>
							</div>
							<div className="relative mt-6 sm:mt-0">
								<div className="relative aspect-67/34 rounded-2xl bg-linear-to-b from-zinc-300 to-transparent p-px dark:from-zinc-700">
									<Image
										className="hidden rounded-[15px] dark:block"
										alt="payments illustration dark"
										src="/exercise-dark.png"
										height={612}
										width={1206}
									/>
									<Image
										className="rounded-[15px] shadow dark:hidden"
										alt="payments illustration light"
										src="/exercise.png"
										height={612}
										width={1206}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="from-background/30 to-background/80 dark:from-background/80 dark:to-background/80 bg-gradient-to-b via-neutral-100 py-16 md:py-32 dark:via-neutral-900">
					<div className="mx-auto max-w-7xl px-6">
						<div className="mx-auto grid gap-2 sm:grid-cols-5">
							<Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
								<CardHeader>
									<div className="md:p-6">
										<p className="font-medium">Advanced tracking system</p>
										<p className="text-muted-foreground mt-3 max-w-sm text-sm">
											Quick AI lives a single hotkey away - ready to quickly
											appear as a floating window above your other apps..
										</p>
									</div>
								</CardHeader>

								<div className="relative h-fit pl-6 md:pl-12">
									<div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

									<div className="bg-background overflow-hidden rounded-tl-lg border-t border-l pt-2 pl-2 dark:bg-zinc-950">
										<Image
											className="hidden dark:block"
											alt="payments illustration dark"
											src="/mail2.png"
											height={929}
											width={1207}
										/>
										<Image
											className="shadow dark:hidden"
											alt="payments illustration light"
											src="/mail2-light.png"
											height={929}
											width={1207}
										/>
									</div>
								</div>
							</Card>

							<Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
								<p className="mx-auto my-6 max-w-md px-6 text-center text-lg font-semibold text-balance sm:text-2xl md:p-6">
									Advanced UX, Instantly locate all your assets.
								</p>

								<CardContent className="mt-auto h-fit">
									<div className="relative mb-6 sm:mb-0">
										<div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
										<div className="aspect-76/59 overflow-hidden rounded-r-lg border">
											<Image
												className="hidden dark:block"
												alt="payments illustration dark"
												src="/origin-cal-dark.png"
												height={929}
												width={1207}
											/>
											<Image
												className="shadow dark:hidden"
												alt="payments illustration light"
												src="/origin-cal.png"
												height={929}
												width={1207}
											/>
										</div>
									</div>
								</CardContent>
							</Card>
							<Card className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
								<p className="mx-auto mb-12 max-w-md text-center text-lg font-semibold text-balance sm:text-2xl">
									Advanced UX, Instantly locate all your assets.
								</p>

								<div className="flex justify-center gap-6">
									<div className="bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring inset-shadow-sm dark:shadow-white/5 dark:ring-black dark:inset-shadow-white/5">
										<span className="absolute top-1 right-2 block text-sm">
											fn
										</span>
										<Globe className="mt-auto size-4" />
									</div>
									<div className="bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring inset-shadow-sm dark:shadow-white/5 dark:ring-black dark:inset-shadow-white/5">
										<span>K</span>
									</div>
								</div>
							</Card>
							<Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
								<CardHeader className="p-6 md:p-12">
									<p className="font-medium">Advanced tracking system</p>
									<p className="text-muted-foreground mt-2 max-w-sm text-sm">
										Quick AI lives a single hotkey away apps..
									</p>
								</CardHeader>
								<CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
									<div className="grid grid-cols-4 gap-2 md:grid-cols-6">
										<div className="aspect-square rounded-(--radius) border border-dashed"></div>
										<div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
											<Image
												className="m-auto size-8 invert dark:invert-0"
												alt="Linear logo"
												src="https://oxymor-ns.tailus.io/logos/linear.svg"
												height="32"
												width="32"
											/>
										</div>
										<div className="aspect-square rounded-(--radius) border border-dashed"></div>
										<div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
											<Image
												className="m-auto size-8 invert dark:invert-0"
												alt="Netlify logo"
												src="https://oxymor-ns.tailus.io/logos/netlify.svg"
												height="32"
												width="32"
											/>
										</div>
										<div className="aspect-square rounded-(--radius) border border-dashed"></div>
										<div className="bg-muted/50 flex aspect-square items-center justify-center rounded-(--radius) border p-4">
											<Image
												className="m-auto size-8 invert dark:invert-0"
												alt="github logo"
												src="https://oxymor-ns.tailus.io/logos/github.svg"
												height="32"
												width="32"
											/>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section className="py-16 md:py-32">
					<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
						<div className="relative z-10 max-w-xl space-y-6">
							<h2 className="text-4xl font-medium lg:text-5xl">
								The Gemini ecosystem brings together our models.
							</h2>
							<p>
								Gemini is evolving to be more than just the models.{' '}
								<span className="font-medium">
									It supports an entire ecosystem
								</span>{' '}
								— from products innovate.
							</p>
						</div>
						<div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
							<div>
								<p>
									It supports an entire ecosystem — from products to the APIs
									and platforms helping developers and businesses innovate
								</p>
								<div className="mt-12 mb-12 grid grid-cols-2 gap-2 md:mb-0">
									<div className="space-y-4">
										<div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
											+1200
										</div>
										<p>Stars on GitHub</p>
									</div>
									<div className="space-y-4">
										<div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
											+500
										</div>
										<p>Powered Apps</p>
									</div>
								</div>
							</div>
							<div className="relative">
								<blockquote className="border-l-4 pl-4">
									<p>
										Using TailsUI has been like unlocking a secret design
										superpower. It&apos;s the perfect fusion of simplicity and
										versatility, enabling us to create UIs that are as stunning
										as they are user-friendly.
									</p>

									<div className="mt-6 space-y-3">
										<cite className="block font-medium">John Doe, CEO</cite>
										<Image
											className="h-5 w-fit dark:invert"
											alt="Nvidia Logo"
											src="https://html.tailus.io/blocks/customers/nvidia.svg"
											height="20"
											width="120"
											style={{ height: '20px', width: 'auto' }}
										/>
									</div>
								</blockquote>
							</div>
						</div>
					</div>
				</section>

				<Integrations />
				<Comparator />

				<section className="py-16">
					<div className="mx-auto max-w-7xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32">
						<div className="text-center">
							<h2 className="text-4xl font-semibold text-balance lg:text-5xl">
								Start Building
							</h2>
							<p className="mt-4">
								Libero sapiente aliquam quibusdam aspernatur.
							</p>

							<div className="mt-12 flex flex-wrap justify-center gap-4">
								<Button
									size="lg"
									asChild
								>
									<Link href="/">
										<span>Get Started</span>
									</Link>
								</Button>

								<Button
									size="lg"
									asChild
									variant="outline"
								>
									<Link href="/">
										<span>Book Demo</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

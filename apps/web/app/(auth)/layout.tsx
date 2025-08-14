import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { LogoImage } from '@/components/logo-image';

import logoDark from '@repo/assets/branding/nestwork-light.svg';
import logoLight from '@repo/assets/branding/nestwork-primary.svg';

interface Props {
	children: React.ReactNode;
}

export default function Page({ children }: Props) {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-4 sm:p-6 md:p-10">
				<div className="flex items-center justify-center gap-2 md:justify-start">
					<Link href="/">
						<LogoImage
							alt="Nestwork logo"
							srcDark={logoDark}
							srcLight={logoLight}
						/>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">{children}</div>
				</div>
			</div>

			<div className="relative hidden flex-col items-center justify-center space-y-8 bg-[#f9fafc] lg:flex dark:bg-neutral-900">
				<Image
					className="inset-0 dark:invert"
					alt="Image"
					src="/illustrations/oc-chatting.svg"
					height={350}
					width={350}
				/>

				<div className="flex max-w-md flex-col space-y-6 p-2">
					<h2 className="text-2xl font-semibold">
						Boost your teams productivity
					</h2>

					<div className="flex flex-col space-y-8">
						<div className="flex flex-col items-start space-y-2">
							<div className="flex items-center justify-start space-x-2">
								<CircleCheck className="col-span-0 h-6 w-6 text-[#32396b]" />
								<h5 className="text-base font-medium">All-in-one workspace</h5>
							</div>
							<p className="text-muted-foreground ml-8 text-sm">
								Plan projects, track tasks, and collaborate effortlessly
							</p>
						</div>

						<div className="flex flex-col items-start space-y-2">
							<div className="flex items-center justify-start space-x-2">
								<CircleCheck className="col-span-0 h-6 w-6 text-[#32396b]" />
								<h5 className="text-base font-medium">
									Stay aligned, hit deadlines
								</h5>
							</div>
							<p className="text-muted-foreground ml-8 text-sm">
								Keep everyone on the same page with shared boards, clear
								priorities, and real-time updates
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

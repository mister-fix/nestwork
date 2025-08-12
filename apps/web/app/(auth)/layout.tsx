import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { LogoImage } from '@/components/logo-image';

import icon from '@repo/assets/branding/icon-light.svg';
import logoDark from '@repo/assets/branding/nestwork-light.svg';
import logoLight from '@repo/assets/branding/nestwork-primary.svg';

interface Props {
	children: React.ReactNode;
}

export default function Page({ children }: Props) {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-4 sm:p-6 md:p-10">
				<div className="flex justify-center gap-2 md:justify-start">
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
			<div className="bg-muted relative hidden lg:block">
				<Image
					className="absolute inset-0 m-auto animate-spin transition-all [animation-duration:240s] dark:brightness-[0.2] dark:grayscale"
					alt="Image"
					src={icon}
					height={300}
					width={300}
				/>
			</div>
		</div>
	);
}

import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';

import { ToasterProvider } from '@/components/ui/toaster-provider';

import '@repo/ui/styles/globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	description:
		'Nestwork is a modern task management platform built for high-performance teams.',
	icons: {
		apple: '/apple-icon.png',
	},
	title: {
		default: 'Nestwork',
		template: '%s | Nestwork',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
		>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					disableTransitionOnChange
					enableSystem
					attribute="class"
					defaultTheme="system"
				>
					<Fragment>
						{children}
						<ToasterProvider />
					</Fragment>
				</ThemeProvider>
			</body>
		</html>
	);
}

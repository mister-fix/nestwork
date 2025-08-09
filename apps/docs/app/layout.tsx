import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@repo/ui/styles/globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	description:
		'Nestwork Documentation - Explore developer guides, API references, and integration tutorials.',
	icons: {
		apple: '/apple-icon.png',
	},
	title: {
		default: 'Nestwork Docs',
		template: '%s | Nestwork',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}

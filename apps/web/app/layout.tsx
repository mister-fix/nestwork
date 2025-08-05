import '@repo/ui/styles/globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}

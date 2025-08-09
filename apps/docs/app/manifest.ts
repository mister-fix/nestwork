import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: '#121216',
		description:
			'Nestwork Documentation - Explore our modern task management platform with developer guides, API references, and integration tutorials.',
		display: 'standalone',
		icons: [
			{
				sizes: '192x192',
				src: '/icon-192.png',
				type: 'image/png',
			},
			{
				sizes: '512x512',
				src: '/icon-512.png',
				type: 'image/png',
			},
		],
		name: 'Nestwork Docs',
		short_name: 'Nestwork',
		start_url: '/',
		theme_color: '#00067f',
	};
}

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		background_color: '#121216',
		description:
			'A modern task management platform built for high-performance teams.',
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
		name: 'Nestwork',
		short_name: 'Nestwork',
		start_url: '/',
		theme_color: '#00067f',
	};
}

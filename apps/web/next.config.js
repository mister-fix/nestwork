/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: [
		'@repo/ui',
		'@repo/assets',
		'better-auth',
		'@hookform/resolvers',
	],
};

export default nextConfig;

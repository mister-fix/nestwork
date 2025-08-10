import { Header } from '@/components/seo-header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-background flex h-screen w-screen flex-col items-center justify-center dark:bg-[#101010]">
			<Header />
			{children}
		</div>
	);
}

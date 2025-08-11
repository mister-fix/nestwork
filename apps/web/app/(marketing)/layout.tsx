import { Footer } from '@/components/footer';
import { Header } from '@/components/seo-header';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-background/80 flex flex-col">
			<Header />
			{children}
			<Footer />
		</div>
	);
}

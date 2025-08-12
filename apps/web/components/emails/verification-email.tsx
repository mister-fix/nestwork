import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface EmailProps {
	name?: string;
	verificationUrl: string;
}

export function VerificationEmail(props: EmailProps) {
	const { name, verificationUrl } = props;

	return (
		<Html lang="en">
			<Tailwind>
				<Head />
				<Body className="bg-[#f6f9fc]">
					<Preview>The workspace platform that supercharges your team.</Preview>
					<Container className="rounded-md bg-white p-2">
						<Section className="border-b border-neutral-300">
							<Img
								className="mx-auto my-0"
								alt="Nestwork logo"
								src={`${process.env.NEXT_PUBLIC_BASE_URL}/nestwork-primary.png`}
								height="auto"
								width={125}
							/>
							<Hr className="mx-0 my-5 border-neutral-300" />

							<Text>Hi {name?.split(' ')[0]},</Text>
							<Text>
								Welcome to Nestwork, the modern task management platform built
								for high-performance teams. Click the button below to verify
								your account and create a workspace.
							</Text>
							<Button
								className="block rounded-md bg-[#0e0c7c] px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-[#0e0c7c]/80"
								href={verificationUrl}
							>
								Get started
							</Button>
							<Text>
								When you get a chance, consider viewing our{' '}
								<Link href="https://nestwork-docs.vercel.app/">docs</Link> for
								more info on how you can maximize your experience.
							</Text>
							{/* <Text>
								We are always available to answer any questions and provide
								support, you can{' '}
								<Link href="https://nestwork-web.vercel.app/">contact us</Link>{' '}
								at any time. We also have a{' '}
								<Link href="https://nestwork-web.vercel.app/">
									support page
								</Link>{' '}
								where you may be able to find answers to some of your questions.
							</Text> */}
							<Text>
								Thank you for becoming a member, and we look forward to helping
								you supercharge your workflow.
							</Text>
							<Text>&mdash; The Nestwork Team.</Text>
						</Section>
						<Hr className="mx-0 my-1 border-neutral-300" />
						<Section className="text-center">
							<Text className="text-xs text-gray-400">
								&copy; {new Date().getFullYear()} Nestwork. All rights reserved.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}

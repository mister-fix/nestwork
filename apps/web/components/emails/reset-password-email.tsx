import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface EmailProps {
	name?: string;
	passwordResetUrl: string;
}

export function ResetPasswordEmail(props: EmailProps) {
	const { name, passwordResetUrl } = props;

	return (
		<Html lang="en">
			<Tailwind>
				<Head />
				<Body className="bg-[#f6f9fc] py-8">
					<Container className="rounded-md bg-white p-4">
						<Section className="border-b border-neutral-300">
							<Img
								className="mx-auto my-0"
								alt="Nestwork logo"
								src={`${process.env.NEXT_PUBLIC_BASE_URL}/nestwork-primary.png`}
								height="auto"
								width={125}
							/>

							<Hr className="mx-0 my-4 border-neutral-300" />

							<Text>Hi {name?.split(' ')[0]},</Text>

							<Text>
								We received a request to reset your account password. Click on
								the link below to set a new one. This link is valid for 30
								minutes from the time this email is received.
							</Text>

							<Button
								className="block rounded-md bg-[#0e0c7c] px-6 py-3 text-center text-sm font-semibold text-white transition-all duration-150 hover:bg-[#0e0c7c]/80"
								href={passwordResetUrl}
							>
								Click here to reset password
							</Button>

							<Text>
								If you do not want to change your password, or did not initiate
								this request, please ignore and delete this email.
							</Text>

							<Text>&mdash; The Nestwork Team.</Text>

							<Hr className="mx-0 my-4 border-neutral-300" />

							<Text className="text-center text-xs text-gray-400">
								&copy; {new Date().getFullYear()} Nestwork. All rights reserved.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}

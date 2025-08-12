import { Button, Head, Html } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface EmailProps {
	name?: string;
	verificationUrl: string;
}

export function VerificationEmail(props: EmailProps) {
	const { verificationUrl } = props;

	return (
		<Html lang="en">
			<Tailwind>
				<Head />
				<Button href={verificationUrl}>Click me</Button>
			</Tailwind>
		</Html>
	);
}

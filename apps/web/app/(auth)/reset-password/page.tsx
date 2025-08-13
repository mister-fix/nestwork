import { redirect } from 'next/navigation';

import { ResetPasswordForm } from '@/components/forms/reset-password-form';
import { getSession } from '@/lib/auth';

export default async function Page() {
	const session = await getSession();

	if (session) redirect('/dashboard');

	return (
		<div className="flex flex-col items-center gap-6">
			<div className="flex flex-col items-center gap-2 text-center">
				<h1 className="text-2xl font-bold">Reset password</h1>
				<p className="text-muted-foreground text-sm text-balance">
					Enter your new account password
				</p>
			</div>
			<ResetPasswordForm />
		</div>
	);
}

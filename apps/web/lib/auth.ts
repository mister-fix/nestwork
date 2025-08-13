import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { Resend } from 'resend';

import { ResetPasswordEmail } from '@/components/emails/reset-password-email';
import { VerificationEmail } from '@/components/emails/verification-email';
import { db } from '@/db/drizzle';
import { schema } from '@/db/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
	}),
	plugins: [nextCookies()],
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url }) => {
			await resend.emails.send({
				from: 'Nestwork <noreply@stephenwm.me>',
				to: [user.email],
				subject: 'Nestwork - Password Reset Link',
				react: ResetPasswordEmail({ name: user.name, passwordResetUrl: url }),
			});
		},
	},
	emailVerification: {
		sendVerificationEmail: async ({ user, url }) => {
			const { error } = await resend.emails.send({
				from: 'Nestwork <noreply@stephenwm.me>',
				to: [user.email],
				subject: 'Verify your email address',
				react: VerificationEmail({ name: user.name, verificationUrl: url }),
			});
			if (error) {
				console.error('Error sending verification email:', error);
				throw error;
			}
		},
		sendOnSignUp: true,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		async afterEmailVerification(user, request) {
			console.log(`${user.email} has been successfully verified`);

			await db
				.update(schema.user)
				.set({ isActive: true })
				.where(eq(schema.user.id, user.id));
		},
	},
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Session = typeof auth.$Infer.Session;

export const getSession = async () => {
	try {
		const session = await auth.api.getSession({
			headers: await headers(),
		});

		return session;
	}
	catch (error) {
		console.error((error as Error)?.message);
		redirect('/sign-in');
	}
};

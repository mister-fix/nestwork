import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { nextCookies } from 'better-auth/next-js';
import { headers } from 'next/headers';
import { Resend } from 'resend';

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
	},
});

type Session = typeof auth.$Infer.Session;

export const getSession = async () =>
	auth.api.getSession({
		headers: await headers(),
	});

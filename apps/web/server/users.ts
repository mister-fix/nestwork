'use server';

import { auth } from '@/lib/auth';

export const signUpUser = async (
	name: string,
	email: string,
	password: string,
) => {
	try {
		await auth.api.signUpEmail({
			body: {
				name,
				email,
				password,
			},
		});

		return {
			success: true,
			message: 'Success! Please check your email to verify your account.',
		};
	}
	catch (error) {
		console.error(error);
		return {
			success: false,
			message:
				(error as Error)?.message
				|| 'An error occurred during sign up. Please try again.',
		};
	}
};

export const signInUser = async (email: string, password: string) => {
	try {
		await auth.api.signInEmail({
			body: {
				email,
				password,
			},
		});

		return { success: true, message: 'Signed in successfully.' };
	}
	catch (error) {
		console.error(error);
		return {
			success: false,
			message:
				(error as Error)?.message
				|| 'An error occurred during sign in. Please try again.',
		};
	}
};

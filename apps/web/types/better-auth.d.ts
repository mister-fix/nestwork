import 'better-auth';

declare module 'better-auth' {
	interface BetterAuthUser {
		first_name: string;
		last_name: string;
	}

	interface SignUpEmailBody {
		first_name: string;
		last_name: string;
	}
}

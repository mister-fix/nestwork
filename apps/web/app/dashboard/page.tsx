import { SignOutButton } from '@/components/sign-out-button';
import { getSession } from '@/lib/auth';

export default async function Page() {
	const session = await getSession();
	const user = session?.user;

	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center">
			<div className="flex h-18 w-full items-center justify-end border-b px-4 sm:px-6 dark:border-neutral-900">
				<SignOutButton />
			</div>
			<div className="flex flex-1 items-center justify-center">
				<h1>Welcome back, {user?.name.split(' ')[0]}</h1>
			</div>
		</div>
	);
}

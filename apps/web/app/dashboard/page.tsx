// import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation';

// import { type User } from '@/db/auth-schema';
// import { SignOutButton } from '@/components/sign-out-button';
import { getSession } from '@/lib/auth';

import { UserDropdown } from './user-dropdown';

export default async function Page() {
	const session = await getSession();

	if (!session) redirect('/sign-in');

	const { user } = session;

	return (
		<div className="flex flex-col">
			<header className="flex h-16 w-full items-center px-4 sm:px-6">
				<div className="ml-auto">
					<UserDropdown user={user} />
				</div>
			</header>
			<div className="flex flex-1 flex-col gap-4 p-4">
				<div className="grid auto-rows-min gap-4 md:grid-cols-3">
					<div className="bg-muted/50 aspect-video rounded-xl" />
					<div className="bg-muted/50 aspect-video rounded-xl" />
					<div className="bg-muted/50 aspect-video rounded-xl" />
				</div>

				<div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
			</div>
		</div>
	);
}

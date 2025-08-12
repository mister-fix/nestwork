'use client';

import { Button } from '@repo/ui/components/button';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { authClient } from '@/lib/auth-client';

export function SignOutButton() {
	const router = useRouter();

	const handleLogout = async () => {
		await authClient.signOut();
		router.push('/sign-in');
	};

	return (
		<Button
			size="sm"
			onClick={handleLogout}
		>
			Sign out <LogOut size={14} />
		</Button>
	);
}

'use client';

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@repo/ui/components/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@repo/ui/components/dropdown-menu';
import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Sparkles,
} from 'lucide-react';

import { SignOutButton } from '@/components/sign-out-button';
import { authClient } from '@/lib/auth-client';

export function UserDropdown({ user }: { user: any }) {
	const handleLogout = async () => {
		// e?.preventDefault();
		try {
			await authClient.signOut();
			window.location.href = '/sign-in'; // or use router.push
		}
		catch (error) {
			console.error('Error signing out:', error);
		}
	};

	return (
		<header className="flex h-16 w-full items-center">
			<SignOutButton />
			<div className="ml-auto">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="flex cursor-pointer items-center gap-2">
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarImage
									alt={user.name}
									src={user?.profileImage ?? ''}
								/>
								<AvatarFallback className="rounded-lg">
									{user.name
										?.split(' ')
										.map((part: string) => part[0])
										.join('')
										.toUpperCase()
										.slice(0, 2) ?? ''}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">{user.name}</span>
								<span className="truncate text-xs">{user.email}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										alt={user.name}
										src={user?.profileImage ?? ''}
									/>
									<AvatarFallback className="rounded-lg">
										{user.name
											?.split(' ')
											.map((part: string) => part[0])
											.join('')
											.toUpperCase()
											.slice(0, 2) ?? ''}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">{user.name}</span>
									<span className="truncate text-xs">{user.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Sparkles /> Upgrade to Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<BadgeCheck /> Account
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCard /> Billing
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell /> Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem
								onClick={async () => {
									await handleLogout();
								}}
							>
								<LogOut />
								<span>Log out</span>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}

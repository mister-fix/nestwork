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
import { Separator } from '@repo/ui/components/separator';
import {
	SidebarInset,
	SidebarMenuButton,
	SidebarProvider,
	SidebarTrigger,
} from '@repo/ui/components/sidebar';
import {
	BadgeCheck,
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	Sparkles,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

import { SignOutButton } from '@/components/sign-out-button';
import { type User } from '@/db/auth-schema';
import { authClient } from '@/lib/auth-client';

import { AppSidebar } from './app-sidebar';

export function SidebarShell({
	user,
	children,
}: {
	children: React.ReactNode;
	user: User;
}) {
	const router = useRouter();

	const handleLogout = async (e?: Event) => {
		e?.preventDefault();

		try {
			await authClient.signOut();
			router.push('/sign-in');
		}
		catch (error) {
			console.error('Error signing out:', error);
		}
	};

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="group-has-data[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 border-b border-neutral-100 transition-[width,height] ease-linear dark:border-neutral-900">
					<div className="flex w-full items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator
							className="mr-2 data-[orientation=vertical]:h-4"
							orientation="vertical"
						/>

						<div className="ml-auto">
							<SignOutButton />
						</div>

						<div className="ml-auto">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<SidebarMenuButton
										className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer hover:bg-transparent"
										size="lg"
									>
										<Avatar className="h-8 w-8 rounded-lg">
											<AvatarImage
												alt={user.name}
												src={user?.profileImage ?? ''}
											/>
											<AvatarFallback className="rounded-lg">
												{user.name ?
													(user.name
														.split(' ')
														.map((part) => part[0])
														.join('')
														.toUpperCase()
														.slice(0, 2) ?? '')
												:	''}
											</AvatarFallback>
										</Avatar>
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-medium">{user.name}</span>
											<span className="truncate text-xs">{user.email}</span>
										</div>
										<ChevronsUpDown className="ml-auto size-4" />
									</SidebarMenuButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent
									className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
									align="end"
									side={'bottom'}
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
													{user.name ?
														(user.name
															.split(' ')
															.map((part) => part[0])
															.join('')
															.toUpperCase()
															.slice(0, 2) ?? '')
													:	''}
												</AvatarFallback>
											</Avatar>
											<div className="grid flex-1 text-left text-sm leading-tight">
												<span className="truncate font-medium">
													{user.name}
												</span>
												<span className="truncate text-xs">{user.email}</span>
											</div>
										</div>
									</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<Sparkles />
											Upgrade to Pro
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<BadgeCheck />
											Account
										</DropdownMenuItem>
										<DropdownMenuItem>
											<CreditCard />
											Billing
										</DropdownMenuItem>
										<DropdownMenuItem>
											<Bell />
											Notifications
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem
											className="cursor-pointer"
											onSelect={async (e) => {
												await handleLogout(e);
											}}
										>
											<LogOut />
											<span>Log out</span>
										</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</header>
				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}

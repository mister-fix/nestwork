import { Button } from '@repo/ui/components/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList,
} from '@repo/ui/components/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@repo/ui/components/popover';
import { cn } from '@repo/ui/lib/utils';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { LogoImage } from '@/components/logo-image';

import logoLight from '@repo/assets/branding/nestwork-light.svg';
import logoPrimary from '@repo/assets/branding/nestwork-primary.svg';

const languages = [
	{ value: 'english', label: 'English' },
	{ value: 'spanish', label: 'Spanish' },
	{ value: 'french', label: 'French' },
	{ value: 'portuguese', label: 'Portuguese' },
];

const LanguageToggler = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');

	return (
		<Popover
			onOpenChange={setOpen}
			open={open}
		>
			<PopoverTrigger asChild>
				<Button
					className="w-[200px] justify-between"
					aria-expanded={open}
					role="combobox"
					variant="outline"
				>
					{value ?
						languages.find((language) => language.value === value)?.label
					:	'Select language...'}
					<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandList>
						<CommandEmpty>No language found.</CommandEmpty>
						<CommandGroup>
							{languages.map((language) => (
								<CommandItem
									key={language.value}
									value={language.value}
									onSelect={(currentValue) => {
										setValue(currentValue === value ? '' : currentValue);
										setOpen(false);
									}}
								>
									<CheckIcon
										className={cn(
											'mr-4 h-4 w-4',
											value === language.value ? 'opacity-100' : 'opacity-0',
										)}
									/>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

const links = [
	{
		group: 'Product',
		items: [
			{
				title: 'Features',
				href: '#',
			},
			{
				title: 'Solution',
				href: '#',
			},
			{
				title: 'Customers',
				href: '#',
			},
			{
				title: 'Pricing',
				href: '#',
			},
			{
				title: 'Help',
				href: '#',
			},
			{
				title: 'About',
				href: '#',
			},
		],
	},
	{
		group: 'Solution',
		items: [
			{
				title: 'Startup',
				href: '#',
			},
			{
				title: 'Freelancers',
				href: '#',
			},
			{
				title: 'Organizations',
				href: '#',
			},
			{
				title: 'Students',
				href: '#',
			},
			{
				title: 'Collaboration',
				href: '#',
			},
			{
				title: 'Design',
				href: '#',
			},
			{
				title: 'Management',
				href: '#',
			},
		],
	},
	{
		group: 'Company',
		items: [
			{
				title: 'About',
				href: '#',
			},
			{
				title: 'Careers',
				href: '#',
			},
			{
				title: 'Blog',
				href: '#',
			},
			{
				title: 'Press',
				href: '#',
			},
			{
				title: 'Contact',
				href: '#',
			},
			{
				title: 'Help',
				href: '#',
			},
		],
	},
	{
		group: 'Legal',
		items: [
			{
				title: 'License',
				href: '#',
			},
			{
				title: 'Privacy',
				href: '#',
			},
			{
				title: 'Cookies',
				href: '#',
			},
			{
				title: 'Security',
				href: '#',
			},
		],
	},
];

export function Footer() {
	return (
		<footer className="border-b bg-white pt-20 dark:bg-transparent">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="grid gap-12 md:grid-cols-5">
					<div className="flex flex-col space-y-3 md:col-span-2">
						<Link
							aria-label="Go home"
							href="/"
						>
							<LogoImage
								alt="Nestwork logo"
								height={28}
								width={120}
								srcDark={logoLight}
								srcLight={logoPrimary}
							/>
						</Link>

						<p className="text-muted-foreground w-xs text-sm">
							A modern task management platform built for high-performance
							teams.
						</p>

						<div className="mt-10">
							<LanguageToggler />
						</div>
					</div>

					<div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
						{links.map((link, index) => (
							<div
								key={index}
								className="space-y-4 text-sm"
							>
								<span className="block font-medium">{link.group}</span>
								{link.items.map((item, index) => (
									<Link
										key={index}
										className="text-muted-foreground hover:text-primary block transition-colors duration-200"
										href={item.href}
									>
										<span>{item.title}</span>
									</Link>
								))}
							</div>
						))}
					</div>
				</div>
				<div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-neutral-100 py-6 dark:border-neutral-900">
					<span className="text-muted-foreground order-last block text-center text-sm md:order-first">
						© {new Date().getFullYear()} Nestwork. All rights reserved.
					</span>

					<div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
						<Link
							className="text-muted-foreground hover:text-primary group block transition-all duration-200"
							aria-label="GitHub"
							href="https://github.com/mister-fix/nestwork.git"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Image
								className="transition-all duration-200 dark:opacity-50 dark:invert dark:hover:opacity-100"
								alt="GitHub icon"
								src="/icons/github.svg"
								height={18}
								width={18}
							/>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

'use client';

import { cn } from '@repo/ui/lib/utils';
import { Monitor, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const themes = [
	{ key: 'light', icon: Sun, label: 'Light theme', hideOnMobile: false },
	{ key: 'dark', icon: Moon, label: 'Dark theme', hideOnMobile: false },
	{ key: 'system', icon: Monitor, label: 'System theme', hideOnMobile: true },
] as const;

type ThemeKey = (typeof themes)[number]['key'];

interface ThemeTogglerProps {
	className?: string;
}

export function ThemeToggler({ className }: ThemeTogglerProps) {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	// Controlled by next-themes once mounted
	const activeTheme = theme as ThemeKey;

	return (
		<div
			className={cn(
				'bg-background ring-border relative isolate flex h-8 rounded-full p-1 ring-1',
				className,
			)}
		>
			{themes.map(({ key, icon: Icon, label, hideOnMobile }) => {
				const isActive = activeTheme === key;

				return (
					<button
						key={key}
						className={cn(
							'relative h-6 w-6 rounded-full',
							hideOnMobile && 'hidden lg:flex',
						)}
						aria-label={label}
						aria-pressed={isActive}
						type="button"
						onClick={() => setTheme(key)}
					>
						{isActive && (
							<motion.div
								className="bg-secondary absolute inset-0 rounded-full"
								layoutId="activeTheme"
								transition={{ type: 'spring', stiffness: 400, damping: 30 }}
							/>
						)}
						<Icon
							className={cn(
								'relative z-10 m-auto h-4 w-4',
								isActive ? 'text-foreground' : 'text-muted-foreground',
							)}
						/>
					</button>
				);
			})}
		</div>
	);
}

'use client';

import { Button } from '@repo/ui/components/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggler() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			size="icon"
			onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
			variant="outline"
		>
			{theme === 'light' ?
				<Sun className="text-foreground h-4 w-4" />
			:	<Moon className="text-foreground h-4 w-4" />}
		</Button>
	);
}

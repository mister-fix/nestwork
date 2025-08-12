'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { cn } from '@repo/ui/lib/utils';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { signUpUser } from '@/server/users';

const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Last name must be at least 2 characters long.' }),
	email: z.email({ message: 'Invalid email address.' }),
	password: z
		.string()
		.min(8, { message: 'Password must be at least 8 characters long.' }),
});

export function SignUpForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [passwordVisible, setPasswordVisible] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values);
		try {
			startTransition(async () => {
				const response = await signUpUser(
					values.name,
					values.email,
					values.password,
				);
				const { success, message } = response;

				if (success === true) {
					toast.success(message);
					router.push('/sign-in');
				}

				toast.error(message);
			});
		}
		catch (error) {
			console.error((error as Error)?.message);
		}
	};

	return (
		<form
			className={cn('flex flex-col items-center gap-6', className)}
			{...props}
			onSubmit={form.handleSubmit(onSubmit)}
		>
			<div className="grid w-sm gap-6 lg:w-xl">
				<div className="grid gap-3">
					<Label htmlFor="first_name">Full name</Label>
					<Input
						id="first_name"
						placeholder="John"
						type="text"
						required
						{...form.register('name')}
					/>
				</div>
				<div className="grid gap-3">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						placeholder="m@example.com"
						type="email"
						required
						{...form.register('email')}
					/>
				</div>
				<div className="grid gap-3">
					<Label htmlFor="password">Password</Label>
					<div className="relative">
						<Input
							className="pe-10"
							id="password"
							placeholder="8+ characters required"
							type={passwordVisible ? 'text' : 'password'}
							required
							{...form.register('password')}
						/>
						<Button
							className="absolute top-1/2 right-0.5 -translate-y-1/2 cursor-pointer bg-transparent p-0 hover:bg-transparent"
							type="button"
							onClick={() => setPasswordVisible(!passwordVisible)}
						>
							{passwordVisible ?
								<EyeOff className="transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert" />
							:	<Eye className="transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert" />
							}
						</Button>
					</div>
				</div>

				<Button
					className="w-full"
					disabled={isPending}
					type="submit"
				>
					{isPending ?
						<LoaderCircle className="animate-spin" />
					:	'Create account'}
				</Button>
				<div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
					<span className="bg-background text-muted-foreground relative z-10 px-2">
						Or continue with
					</span>
				</div>
				<Button
					className="w-full"
					type="button"
					onClick={() => toast.error('Currently unavailable')}
					variant="outline"
				>
					<Image
						className="invert"
						alt="Google icon"
						src="/icons/google.svg"
						height={14}
						width={14}
					/>
					Sign up with Google
				</Button>
			</div>
			<div className="text-center text-sm">
				Already have an account?{' '}
				<Link
					className="underline underline-offset-4"
					href="/sign-in"
				>
					Sign in
				</Link>
			</div>
			<div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
				By clicking continue, you agree to our{' '}
				<Link href="#">Terms of Service</Link> and{' '}
				<Link href="#">Privacy Policy</Link>.
			</div>
		</form>
	);
}

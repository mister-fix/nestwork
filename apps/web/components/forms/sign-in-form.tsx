'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { cn } from '@repo/ui/lib/utils';
import { CircleAlert, Eye, EyeOff, LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FormMessage } from '@/components/form-message';
import { signInUser } from '@/server/users';

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email is required.' })
		.email({ message: 'Invalid email address.' }),
	password: z
		.string()
		.min(1, { message: 'Password is required.' })
		.min(8, { message: 'Password must be at least 8 characters long.' }),
});

export function SignInForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [passwordVisible, setPasswordVisible] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			startTransition(async () => {
				const response = await signInUser(values.email, values.password);
				const { success, message } = response;

				if (success === true) {
					toast.success(message);
					router.push('/dashboard');
				}
				else {
					toast.error(message);
				}
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
			noValidate
		>
			<div className="grid w-xs gap-6 sm:w-sm md:w-md">
				<div className="grid gap-3">
					<Label htmlFor="email">Email</Label>
					<div className="relative">
						<Input
							id="email"
							placeholder="m@example.com"
							type="email"
							required
							{...form.register('email')}
						/>
						<div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer bg-transparent hover:bg-transparent">
							{form.formState.errors.email ?
								<CircleAlert
									className="text-red-500/80"
									size={16}
								/>
							:	''}
						</div>
					</div>
					<FormMessage error={form.formState.errors.email?.message} />
				</div>
				<div className="grid gap-3">
					<div className="flex items-center justify-between">
						<Label htmlFor="password">Password</Label>
						<Link
							className="text-sm underline-offset-5 hover:underline"
							href="/forgot-password"
						>
							Forgot your password?
						</Link>
					</div>
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
							className="absolute top-1/2 right-3 h-auto w-auto -translate-y-1/2 cursor-pointer bg-transparent !p-0 hover:bg-transparent"
							type="button"
							onClick={() => setPasswordVisible(!passwordVisible)}
						>
							{passwordVisible ?
								<EyeOff className="transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert" />
							: form.formState.errors.password ?
								<CircleAlert className="text-red-500/80" />
							:	<Eye className="transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert" />
							}
						</Button>
					</div>
					<FormMessage error={form.formState.errors.password?.message} />
				</div>

				<Button
					className="w-full"
					disabled={isPending}
					type="submit"
				>
					{isPending ?
						<LoaderCircle className="animate-spin" />
					:	'Sign in'}
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
					Sign in with Google
				</Button>
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an account?{' '}
				<Link
					className="underline underline-offset-4"
					href="/sign-up"
				>
					Sign up
				</Link>
			</div>
		</form>
	);
}

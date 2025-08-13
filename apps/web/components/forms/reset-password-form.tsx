'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { cn } from '@repo/ui/lib/utils';
import { CircleAlert, Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FormMessage } from '@/components/form-message';
import { authClient } from '@/lib/auth-client';

const formSchema = z
	.object({
		password: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters long.' }),
		confirmPassword: z
			.string()
			.min(8, { message: 'Password must be at least 8 characters long.' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match.',
		path: ['confirmPassword'],
	});

export function ResetPasswordForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [isPending, startTransition] = useTransition();
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: '',
			confirmPassword: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			startTransition(async () => {
				const token = searchParams.get('token');

				if (!token) {
					toast.error('Invalid token');
					redirect('/sign-in');
				}

				const { error } = await authClient.resetPassword({
					newPassword: values.password,
					token: token ?? '',
				});

				if (!error) {
					toast.success('Password reset successfully');
					router.push('/dashboard');
				}

				toast.error(error?.message);
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
							: form.formState.errors.password ?
								<CircleAlert className="text-red-500/80" />
							:	<Eye className="transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert" />
							}
						</Button>
					</div>
					<FormMessage error={form.formState.errors.password?.message} />
				</div>

				<div className="grid gap-3">
					<Label htmlFor="confirm_password">Confirm password</Label>
					<div className="relative">
						<Input
							className="pe-10"
							id="confirm_password"
							placeholder="8+ characters required"
							type={confirmPasswordVisible ? 'text' : 'password'}
							required
							{...form.register('confirmPassword')}
						/>
						<Button
							className="absolute top-1/2 right-0.5 -translate-y-1/2 cursor-pointer bg-transparent p-0 hover:bg-transparent"
							type="button"
							onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
						>
							{confirmPasswordVisible ?
								<EyeOff className="transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert" />
							: form.formState.errors.confirmPassword ?
								<CircleAlert className="text-red-500/80" />
							:	<Eye className="transition-all duration-200 group-hover:opacity-100 dark:invert dark:group-hover:invert" />
							}
						</Button>
					</div>
					<FormMessage error={form.formState.errors.confirmPassword?.message} />
				</div>

				<Button
					className="w-full"
					disabled={isPending}
					type="submit"
				>
					{isPending ?
						<LoaderCircle className="animate-spin" />
					:	'Submit'}
				</Button>
			</div>
		</form>
	);
}

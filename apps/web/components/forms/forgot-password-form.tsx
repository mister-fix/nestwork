'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { cn } from '@repo/ui/lib/utils';
import { ChevronLeft, CircleAlert, LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FormMessage } from '@/components/form-message';
import { authClient } from '@/lib/auth-client';

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email is required.' })
		.email({ message: 'Invalid email address.' }),
});

export function ForgotPasswordForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			startTransition(async () => {
				const { error } = await authClient.requestPasswordReset({
					email: values.email,
					redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`,
				});

				if (!error) {
					setIsSuccess(true);
					toast.success('Please check your email for a password reset link.');
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
			{isSuccess ?
				<div className="w-xs rounded-lg border border-green-700/80 bg-green-700/20 p-6 sm:w-sm lg:w-md">
					<div className="flex flex-col items-start justify-center space-y-2">
						<div className="flex w-max items-center space-x-2">
							<CircleAlert
								className="text-green-700"
								size={14}
							/>
							<p className="text-sm font-semibold text-green-700">
								Requested password reset!
							</p>
						</div>
						<div className="flex flex-1 flex-col space-y-2 sm:pl-[22px]">
							<p className="text-sm text-green-700">
								Please check your email for instructions on how to reset your
								account password.
							</p>
							<p className="text-sm text-green-700">
								Don&apos;t see the email? Check your spam folder.
							</p>
						</div>
					</div>
				</div>
			:	<div className="grid w-xs gap-6 sm:w-sm md:w-md">
					<div className="grid gap-3">
						<Label htmlFor="email">Email</Label>
						<div className="relative">
							<Input
								className="pe-10"
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
			}
			<div className="text-center text-sm">
				<Link
					className="flex items-center space-x-1 underline underline-offset-4"
					href="/sign-in"
				>
					<ChevronLeft size={14} />
					Back to sign in
				</Link>
			</div>
		</form>
	);
}

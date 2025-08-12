'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { cn } from '@repo/ui/lib/utils';
import { ChevronLeft, LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { authClient } from '@/lib/auth-client';

const formSchema = z.object({
	email: z.email({ message: 'Invalid email address.' }),
});

export function ForgotPasswordForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
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
		>
			<div className="grid w-sm gap-6 lg:w-xl">
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

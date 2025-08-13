'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { cn } from '@repo/ui/lib/utils';
import {
	CircleAlert,
	CircleCheck,
	Eye,
	EyeOff,
	LoaderCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { FormMessage } from '@/components/form-message';
import { signUpUser } from '@/server/users';

const formSchema = z.object({
	name: z.string().min(1, { message: 'Name is required.' }).min(2, {
		message: 'Name must be at least 2 characters long.',
	}),
	email: z
		.string()
		.min(1, { message: 'Email is required.' })
		.email({ message: 'Invalid email address.' }),
	password: z
		.string()
		.min(1, { message: 'Password is required.' })
		.min(8, { message: 'Password must be at least 8 characters long.' }),
});

export function SignUpForm({
	className,
	...props
}: React.ComponentProps<'form'>) {
	// const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			startTransition(async () => {
				const response = await signUpUser(
					values.name,
					values.email,
					values.password,
				);
				const { success, message } = response;

				if (success === true) {
					// toast.success(message);
					setIsSuccess(true);
					// router.push('/sign-in');
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
			noValidate
		>
			{isSuccess ?
				<div className="w-xs rounded-lg border border-green-700/80 bg-green-700/20 p-6 sm:w-sm lg:w-md">
					<div className="flex flex-col items-start justify-center space-y-2">
						<div className="flex w-max items-center space-x-2">
							<CircleCheck
								className="text-green-700"
								size={14}
							/>
							<p className="text-sm font-semibold text-green-700">
								Account created successfully!
							</p>
						</div>
						<div className="flex flex-1 flex-col space-y-2 sm:pl-[22px]">
							<p className="text-sm text-green-700">
								Please check your email for a verification link to complete your
								registration.
							</p>
							<p className="text-sm text-green-700">
								Don&apos;t see the email? Check your spam folder.
							</p>
						</div>
					</div>
				</div>
			:	<div className="grid w-xs gap-6 sm:w-sm md:w-md">
					<div className="grid gap-3">
						<Label htmlFor="name">Full name</Label>
						<div className="relative">
							<Input
								className="pe-10"
								id="name"
								placeholder="John doe"
								type="text"
								required
								{...form.register('name')}
							/>
							<div className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer bg-transparent hover:bg-transparent">
								{form.formState.errors.name ?
									<CircleAlert
										className="text-red-500/80"
										size={16}
									/>
								:	''}
							</div>
						</div>
						<FormMessage error={form.formState.errors.name?.message} />
					</div>
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
			}
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

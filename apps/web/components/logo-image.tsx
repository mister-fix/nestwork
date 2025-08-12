import Image, { type ImageProps } from 'next/image';

type Props = Omit<ImageProps, 'src'> & {
	srcDark: string;
	srcLight: string;
};

export const LogoImage = (props: Props) => {
	const { srcDark, srcLight, ...rest } = props;

	return (
		<>
			<Image
				className="block dark:hidden"
				src={srcLight}
				height={28}
				width={120}
				{...rest}
			/>
			<Image
				className="hidden dark:block"
				src={srcDark}
				height={28}
				width={120}
				{...rest}
			/>
		</>
	);
};

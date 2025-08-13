export const FormMessage = ({ error }: { error?: string }) => {
	if (!error) return null;

	return <span className="text-sm text-red-500/70">{error}</span>;
};

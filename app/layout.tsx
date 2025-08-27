export const metadata = {
	title: 'Next.js Basic Template',
	description: 'A minimal Next.js app router template.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body style={{ margin: 0, fontFamily: 'ui-sans-serif, system-ui, -apple-system' }}>
				{children}
			</body>
		</html>
	);
}


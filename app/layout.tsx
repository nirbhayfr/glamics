import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Glamics",
	description: "An e-commerce application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}

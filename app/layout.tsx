import "./globals.css";
import Script from "next/script";

export default function RootLayout({children}: {children: React.ReactNode}){
	return (
		<html lang="en">
			<head>
				<meta charSet = "utf-8" />
			</head>
			<body>
				<Script src = "https://stats.emily.bz/script.js" />
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}

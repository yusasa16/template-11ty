import { RawHtml } from "static-jsx";
import Header from "../_components/Header.jsx";

export default function render({ children, title }) {
	return (
		<>
			{/* JSX doesn't support doctypes natively, so we have to use RawHtml */}
			{new RawHtml("<!DOCTYPE html>")}
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<title>{title}</title>
					<link rel="stylesheet" href="/css/style.css" />
					<script src="/js/script.js" defer></script>
				</head>
				<body>
					<Header />
					<main>{children}</main>
					{/* formatCopyrightDate is a JavaScript template function */}
					<footer>footer</footer>
				</body>
			</html>
		</>
	);
}

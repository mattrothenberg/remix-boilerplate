import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";

export async function loader() {
	return {
		env: {
			SOME_ENV_VAR: process.env.SOME_ENV_VAR,
		},
	};
}

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<Analytics />
			</body>
		</html>
	);
}

export default function App() {
	const { env } = useLoaderData<typeof loader>();
	return (
		<div>
			{JSON.stringify(env, null, 2)}
			<Outlet />
		</div>
	);
}

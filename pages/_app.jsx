import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="icon" href="/favicon.ico" />
				<title>Lenwell</title>
				<meta
					name="description"
					content="Professional Repair Service for Apple and Samsung Products"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

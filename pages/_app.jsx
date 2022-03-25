import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
	return (
		<div className="d-flex flex-column justify-content-between" style={{minHeight: "100vh"}}>
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
			<NavBar/>
			<Component {...pageProps} />
			<Footer/>
		</div>
	);
}

export default MyApp;

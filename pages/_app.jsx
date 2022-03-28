import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Head from "next/head";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
	return (
		<div
			className="d-flex flex-column justify-content-between"
			style={{ minHeight: "100vh" }}
		>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="icon" href="/favicon.ico" />
				<title>Lenwell</title>
				<meta
					name="description"
					content="Professional Repair Service for Apple and Samsung Products"
				/>
				<meta
					name="keywords"
					content="broken glass, broken screens, broken lcd, tablet repair, phone repair, lcd buyback, lcd swap, iwatch repair, apple watch, replacement, replace, mail in repair"
				/>
				<meta property="og:title" content="Lenwell" />
				<meta property="og:image" content="/bg-home2.jpg" />
				<meta
					property="og:description "
					content="Lenwell Digital is a Samsung and Apple mobile device repair shop specializing in the repair of screen glass panel, touchpad, LCD. Expert technicians will fix your cracked/broken iPhone, iPad, iWatch, or Samsung phone and tablet with the best genuine parts. Lenwell Digital is the place to go for your mobile device repair needs."
				/>
			</Head>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;

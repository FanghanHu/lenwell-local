/* eslint-disable @next/next/no-img-element */
import style from "./style.module.css";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="p-3" style={{ backgroundImage: `url(/tile.png)` }}>
			<div className="container">
				<div className="row">
					<div
						className="col-4 text-center d-flex flex-column justify-content-center"
						style={{ borderRight: "1px solid gray" }}
					>
						<Link href="/">
							<a>
								<img
									src="/Lenwell-Digital-Logo-No-BG.png"
									alt="lenwell"
									style={{ width: "min(300px, 100%)" }}
								/>
							</a>
						</Link>
						<div className="text-muted" style={{ fontSize: "0.8em" }}>
							© All rights reserved
						</div>
					</div>
					<div className="col-8 py-4 d-flex flex-wrap">
						<ul className="list-unstyled px-3 px-md-5">
							<li>
								<Link href="/contact-us">
									<a className={style["footer-link"]}>Contact us</a>
								</Link>
							</li>
							<li>
								<Link href="/about-us">
									<a className={style["footer-link"]}>About us</a>
								</Link>
							</li>
							<li>
								<Link href="/repair-service">
									<a className={style["footer-link"]}>Repair Service</a>
								</Link>
							</li>
							<li>
								<Link href="/trademark-disclaimer">
									<a className={style["footer-link"]}>Trademark Disclaimer</a>
								</Link>
							</li>
							<li>
								<Link href="/return-policy">
									<a className={style["footer-link"]}>Return Policy</a>
								</Link>
							</li>
						</ul>
						<ul className="list-unstyled px-3 px-md-5">
							<li>
								<Link href="/order-online">
									<a className={style["footer-link"]}>Order online</a>
								</Link>
							</li>
							<li>
								<Link href="/mail-in">
									<a className={style["footer-link"]}>Mail-in Order</a>
								</Link>
							</li>
							<li>
								<Link href="/referrer">
									<a className={style["footer-link"]}>Become a referrer</a>
								</Link>
							</li>
							<li>
								<Link href="/b2b">
									<a className={style["footer-link"]}>Business-to-Business</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="text-center text-white h7 mt-3">
					<div>5750 Bintliff Dr Ste 210, Houston, TX, 77036</div>
					<div>(832) 275-5999 | online@lenwellscreen.com</div>
				</div>
			</div>
		</footer>
	);
}

/* eslint-disable @next/next/no-img-element */
import style from "./style.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
	const [navHeight, setNavHeight] = useState(0);
	const navRef = useRef();

	useEffect(() => {
		//hide scrollbar when scrolling down, show it when scrolling back up
		let lastScroll = window.pageYOffset;
		const handleScroll = () => {
			const scroll = window.pageYOffset;

			if (scroll > 0) {
				navRef.current.style.position = "fixed";
			} else {
				navRef.current.style.position = "relative";
			}

			if (lastScroll > scroll || scroll < navRef.current.clientHeight) {
				navRef.current.style.top = 0;
			} else {
				navRef.current.style.top = `${-navRef.current.clientHeight}px`;
			}

			lastScroll = scroll;
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		setNavHeight(navRef.current.clientHeight);
	}, [])

	return (
		<div style={{minHeight: navHeight}}>
			<div className={style["nav-bar"]} ref={navRef}>
				<Link href="/">
					<a><img src="/Lenwell-Digital-Logo-No-BG.png" alt="lenwell" /></a>
				</Link>
				<div className={style["nav-link-list"]}>
					<Link href="/repair-service">Repair Service</Link>
					<Link href="/lcd-swap">LCD Swap Service</Link>
					<Link href="/lcd-buyback">LCD Buyback</Link>
					<Link href="/about-us">About us</Link>
					<Link href="/contact-us">Contact us</Link>
				</div>
			</div>
		</div>
	);
}

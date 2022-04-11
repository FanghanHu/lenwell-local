/* eslint-disable @next/next/no-img-element */
import style from "./style.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
	const [navHeight, setNavHeight] = useState(0);
	const [isExpanded, setExpanded] = useState(false);
	const navRef = useRef();

	useEffect(() => {
		//hide scrollbar when scrolling down, show it when scrolling back up
		let lastScroll = window.pageYOffset;
		const handleScroll = () => {
			const scroll = window.pageYOffset;

			if (scroll > 0) {
				navRef.current.style.position = "fixed";
			} else {
				// navRef.current.style.position = "relative";
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
	}, []);

	return (
		<div style={{ minHeight: navHeight }}>
			<nav className={style["nav-bar"]} ref={navRef} role="navigation" onClick={(e) => {
				if(e.target.tagName === "A") {
					//shink navbar after clicking on a link
					setExpanded(false);
					e.target.blur();
				}
			}}>
				<Link href="/">
					<a>
						<img src="/Lenwell-Digital-Logo-No-BG.png" alt="lenwell" />
					</a>
				</Link>
				<div
					className={`${style["nav-link-list"]} ${
						isExpanded ? style.expanded : ""
					}`}
				>
					<Link href="/order-online">Schedule Online</Link>
					<div className={style.dropdown}>
						Guides
						<ul>
							<li>
								<Link href="/guides/samsung-smartphone-screen-replacement-guide">Samsung Smartphone Screen Replacement</Link>
							</li>
							<li>
								<Link href="/guides/ipad-pro-9.7-screen-replacement-guide">iPad Pro 9.7&ldquo; Screen Replacement</Link>
							</li>
							<li>
								<Link href="/guides/ipad-flex-positions">iPad Flex Cable Position References</Link>
							</li>
						</ul>
					</div>
					<Link href="/repair-service">Repair Price List</Link>
					<div className={style.dropdown}>
						Services
						<ul>
							<li>
								<Link href="/lcd-swap">LCD Swap</Link>
							</li>
							<li>
								<Link href="/lcd-buyback">LCD Buyback</Link>
							</li>
							<li>
								<Link href="/mail-in">Mail-In Order</Link>
							</li>
						</ul>
					</div>
					<div className={style.dropdown}>
						Info & Support
						<ul>
							<li>
								<Link href="/about-us">About us</Link>
							</li>
							<li>
								<Link href="/contact-us">Contact us</Link>
							</li>
						</ul>
					</div>

					<button
						className={style.arrow}
						onClick={() => {
							setExpanded(!isExpanded);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
				</div>
			</nav>
		</div>
	);
}

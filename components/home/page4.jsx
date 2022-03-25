import style from "./style.module.css";
import Link from "next/link";

export default function Page4() {
	return (
		<div className="segoe">
			<div
				className="background background-scroll-parallax px-2 px-md-3 py-2 py-lg-5 text-white text-center"
				style={{ backgroundImage: `url(/bg-home4.jpg)` }}
			>
				<div className="mt-5 mb-1 display-5 fw-bold">LCD Buyback</div>
				<div className="h6 fw-light mt-3 mb-5">
					Sell your broken screen to us
				</div>
				<Link href="/lcd-buyback">
                    <a className="h6 text-white fw-light text-decoration-underline mb-5">learn more</a>
				</Link>
			</div>
			<div className="d-flex flex-column flex-md-row justify-content-center align-items-center p-5 text-center">
				<div className="m-2 m-lg-5">
					<div className={`${style["buyback-icon"]} p-2`}>
						<img className="position-absolute top-50 start-50 translate-middle" src="/icon-package.png" alt="packages"/>
					</div>
					<div className="h5 fw-light">Mail your screen to us</div>
				</div>
				<div className="m-2 m-lg-5">
					<div className={style["buyback-icon"]}>
						<img className="position-absolute top-50 start-50 translate-middle" src="/icon-tablet.png" alt="tablet" />
					</div>
					<div className="h5 fw-light">We evalue your screen</div>
				</div>
				<div className="m-2 m-lg-5">
					<div className={style["buyback-icon"]}>
						<img className="position-absolute top-50 start-50 translate-middle" src="/icon-money.png" alt="payout" />
					</div>
					<div className="h5 fw-light">Get paid in Cash, Paypal or Cash App</div>
				</div>
			</div>
		</div>
	);
}

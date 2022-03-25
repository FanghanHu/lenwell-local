import Counter from "../counter";
import MouseParallax from "../effects/mouse-parallax";
import ScrollButton from "../scroll-button";
import style from "./style.module.css";

export default function Page1() {
	return (
		<div className="vh-100 position-relative text-center segoe overflow-hidden">
			<MouseParallax image="/bg-home.jpg" isReverse={true} />
			<div className="d-flex flex-column justify-content-around h-100">
				<div className="d-flex flex-column justify-content-center align-items-center">
					<img className={`my-5 ${style["logo-white"]}`} src="/Lenwell-Digital-Logo-No-BG.png" alt="lenwell" />
					<div>
						<div className="text-white text-shadow h5 fw-light">
							Cellphone, Tablets, Smart Watch
						</div>
						<div className="text-white text-shadow h3 fw-normal">
							Repair Service and Parts Provider
						</div>
					</div>
				</div>

				<div className="text-white">
					<div className="display-4 fw-normal">
						<Counter startNumber={10000} endNumber={35000} duration={3000} />+
					</div>
					<div className="h4 mt-1 fw-light">
						<div>Devices Serviced</div>
						<div>Since 2015</div>
					</div>
				</div>
			</div>
			<ScrollButton scrollTo="page2" color="#fff" />
		</div>
	);
}

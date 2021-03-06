import Link from "next/link";

export default function Page2() {
	return (
		<div className="segoe" id="page2">
			<div className="container">
				<div className="mx-2 my-3 my-sm-2 my-md-3 my-lg-5">
					<div className="h3 mb-1">Fast and Reliable Repair Service</div>
					<div className="h5 text-muted">For Apple and Samsung devices</div>
				</div>
			</div>
			<div
				className="background background-scroll-parallax px-2 px-md-3 py-2 py-lg-5"
				style={{ backgroundImage: `url(/bg-home2.jpg)` }}
			>
				<div className="d-flex justify-content-center">
					<div className="glass glass-dark shadow text-white w-fit-content p-4">
						<ul className="list-unstyled h4 md-h1 fw-light text-nowrap">
							<li>✓ Glass Repair</li>
							<li>✓ LCD Screen Replacement</li>
							<li>✓ Touch Pad Digitizer Repair</li>
							<li>✓ Battery Replacement</li>
							<li>✓ Charging Port Repair</li>
							<li>✓ Speaker Repair</li>
						</ul>
						<Link href="/repair-service">
							<a className="btn btn-primary h5 p-1">Price Estimate</a>
						</Link>
					</div>
					<div className="w-md-25"></div>
				</div>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-6 col-xl-4 d-flex flex-column justify-content-center">
						<div className="text-center mt-5">
							<div className="display-6 fw-bold">Need it fast?</div>
							<div className="h6 fw-light">
								We can get it done under 30 mins
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-xl-4 text-center py-5">
						<img width={200} src="/mobile-repair-logo.svg" alt="lcd swap" />
						<div className="fw-bold mt-3">Screen Swap Service</div>
						<div>Walk out in 30 mins</div>
						<div>We use genuine LCD only</div>
						<div>Fix broken screen, touch issue</div>
						<Link href="/lcd-swap">
							<a className="link mt-5">What is LCD Swap?</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

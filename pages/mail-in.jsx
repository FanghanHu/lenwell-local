import Head from "next/head";
import Link from "next/link";

export default function MailIn() {
	return (
		<div>
			<Head>
				<meta
					name="keywords"
					content="mail in, mail-in, tablet repair, iphone repair, cellphone repair, cell phone repair, by mail, via mail"
				/>
				<meta
					name="description"
					content="Mail your device in for a same day repair service."
				/>
			</Head>
			<div className="display-6 m-3 border-bottom w-fit-content">
				Same-day Mail-in Repair Service
			</div>
			<div
				className="background w-100 px-1 pt-3 pb-4 p-md-5"
				style={{ backgroundImage: `url(/bg-home2.jpg)`, height: "350px" }}
			></div>
			<div className="container my-5 fw-light">
				<p className="lead">
					We accept mail-in orders, and it is fairly easy and fast to send a
					phone or tablet for repair. however, there are a few things you
					need to take care of in order to avoid damage, confusion, and delays.
				</p>
				<h5>Pack your device carefully:</h5>
				<h6>All Devices:</h6>
				<ol>
					<li>Package your device in a box, do not use an envelope.</li>
					<li>
						Use a lot of cushions, make sure your device does not bounce around
						in the package.
					</li>
					<li>Keep the frame on if you are sending the LCD in only.</li>
				</ol>
				<h6>Tablets:</h6>
				<ol>
					<li>
						Use a hard box, because the package will be bigger, a hard box is
						important to keep the tablet from being bent and damaged.
					</li>
				</ol>

				<h5>Include your contact information in the package:</h5>
				<p>
					Write down the ticket number you get after you{" "}
					<Link href="/order-online">schedule the repair online</Link>, or write
					down your name, contact number, shipping address on a piece of paper,
					and put that piece of paper in the package.
				</p>

				<p>
					Once the package is here, we will diagnose the device, and compare the
					issues we found to the issue that you listed, If there is any
					discrepancy, we will contact you first. If everything matches, we will
					start on working on it immediately. The repair process usually takes 1
					day to complete, Once your device is repaired, we will send you your
					invoice and ship it back once the payment is received,
				</p>
			</div>
		</div>
	);
}

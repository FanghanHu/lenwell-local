import Link from "next/link";

export default function Referrer() {
	return (
		<div>
			<div
				className="background"
				style={{
					backgroundImage: `url(/bg-home7.jpg)`,
					width: "100%",
					height: "350px",
				}}
			></div>
			<div className="container py-5">
				<div className="row">
					<div className="col-3">
						<ol>
							<li>
								<a href="#introduction">Introduction</a>
							</li>
							<li>
								<a href="#getting-started">Getting Started</a>
							</li>
							<li>
								<a href="#price">How much can I earn?</a>
							</li>
							<li>
								<a href="#order">Submit an order</a>
							</li>
							<li>
								<a href="#get-paid">How to get paid</a>
							</li>
						</ol>
					</div>
					<div className="col-9">
						<div id="introduction">
							<div className="display-6">
								Introduction
							</div>
							<p>
								If your business involves phones or tablets, you are likely to get calls about repairing broken devices, and that is business opportunity, if you do not repair these devices yourself, consider send your client to us, and get paid in the process. 
							</p>
						</div>
						<div id="getting-started">
							<div className="display-6">
								Getting Started
							</div>
							<p>
								Before you can go out there and strike a deal, you need to register an account with us. With an account, you will have access to our deeply discounted business price list. Either contact in person, call us, or email us to get registered. we will need your business name, contact name, and phone number. You also need to fill out a tax exemption form. which can be downloaded <a href="/tax-exemption.pdf">here</a> .
							</p>
						</div>
						<div id="price">
							<div className="display-6">
								How much can I earn?
							</div>
							<p>
								Once you have your account ready, go to <Link href="/repair-service">Price List</Link> to see a complete list of services we provide and their prices, by default you will only see the retail price, but if you enter your account name or phone number to the web page, the page will then show your specific price list. Use this price list as a guide when you negotiate with your client. What you can bargin with your client minus the service cost from the price list is what you earn.
							</p>
						</div>
						<div id="order">
							<div className="display-6">
								Submit an order
							</div>
							<p>
								Fill out the form <Link href={'/order-online'}>Here</Link>, let us know what device and service to expect, use your own information for the contact, make sure you use the same phone number as the one you used to register your account, leave the price you bargained with your client and anything else we should know in the  description field. After you submit the order, you will get a ticket number, give your customer this ticket number and ask them to give this number to us when they show up in our store.
							</p>
						</div>
						<div id="get-paid">
							<div className="display-6">
								How to get paid
							</div>
							<p>
								We will charge your customer the full amount you bargained for, and then pay you your earnings. once your send your customer on their way, you can create a money request on Paypal or Cash App to collect your earnings. We will process your request at the end of day, or if the customer doesn't show up in a couple of days, the request will be denied.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

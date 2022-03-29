import Head from "next/head";
import { useState } from "react";
import ContactForm from "../components/contact-form";

export default function B2B() {
	return (
		<div>
			<Head>
				<meta
					name="keywords"
					content="tablet bulk repair, iphone bulk repair, cellphone bulk repair, cell phone bulk repair, wholesale, business, business price, business pricing, B to B, B2B, partnership, business to business, solution"
				/>
                <meta name="description" content="Fast and affordable b2b repair service, we take the hustle out of your work, so you can focus on what matters." />
			</Head>
			<div className="display-6 m-3 border-bottom w-fit-content">
				Business-to-Business Repair Service
			</div>
			<div
				className="background w-100 px-1 pt-3 pb-4 p-md-5"
				style={{ backgroundImage: `url(/bg-home3.jpg)`, height: "350px" }}
			></div>
			<div className="container my-5 fw-light">
				<p>
					Maintaining mobile devices for a business can be a costly hustle, when
					accidents happen, Lenwell can provide you with the most affordable
					business-to-business repair service.
				</p>
				<p>
					A majority of damaged devices have a broken screen, so we focused on
					solving this problem, and we have solidified our skills and perfected
					our methodologies in <b>screen repair</b>. We are able to reduce repair costs
					by repairing the broken glass instead of replacing the screen,
					replacing a faulty touch digitizer without replacing the LCD. In most
					cases, we are able to help our customers save <b>up 70%</b> of the repair
					cost.
				</p>
				<h5 className="text-center">
					Bulk Repair, More Discounts, and Free Shipping
				</h5>
				<p>
					To take advantage of our B2B discount, you can send your phones and
					tablets for repair in bulk, get more discounts on top of the already
					low price as you repair more devices with us, and you can enjoy free
					shipping by requesting shipping labels.
				</p>
				<h5 className="text-center my-5">
					Please fill the form below to request a quote from us:
				</h5>
				<ContactForm />
			</div>
		</div>
	);
}

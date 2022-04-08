import Head from "next/head";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

export default function Guide() {
	return (
		<div className="container segoe">
			<Head>
				<meta
					name="keywords"
					content="lcd replacement, lcd repair, glass replacement, glass repair, iPad 9.7, iPad Pro, 9.7 inche, A1673, A1674, A1675, tutorial, step by step, guide video, tutorial video"
				/>
			</Head>
			<h2 className="text-center mt-5">
				Screen Replacement Guide for iPad Pro 9.7&ldquo;
			</h2>

			<div
				className="ratio ratio-16x9 mx-auto my-5"
				style={{ maxWidth: "800px" }}
			>
				<iframe
					src="https://www.youtube.com/embed/k77Kp34ilEE"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<p className="lead my-5">
				In this guide we will show you how to replace the screen of an iPad Pro
				9.7, the device&lsquo;s models are A1673, A1674, A1675. repairing other
				iPad models may have a similar process, but due to different structure,
				locations of the flex cable may be different, please use caution and do
				further research if your device is of another model.
			</p>
			<div className="row">
				<div className="col-12 col-md-6">
					<h4>Preparation:</h4>
					<ol>
						<li>Back up the device to iCloud or iTunes before proceeding.</li>
						<li>
							Touch metal to discharge static electricity or use an anti-static
							wrist strap.
						</li>
						<li>
							Read the whole guide before you start. Contact us if help is
							needed.
						</li>
					</ol>
				</div>
				<div className="col-12 col-md-6 align-self-center">
					<div className="display-6">Tools needed:</div>
					<hr />
					<ul>
						<li>Packaging tape</li>
						<li>A Replacement Screen with frame on</li>
						<li>1 Metal Pry Card</li>
						<li>2 Plastic Pry Cards</li>
						<li>Screwdriver</li>
						<li>A pair of tweezers</li>
						<li>A Heat Source (Heating Pad or hairdryer)</li>
						<li>Adhesive (B7000)</li>
					</ul>
				</div>
			</div>

			<div className="h4">Part 1: Open the device (remove broken screen)</div>
			<hr />
			<p>1) Tape down the broken glass to prevent injury.</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/9.7/tape.jpg"
					alt="tape the screen down"
				/>
			</div>
			<p>
				2) Put the iPad face down on a heating pad set at 158°F (70°C) for 10
				minutes. Alternatively, heat the edges of the iPad using a hairdryer or
				a heat gun at least 2 inches away. The screen is held in place by
				adhesives which can be softened by heat.
			</p>
			<p>
				3) Starting from the top right side, slide the soft metal pry card
				between the glass and the frame, cut the adhesive loose from the screen,
				working from right to the bottom, then the left and the top side. when
				working on the bottom side, pay extra attention and leave a 1-inch space
				around the home button untouched, the home button is too close to the
				edge for you to cut on that area. during this whole process, do not
				insert more than 1/5 inch of your pry card into the device or you may
				scratch or cut the components inside.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/9.7/bottom.jpg"
					alt="do not cut below the home button"
				/>
			</div>
			<p>
				4) Use the metal pry card to create a small opening on the top right
				corner, slide the plastic card into the opening and slowly push it in
				below the LCD.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/9.7/metal-pry.jpg"
					alt="inseting the plastic pry card"
				/>
			</div>
			<p>
				5) When the plastic card is below the LCD, slide it along the 4 sides to
				fully separate the adhesive.
			</p>
			<p>
				6) Slowly lift the screen from the left side. DO NOT open it all the
				way. Hold it at a 90° angle and you will see the flex cable which is
				still connected.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/9.7/flex.jpg"
					alt="what the ipad pro 9.7 screen flex cable look like"
				/>
			</div>
			<p>
				7) The connectors are held down by a protective plate, unscrew the
				screws holding the plate, remove the plate and disconnect the flex
				cable, then the screen will be fully removed from the device.
			</p>
			<p className="my-5 mx-2 mx-md-5 lead border border-info p-3 rounded">
				The broken screen can be <Link href="/lcd-buyback">traded</Link> for
				store credit which can be used to buy accessories and repair parts.
				Shipping is on us, do not throw it away!
			</p>
			<div className="h4">
				Part 2: Transfer the home button and front camera bracket
			</div>
			<hr />
			<p className="lead">
				Touch ID only works with the original home button. The complete home
				button assembly (spacer, gasket, cable and bracket) needs to be
				transferred over to the new screen. It is fragile. Use patience and take
				time when removing it from the old screen.
			</p>
			<p>
				9) Disconnect the home button flex cable from the screen, it is located
				at the top left side of the home button and is held down by a piece of
				tape. Peel the tape off and release the lock on the connector, then use
				a pair of tweezers to gently pull the flex cable out and peel it off
				from the screen.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/9.7/remove-home-button.jpg"
					alt="removing the home button from iPad pro 9.7"
				/>
			</div>
			<p>
				10) Remove the black cover over the home button using the metal pry
				card, then remove the home button itself from the screen.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/9.7/remove-home-button2.jpg"
					alt="removing the home button from iPad pro 9.7"
				/>
			</div>
			<p>
				12) Scrape off residual adhesive. Clean bracket and glass using 99.9%
				isopropyl alcohol.
			</p>
			<p>
				13) Use B-7000 glue to secure the home button on the new screen. Make
				sure the bracket is aligned correctly before allowing the gel to set.
				The home button will not “click” when pressed if not installed
				correctly. Test for “click” sound when done. After that, use the B-7000
				glue to glue the front camera bracket onto the replacement screen.
				Finally, let the new screen sit for 3 hours or until the adhesive is
				dried.
			</p>
			<div className="h4">Part 3: Install the new screen</div>
			<hr />
			<p>
				14) Soften residual adhesive on the frame with 99.9% isopropyl alcohol
				and scrape it away using the metal pry card or a small flat screwdriver.
			</p>
			<p>
				15) Disconnect the battery, the battery connector is under a black cover
				located on the right side of the device, unscrew the cover and remove
				it, then locate the battery connector (see image below), unscrew the
				screw on the connector, then insert the corner of a plastic pry card
				under the connector to separate the connector from the socket. (WARNING:
				leaving the battery connected when installing the screen may cause fire
				and damage both the screen and the device)
			</p>
			<Carousel>
				<div>
					<img
						src="/guides/9.7/battery-cover.jpg"
						className="d-block w-100"
						alt="remove the battery cover"
					/>
				</div>
				<div>
					<img
						src="/guides/9.7/disconnect-battery.jpg"
						className="d-block w-100"
						alt="disconnecting the battery"
					/>
				</div>
			</Carousel>
			<p>
				16) Carefully bend the frame back if it is slightly distorted. If the
				frame is badly bent, you may not be able to correct it with tools found
				at home, in that case, professional repair is needed, please contact us
				for help.
			</p>
			<p>
				17) Connect a new screen&lsquo;s flex cable to the iPad, make sure you
				align the connector before pushing down, you should feel it snap into
				the socket when connected properly, do not try to force the connectors
				into the socket, they are very fragile, damage done to the connector can
				cause display and touch issue.
			</p>
			<p>
				18) Remove the plastic pry card from the battery connector, then power
				on the iPad and test the new screen. Make sure everything works on the
				new screen, i.e. color, display and touch everywhere on the screen.
			</p>
			<p>
				19) Install the screw on the battery connector, and Install the
				protective cover for the screen flex cable and the cover for the board,
				Apply B-7000 glue on the edge of the iPad frame where the original
				adhesive once was.
			</p>
			<p>
				20) Stick the suction cup on the screen and hold the screen with it.
				Align the new screen carefully to the frame and close it. then remove
				the suction cup. Apply slight pressure for 4 to 6 hours to ensure good
				contact between the new screen and the frame. This can be achieved by
				placing the iPad face down on a towel with several books on top of the
				iPad.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/9.7/applying-glue.jpg"
					alt="installing the new screen on an iPad Pro 9.7"
				/>
			</div>
		</div>
	);
}

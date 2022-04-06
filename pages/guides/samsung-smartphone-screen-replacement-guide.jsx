/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

export default function GuidePost() {
	return (
		<div className="container segoe">
            <Head>
                <meta name="keywords" content="lcd replacement, lcd repair, glass replacement, glass repair, samsung galaxy s10, G973, tutorial, step by step, guide video, tutorial video" />
            </Head>
			<h2 className="text-center mt-5">
				Screen Replacement Guide for Samsung Smartphones
			</h2>

			<div
				className="ratio ratio-16x9 mx-auto my-5"
				style={{ maxWidth: "800px" }}
			>
				<iframe
					src="https://www.youtube.com/embed/CODDvAbViGc"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
			<p className="lead my-5">
				In this guide we will show you how to replace the screen of a Samsung
				smartphone, We are using an S10 in this example, but the same method can
				be applied to most other Samsung models.
			</p>
			<div className="row">
				<div className="col-12 col-md-6">
					<p>
						There are many fragile components in a phone, to reduce the chance
						of failure,{" "}
						<b>
							please read the whole guide, or watch the whole video before start
							working on your device.
						</b>
					</p>
					<p>
						If you successfully removed your LCD, and it is still functional,
						you can <Link href="/lcd-buyback">trade it in</Link> for store credit which can then be used to buy
						accessories in our online store.
					</p>
					<p>
						Your device will no longer be waterproof after opening it, special
						equipment and procedures are needed to make a device waterproof
						again, and they are not included in this guide.
					</p>
				</div>
				<div className="col-12 col-md-6 align-self-center">
					<div className="display-6">Tools needed:</div>
					<hr />
					<ul>
						<li>A Replacement Screen with frame on</li>
						<li>1 Metal Pry Card</li>
						<li>1 to 2 Plastic Pry Card</li>
						<li>Screwdriver</li>
						<li>A pair of tweezers</li>
						<li>A Heat Source (Heating Pad or hairdryer)</li>
						<li>Some adhesive (B7000)</li>
					</ul>
				</div>
			</div>

			<div className="h4">Step 1. Softening the adhesive</div>
			<hr />
			<p>
				Most Samsung smartphone has their back cover glued to the frame. To
				remove the back cover, we need to heat the adhesive to soften it first.
				Turn off your device before you start. If you are using a heating pad,
				set the temperature to 158°F/70°C and heat the back of your device for 1
				to 3 mins. If you are using a hairdryer, turn it to medium heat and blow
				hot air towards the edge of your device, keep your hand moving, do not
				hover in one place or you may risk overheating your device.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/s10/heating-the-screen.jpg"
					alt="heating the screen"
				/>
			</div>
			<div className="h4">Step 2. Removing the back cover</div>
			<hr />
			<p>
				After the adhesive becomes soft, slide the metal pry card against the
				gap between the back cover and the phone's frame, once you have a small
				opening, switch to the plastic card and use a slicing motion to separate
				adhesive on all 4 sides. You may need to repeat step 1 if the
				temperature drops. Do not try to pry it open during this process, or you
				may crack the cover. Once you have separated the adhesive on all sides,
				the back cover will come off naturally.
			</p>

			<Carousel>
				<div>
					<img
						src="/guides/s10/prying.jpg"
						className="d-block w-100"
						alt="prying with metal card"
					/>
				</div>
				<div>
					<img
						src="/guides/s10/prying2.jpg"
						className="d-block w-100"
						alt="prying with plastic card"
					/>
				</div>
			</Carousel>

			<div className="h4">
				Step 3. Removing the motherboard and other components
			</div>
			<hr />
			<p>
				The motherboard, charging port, camera and many other components except
				the battery is secured to the phone's frame with screws, Remove these 16
				screws first (picture 1), and take off the cover. once you can see the
				motherboard and battery, disconnect the battery by unplugging the flex
				cable shown in picture 2. after that, remove the charging port cover,
				unplug and remove the camera, SIM card, and the SIM card holder, then
				also unplug the flex cables for the screen. You must disconnect the
				battery first during this step. Finally, remove these 3 screws (picture
				3) and gently lift the motherboard, remove the rare camera, speaker and
				vibration motor, and put them on the side so we can work on the battery.
			</p>
			<Carousel>
				<div>
					<img
						src="/guides/s10/opened-back.jpg"
						className="d-block w-100"
						alt="samsung galaxy without back cover"
					/>
				</div>
				<div>
					<img
						src="/guides/s10/opened-back2.jpg"
						className="d-block w-100"
						alt="samsung galaxy without back cover"
					/>
				</div>
				<div>
					<img
						src="/guides/s10/motherboard.jpg"
						className="d-block w-100"
						alt="samsung galaxy s10 motherboard"
					/>
				</div>
			</Carousel>
			<div className="h4">Step 4. Removing the battery</div>
			<hr />
			<p>
				The battery is held on the frame with adhesive as well, so we will need
				to heat the adhesive again. once it is soft, use a flathead screwdriver
				or the metal pry card to pry it off.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/s10/opened-back3.jpg"
					alt="battery"
				/>
			</div>
			<div className="h4">Step 5. Reassembling the device</div>
			<hr />
			<p>
				Get the replacement screen with the new frame, then we will install all
				the components on this new frame in the reverse order of how we removed
				them. First Put the speaker, rare camera and vibration motor on the new
				frame, Next, insert the motherboard and secure it with screws, then plug
				in all the flex cables except the battery flex. install the charging
				port cover, then the battery, and make sure you place the battery in the
				correct orientation so the flex cable points to the power connector. The
				leftover adhesive on the battery should hold it in place. once it is
				secured, connect the battery then install the motherboard cover, and put
				all 16 screws back in their place.{" "}
			</p>
			<div className="h4">Step 6. Closing the device</div>
			<hr />
			<p>
				Apply some glue along the sides of the back cover, then install it back
				on the frame. Use rubber bands to secure the back cover, or put some
				objects such as a book on top of the phone to apply some pressure. Wait
				for 2 to 3 hours for the adhesive to dry. After that, remove the rubber
				bands and use some alcohol wipe to clean up the excess glue.
			</p>
			<div className="d-flex justify-content-center mb-5">
				<img
					className="mx-auto w-100"
					src="/guides/s10/glue.jpg"
					alt="closing"
				/>
			</div>
			<div className="h4">Done</div>
			<hr />
			<p className="lead mb-5">
				And that's all. Good luck Repairing your smartphone! If you need any
				technical support, you may reach us via email: online@lenwellscreen.com
				or phone: 832-275-5999.
			</p>
		</div>
	);
}

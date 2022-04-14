/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

export default function Guide() {
	return (
		<div className="container segoe">
			<Head>
				<meta
					name="keywords"
					content="oem, original, genuine, original electronic manufacturer, aftermarket, copy, "
				/>
			</Head>
			<h2 className="text-center m-5">OEM vs Genuine vs Aftermarket Screens</h2>
			<p className="lead">
				If you ever needed to repair your mobile device screen, you might have
				come across words like “OEM”, “genuine” and “aftermarket”, what do they
				all mean? and why should you care about what type of screen you are
				getting?
			</p>

			<div className="display-5 mt-5 fw-bold">TL;DR</div>
			<p className="fs-lg mb-5">
				<b>OEM</b> screens have better quality but are more expensive. <br />
				<b>Genuine</b> screens are OEM screens sold by authorized vendors.
				<br />
				<b>Aftermarket</b> screens are made by a third party, their quality is
				usually inferior, but the price is usually cheaper.
				<br />
			</p>

			<p>
				“OEM” stands for “Original Equipment Manufacturer”, Which means it is
				made by the same manufacturer who supplied screens on brand new devices.
				OEM screens are not necessarily made by the same company that makes the
				device, it could be a different company that takes the device
				manufacturer's specification and make screens for them. OEM screens for
				the same device should have the same model, same hardware specification,
				and perform the same as the original screen that came with the device.
			</p>
			<p>
				A "genuine" screen is an OEM screen sold by the company that sold you
				the device, it carries the logo from that company and is generally more
				expensive. A genuine screen is not necessarily better than an OEM
				screen. OEM screens are just as reliable as genuine screens. If a 3rd
				party company brought a genuine iPhone screen from Apple and sells it to
				you, they can not call the screen genuine unless specifically authorized
				by Apple, although it is the exact same screen sold by Apple.
			</p>
			<p>
				"Aftermarket" screens are made by 3rd party manufacturers. They are
				usually reverse engineered since the specifications are usually not
				disclosed to the public. There can be many issues because of that. For
				example, some aftermarkets are a little thicker than OEM screens, some
				have a different hue, some have a dimmer backlight, and some are harder
				to see under the sun. These problems aftermarket screens have are more
				potent when it comes to proprietary technologies, for example, apple's
				true tune and retina display technology, they are a lot harder for 3rd
				party manufacturers to replicate, so many aftermarket screens do not
				support them.
			</p>
			<p className="lead mb-5">
				In summary, you should consider your specific needs when choosing
				between these screens. If you just need a working screen then an
				aftermarket screen may help you save some money. If you want the
				convenience that comes with the brand and doesn't mind spending a bit
				more on the service, then you should go for a genuine screen. If you
				want the best quality and cost-effective screen, then you should find a
				trusted store that sells OEM screens for a fair price.
			</p>
		</div>
	);
}

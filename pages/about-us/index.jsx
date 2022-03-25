import Link from "next/link";
import DirectionButton from "../../components/direction-button";
import style from "./style.module.css";

export default function AboutUs() {
	return (
		<div>
			<div className="display-6 m-3 border-bottom w-fit-content">About us</div>
			<div className="h3 text-center mt-5 border-bottom p-1">
				Lenwell Houston Location
			</div>
			<div className="text-center m-4">
				<div className="text-muted">5750 Bintliff Dr Ste 210</div>
				<div className="text-muted">Houston, Texas, 77036</div>
				<div className="text-muted">(832) 275-5999</div>
			</div>
			<div className="m-5"></div>
			<div className="d-flex justify-content-center">
				<DirectionButton />
			</div>
			<div className="h3 text-center mt-5 border-bottom p-1">
				Business Hours
			</div>
			<div className="m-4"></div>
			<div className="mx-auto w-fit-content">
				<table className={`my-4 ${style["business-hour"]}`}>
					<tbody>
						<tr>
							<td>Monday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Tuesday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Wednesday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Thursday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Friday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Saturday:</td>
							<td>9:00AM ~ 7:00PM</td>
						</tr>
						<tr>
							<td>Sunday:</td>
							<td>Closed</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="text-center m-5">
				<div className="h6">Have a question?</div>
				<Link href="/contact-us">
					<a className="button button-primary">Contact us</a>
				</Link>
			</div>
		</div>
	);
}

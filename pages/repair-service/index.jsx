import style from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const DEVICE_TYPES = [
	["/sa-iPad.png", "iPad", "ipad"],
	["/sa-iPhone.png", "iPhone", "iphone"],
	["/sa-iWatch.png", "Apple Watch", "apple-watch"],
	["/sa-Samsung-Phone.png", "Samsung Phone", "samsung-galaxy"],
	["/sa-Samsung-Tablet.png", "Samsung Tablet", "samsung-tablet"],
];

export default function RepairService() {
    const router = useRouter();
    
	return (
		<div>
			<div className="display-6 m-3 border-bottom w-fit-content">
				Repair Service Price List
			</div>
			<div
				className="background w-100 px-1 pt-3 pb-4 p-md-5"
				style={{ backgroundImage: `url(/bg-home3.jpg)`, height: "350px" }}
			></div>
			<div className="text-center p-3">
				You can find an estimated price for all kinds of repair services here.
				Start by selecting your device model.
			</div>

			<div className="text-center p-3">
				<Link href="/referrer">become a referrer</Link> and earn some extra
				money.
			</div>
			<div className="p-2 p-md-5 d-flex flex-wrap justify-content-center">
				{DEVICE_TYPES.map((device, index) => {
					return (
						<Link href={`${router.pathname}/${device[2]}`} passHref key={`link-${index}`}>
							<a className={`p-1 m-2 rounded border ${style["device-type-button"]}`}>
								<img src={device[0]} alt={device[1]} />
								<div className="text-center">{device[1]}</div>
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

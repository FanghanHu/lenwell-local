import Link from "next/link";
import { useRouter } from "next/router";
import DirectionButton from "../../components/direction-button";
import { DEVICE_MODELS_RETAIL } from "../../components/models";

export default function ModelDetail() {
	const router = useRouter();
	const [deviceType, deviceModel] = router.query.slug.map((el) =>
		el.replace(/-/g, " ")
	);
	const model = DEVICE_MODELS_RETAIL[deviceType.replace(/\s/g, "-")].find(
		(el) => el[0].toLowerCase() === deviceModel
	);

	return (
		<div className="container">
			<h2 className="my-4">
				Screen repair service for {deviceType} {deviceModel}
			</h2>
			<p>
				Get your {deviceType} {deviceModel} Repaired professionally at Lenwell.
				We provide glass and LCD replacement services that can fix cracked
				glass, lines on screen, black dots, and all sorts of display problems.
			</p>
			<div className="m-3">
				<h4>Prices: </h4>
                {model[1] ? <div className="text-muted fw-light fs-sm">Including models: {model[1]} (<Link href="/repair-service">Find Other Models</Link>)</div> : ""}
                <div className="d-flex justify-content-center text-center m-3">
                    {model[2] ? <div className="m-2"><h3>${model[2]}</h3><h4 className="text-muted fw-light">Glass Repair</h4></div> : ""}
                    {model[3] ? <div className="m-2"><h3>${model[3]}</h3><h4 className="text-muted fw-light">Touch Repair</h4></div> : ""}
                    {model[4] ? <div className="m-2"><h3>${model[4]}</h3><h4 className="text-muted fw-light">LCD Repair</h4></div> : ""}
                    {model[5] ? <div className="m-2"><h3>${model[5]}</h3><h4 className="text-muted fw-light">Backdoor Repair</h4></div> : ""}
                </div>
				<div className="text-muted text-center">
					Check the discounted price for B2B service {" "}
					<Link href="/repair-service">here</Link>.
				</div>
			</div>
            <h3 className="text-center mt-5">Fix your {deviceType} {deviceModel} today:</h3>
            <div className="text-center my-5">
                <div className="h4">Call us: (832) 275-5999 </div>
                <div className="text-muted fw-light">- OR -</div>
                <div className="h4 my-4">Visit us: <DirectionButton/></div>
            </div>

            <p className="my-5">
				No Warranty? No Problem, We will get your {deviceType} {deviceModel} {" "}
				fixed even if your warranty has already expired, you are welcome to walk
				in with your device at any time.
			</p>
		</div>
	);
}

export async function getStaticPaths() {
	const temp = {
		paths: [],
		fallback: false,
	};

	for (const deviceType in DEVICE_MODELS_RETAIL) {
		for (const deviceModel of DEVICE_MODELS_RETAIL[deviceType]) {
			temp.paths.push({
				params: {
					slug: [deviceType, deviceModel[0].toLowerCase().replace(/\s/g, "-")],
				},
			});
		}
	}

	return temp;
}

export async function getStaticProps({ params }) {
	return { props: {} };
}

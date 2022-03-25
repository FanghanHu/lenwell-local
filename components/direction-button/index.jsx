import style from "./style.module.css";

export default function DirectionButton() {
	return (
		<a
			className={`btn btn-dark ${style["direction-button"]}`}
			href={`https://goo.gl/maps/NYGrZTB8EGiRn8ug7`}
		>
			<img src="/google-maps.png" alt="direction" />
			Direction
		</a>
	);
}

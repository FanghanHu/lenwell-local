export default function GlassPanel({ children, className, style }) {
	return (
		<div
			className={className}
			style={{
				background: "rgba(255, 255, 255, 0.3",
				backdropFilter: "blur(4px)",
                padding: "20px",
                borderRadius: "6px",
                boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.1)",
				...style,
			}}
		>
			{children}
		</div>
	);
}

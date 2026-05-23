interface VrProps {
	className?: string;
}

const Vr: React.FC<VrProps> = ({ className }) => (
	<div className={`d-flex ${className}`}>
		<div className="vr"></div>
	</div>
);

export default Vr;

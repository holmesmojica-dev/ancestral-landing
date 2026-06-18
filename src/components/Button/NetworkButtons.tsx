import { FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

interface NetworkButtonsProps {
	className?: string;
}

const NetworkButtons: React.FC<NetworkButtonsProps> = ({ className }) => {
	const networks = [
		{
			id: 1,
			icon: FaFacebookF,
			label: "Facebook",
			url: "https://facebook.com",
		},
		{
			id: 2,
			icon: FaXTwitter,
			label: "X",
			url: "https://x.com",
		},
		{
			id: 3,
			icon: FaYoutube,
			label: "YouTube",
			url: "https://youtube.com",
		},
		{
			id: 4,
			icon: AiFillInstagram,
			label: "Instagram",
			url: "https://instagram.com",
		},
	];

	return (
		<div className={`d-flex gap-4 ${className}`}>
			{networks.map((network) => (
				<a
					className="btn-link-rounded-sm btn-c-secondary c-animation-shrink"
					key={`network-button-${network.id}`}
					href={network.url}
					target="_blank"
					rel="noreferrer"
					aria-label={network.label}
				>
					{<network.icon size={17} />}
				</a>
			))}
		</div>
	);
};

export default NetworkButtons;

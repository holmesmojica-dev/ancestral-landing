import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

interface NetworkButtonsProps {
	className?: string;
}

const NetworkButtons: React.FC<NetworkButtonsProps> = ({ className }) => {
	const networks = [
		{
			id: 1,
			icon: Facebook,
			url: "https://facebook.com",
		},
		{
			id: 2,
			icon: Twitter,
			url: "https://twitter.com",
		},
		{
			id: 3,
			icon: Youtube,
			url: "https://youtube.com",
		},
		{
			id: 4,
			icon: Instagram,
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
					>
						{<network.icon />}
					</a>
				))}
		</div>
	);
};

export default NetworkButtons;

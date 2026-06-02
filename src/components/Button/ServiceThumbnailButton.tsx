import { LucideProps } from "lucide-react";
import React from "react";

interface ServiceThumbnailButtonProps {
	title: string;
	btnIcon: React.ComponentType<LucideProps>;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ServiceThumbnailButton: React.FC<ServiceThumbnailButtonProps> = ({
	btnIcon: BtnIcon,
	title,
	onClick,
}) => (
	<button
		type="button"
		className="btn-link-square btn-c-secondary d-flex flex-column gap-3 align-items-center rounded-4"
		onClick={onClick}
	>
		<BtnIcon size={58} />
		{title}
	</button>
);

export default ServiceThumbnailButton;

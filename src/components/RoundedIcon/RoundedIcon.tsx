import { LucideProps } from "lucide-react";

export enum IconStyle {
	Accent,
	Secondary,
}

interface RoundedIconProps {
	style: IconStyle;
	icon: React.ComponentType<LucideProps>;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({ icon: Icon, style = IconStyle.Accent }) => {
	const styleClasses =
		style === IconStyle.Accent
			? "c-fc-secondary c-bg-accent"
			: "c-fc-accent c-bg-secondary";

	return <span className={`p-4 rounded-circle circle ${styleClasses}`}>{<Icon />}</span>;
};

export default RoundedIcon;

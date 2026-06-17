import { LucideProps } from "lucide-react";
import { ICON_STYLES, IconStyle } from "./RoundedIcon.constants";

interface RoundedIconProps {
	style: IconStyle;
	icon: React.ComponentType<LucideProps>;
}

const RoundedIcon: React.FC<RoundedIconProps> = ({ icon: Icon, style = ICON_STYLES.ACCENT }) => {
	const styleClasses =
		style === ICON_STYLES.ACCENT ? "c-fc-secondary c-bg-accent" : "c-fc-accent c-bg-secondary";

	return <span className={`p-3 rounded-circle circle ${styleClasses}`}>{<Icon />}</span>;
};

export default RoundedIcon;

import { LucideProps } from "lucide-react";
import RoundedIcon, { IconStyle } from "../RoundedIcon/RoundedIcon";

interface ContactWidgetProps {
	title: string;
	description: string;
	widgetIcon: React.ComponentType<LucideProps>;
}

const ContactWidget: React.FC<ContactWidgetProps> = ({
	title,
	description,
	widgetIcon: WidgetIcon,
}) => (
	<div className="d-flex align-items-center gap-3 justify-content-center py-1">
		<RoundedIcon icon={WidgetIcon} style={IconStyle.Secondary} />
		<div>
			<div className="c-ff-inter c-fs-h4 c-fc-primary c-fw-medium">
				<span>{title}</span>
			</div>
			<p className="m-0">{description}</p>
		</div>
	</div>
);

export default ContactWidget;

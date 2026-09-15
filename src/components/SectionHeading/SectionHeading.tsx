export interface SectionHeadingProps {
	readonly description?: string;
	readonly eyebrow?: string;
	readonly id?: string;
	readonly title: string;
	readonly tone?: "light" | "dark";
}

export function SectionHeading({
	description,
	eyebrow,
	id,
	title,
	tone = "light",
}: SectionHeadingProps) {
	return (
		<div className={`section-heading section-heading--${tone}`}>
			{eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
			<h2 className="section-heading__title" id={id}>
				{title}
			</h2>
			{description ? <p className="section-heading__description">{description}</p> : null}
		</div>
	);
}

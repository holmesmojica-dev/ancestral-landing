import type { ComponentPropsWithoutRef } from "react";

export interface SectionProps extends ComponentPropsWithoutRef<"section"> {
	readonly tone?: "page" | "surface" | "dark";
}

export function Section({ children, className, tone = "page", ...props }: SectionProps) {
	const classes = ["content-section", `content-section--${tone}`, className]
		.filter(Boolean)
		.join(" ");

	return (
		<section className={classes} {...props}>
			<div className="container">{children}</div>
		</section>
	);
}

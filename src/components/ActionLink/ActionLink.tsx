import type { ComponentPropsWithoutRef } from "react";

type ActionLinkVariant = "primary" | "secondary";
type ActionLinkSize = "default" | "large";

export interface ActionLinkProps extends ComponentPropsWithoutRef<"a"> {
	readonly variant?: ActionLinkVariant;
	readonly size?: ActionLinkSize;
}

export function ActionLink({
	variant = "primary",
	size = "default",
	className,
	children,
	...props
}: ActionLinkProps) {
	const classes = ["action-link", `action-link--${variant}`, `action-link--${size}`, className]
		.filter(Boolean)
		.join(" ");

	return (
		<a className={classes} {...props}>
			{children}
		</a>
	);
}

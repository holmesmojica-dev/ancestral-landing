export const ICON_STYLES = {
	ACCENT: "accent",
	SECONDARY: "secondary",
} as const;

export type IconStyle =
	(typeof ICON_STYLES)[keyof typeof ICON_STYLES];
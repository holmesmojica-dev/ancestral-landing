import type { ImgHTMLAttributes } from "react";

import fullLogo from "../../assets/images/logo/full/ancestral-logo.svg";
import fullLogoWhite from "../../assets/images/logo/full/ancestral-logo-white.svg";
import symbolLogo from "../../assets/images/logo/symbol/ancestral-symbol.svg";
import symbolLogoWhite from "../../assets/images/logo/symbol/ancestral-symbol-white.svg";

type BrandLogoVariant = "default" | "inverse";

export interface BrandLogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
	readonly symbolOnly?: boolean;
	readonly variant?: BrandLogoVariant;
}

const logoAssets = {
	default: {
		full: fullLogo,
		symbol: symbolLogo,
	},
	inverse: {
		full: fullLogoWhite,
		symbol: symbolLogoWhite,
	},
} as const;

export function BrandLogo({
	alt = "Ancestral Servicios Ambientales",
	className,
	symbolOnly = false,
	variant = "default",
	...props
}: Readonly<BrandLogoProps>) {
	const asset = logoAssets[variant][symbolOnly ? "symbol" : "full"];
	const classes = ["brand-logo", symbolOnly && "brand-logo--symbol", className]
		.filter(Boolean)
		.join(" ");

	return <img alt={alt} className={classes} src={asset} {...props} />;
}

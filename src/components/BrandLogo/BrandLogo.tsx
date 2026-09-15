import type { ImgHTMLAttributes } from "react";

import fullLogo from "../../assets/images/logo/full/ancestral-logo.svg";
import fullLogoWhite from "../../assets/images/logo/full/ancestral-logo-white.svg";
import responsiveLogo from "../../assets/images/logo/responsive/ancestral-logo-responsive.svg";
import responsiveLogoWhite from "../../assets/images/logo/responsive/ancestral-logo-responsive-white.svg";
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
		responsive: responsiveLogo,
		symbol: symbolLogo,
	},
	inverse: {
		full: fullLogoWhite,
		responsive: responsiveLogoWhite,
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
	const classes = ["brand-logo", symbolOnly && "brand-logo--symbol", className]
		.filter(Boolean)
		.join(" ");

	if (symbolOnly) {
		return <img alt={alt} className={classes} src={logoAssets[variant].symbol} {...props} />;
	}

	return (
		<picture>
			<source media="(max-width: 767.98px)" srcSet={logoAssets[variant].responsive} />

			<img alt={alt} className={classes} src={logoAssets[variant].full} {...props} />
		</picture>
	);
}

import casLogo from "../assets/images/partners/cas-logo.svg";
import cdmbLogo from "../assets/images/partners/cdmb-logo.svg";
import santanderLogo from "../assets/images/partners/dep-santander-logo.svg";
import marvalLogo from "../assets/images/partners/marval-logo.svg";
import rutaCacaoLogo from "../assets/images/partners/ruta-cacao-logo.svg";

export const trustedEntities = [
	{ name: "CDMB", logo: cdmbLogo },
	{ name: "Corporación Autónoma Regional de Santander (CAS)", logo: casLogo },
	{ name: "Ruta del Cacao", logo: rutaCacaoLogo },
	{ name: "Gobernación de Santander", logo: santanderLogo },
	{ name: "Marval", logo: marvalLogo },
] as const;

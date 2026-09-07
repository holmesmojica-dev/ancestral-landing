import { About } from "../../components/About/About";
import { Contact } from "../../components/Contact/Contact";
import { ExperienceIndicators } from "../../components/ExperienceIndicators/ExperienceIndicators";
import { Hero } from "../../components/Hero/Hero";
import { Services } from "../../components/Services/Services";
import { TerritorialCommitment } from "../../components/TerritorialCommitment/TerritorialCommitment";
import { TrustedEntities } from "../../components/TrustedEntities/TrustedEntities";

export function HomePage() {
	return (
		<>
			<Hero />
			<ExperienceIndicators />
			<About />
			<Services />
			<TerritorialCommitment />
			<TrustedEntities />
			<Contact />
		</>
	);
}

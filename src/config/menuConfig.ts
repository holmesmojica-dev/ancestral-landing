import AboutUs from "../sections/AboutUs/AboutUs";
import ContactUs from "../sections/ContactUs/ContactUs";
import FullScreenBanner from "../sections/FullScreenBanner/FullScreenBanner";
import OurServices from "../sections/OurServices/OurServices";
import WhyUs from "../sections/WhyUs/WhyUs";

export const menuSectionClass = "menu-section";

export enum MenuItemId {
	Home = "home",
	About = "about-us",
	WhyUs = "why-us",
	OurServices = "our-services",
	Contact = "contact-us",
}

export const menuItems = [
	{
		id: MenuItemId.Home,
		title: "INICIO",
		section: FullScreenBanner,
	},
	{
		id: MenuItemId.About,
		title: "NOSOTROS",
		section: AboutUs,
	},
	{
		id: MenuItemId.WhyUs,
		title: "PORQUÉ NOSOTROS",
		section: WhyUs,
	},
	{
		id: MenuItemId.OurServices,
		title: "SERVICIOS",
		section: OurServices,
	},
	{
		id: MenuItemId.Contact,
		title: "CONTACTO",
		section: ContactUs,
	},
];

export const getMenuSectionId = (itemId: MenuItemId) => `${itemId}-section`;

export const getBaseSectionHref = (itemId: MenuItemId) => `#${getMenuSectionId(itemId)}`;

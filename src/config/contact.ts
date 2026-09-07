export const contactDetails = {
	addressLine: "Calle 54 # 22-12",
	cityLine: "Bucaramanga, Santander",
	phoneDisplay: "+57 316 411 4933",
	phoneHref: "tel:+573164114933",
	whatsAppUrl: "https://wa.me/573164114933",
	facebookUrl: "https://www.facebook.com",
	instagramUrl: "https://www.instagram.com",
	mapEmbedUrl:
		"https://www.google.com/maps?q=Calle+54+%23+22-12,+Bucaramanga,+Santander&output=embed",
} as const;

export function createWhatsAppUrl(message: string) {
	return `${contactDetails.whatsAppUrl}?text=${encodeURIComponent(message)}`;
}

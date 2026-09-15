export interface ContactRequest {
	readonly name: string;
	readonly email: string | null;
	readonly phone: string | null;
	readonly service: string | null;
	readonly message: string;
	readonly captchaToken: string;
}

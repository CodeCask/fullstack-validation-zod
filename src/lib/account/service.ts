export class AccountService {
	constructor(private readonly accountId: string) {}

	async updateEmail(email: string) {
		console.log(`Updating email for account ${this.accountId} to ${email}`);
	}
}

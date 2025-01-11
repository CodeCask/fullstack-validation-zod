import { UpdateEmailSchema } from '$lib/account/schemas';
import { AccountService } from '$lib/account/service';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData());
		const validatedSchema = UpdateEmailSchema.safeParse(formData);

		if (!validatedSchema.success) {
			return fail(400, {
				errors: validatedSchema.error.flatten()
			});
		}

		const service = new AccountService(locals.accountId);
		await service.updateEmail(validatedSchema.data.email);

		redirect(307, '/success');
	}
};

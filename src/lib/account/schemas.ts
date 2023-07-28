import { z } from 'zod';

export const UpdateEmailSchema = z
	.object({
		email: z.string().min(1, 'E-mail required').email('Invalid email'),
		repeat: z.string().min(1, 'Repeat required').email('Invalid email')
	})
	.superRefine((data, ctx) => {
		if (data.email !== data.repeat) {
			ctx.addIssue({
				code: 'custom',
				message: 'Emails do not match',
				path: ['repeat']
			});
		}
	});

export type UpdateEmail = z.infer<typeof UpdateEmailSchema>;

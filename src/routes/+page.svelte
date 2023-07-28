<script lang="ts">
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-zod';
	import { UpdateEmailSchema, type UpdateEmail } from '$lib/account/schemas';
	import { applyFormSuccessResponse, applyFormErrorResponse } from '$lib/utils/forms';

	const { form, touched, errors } = createForm<UpdateEmail>({
		extend: validator({ schema: UpdateEmailSchema }),
		onSuccess: applyFormSuccessResponse,
		onError: applyFormErrorResponse
	});
</script>

<form use:form method="post">
	<label for="email">New e-mail</label>
	<input type="email" id="email" name="email" />

	{#if $touched.email && $errors.email}
		<span class="error">{$errors.email[0]}</span>
	{/if}

	<label for="repeat">Repeat</label>
	<input type="email" id="repeat" name="repeat" />

	{#if $touched.repeat && $errors.repeat}
		<span class="error">{$errors.repeat[0]}</span>
	{/if}

	<button type="submit">Update</button>
</form>

<style>
	.error {
		display: block;
		color: red;
	}

	label {
		display: block;
	}

	input {
		display: block;
	}

	button {
		margin-top: 1rem;
	}
</style>

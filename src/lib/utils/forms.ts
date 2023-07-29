import { applyAction, deserialize } from '$app/forms';
import { FelteSubmitError } from 'felte';

/**
 * Generic utility functions for optimal working of Felte with SvelteKit.
 */

/**
 * Can be used as a handler for felte's `onSubmit` prop when used with form actions.
 *
 * @param response
 * @returns
 */
export async function applyFormSuccessResponse(response: unknown) {
	if (!(response instanceof Response)) {
		throw new Error('Unexpected response');
	}

	const actionResult = await response.text();
	return applyAction(deserialize(actionResult));
}

/**
 * Can be used as a handler for felte's `onError` prop when used with form actions.
 *
 * @param response
 * @returns
 */
export async function applyFormErrorResponse(error: unknown) {
	if (!(error instanceof FelteSubmitError)) {
		throw new Error('Unexpected response');
	}

	const actionResult = await error.response.json();
	return applyAction(actionResult);
}

import { defineMiddleware } from 'astro:middleware';
import { paraglideMiddleware } from './paraglide/server.js';

export const onRequest = defineMiddleware((context, next,) => {
	return paraglideMiddleware(context.request, () => {
		if (!context.isPrerendered)
			console.log('middleware', context.clientAddress);
		return next();
	});
});

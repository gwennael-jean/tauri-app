import App from './App.svelte';

import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/fontawesome";

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

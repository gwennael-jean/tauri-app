import { writable } from "svelte/store";

export const user = writable({
    firstname: 'Gwennael',
    lastname: 'Jean',
    email: 'gwenael.jean@gmail.com',
});

import { writable } from "svelte/store";

export const repository = writable({
    repository: null,
    git: {
        logs: null
    }
});

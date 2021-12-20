
import { writable } from "svelte/store";

export const repositories = writable([
    {
        name: "Repository 01"
    },
    {
        name: "Repository 02"
    },
    {
        name: "Repository 03"
    },
]);

<script>
    import { get } from "svelte/store";
    import { user } from "../stores/user";
</script>

<main class="flex flex-row bg-secondary p-1 border-b border-primary">
    {get(user).firstname}
    {get(user).lastname}
</main>

<style>

</style>

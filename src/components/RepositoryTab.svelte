<script>
    import { get } from "svelte/store";
    import { repositories } from "../stores/repositories";
</script>

<main class="bg-secondary border-b border-primary">
    <ul class="flex flex-row">
        {#each get(repositories) as repository}
            <li class="px-2 py-1">{repository.name}</li>
        {/each}
    </ul>
</main>

<style>

</style>

<script>
    import { config } from "../stores/config";
    import { get } from "svelte/store";
</script>

<main class="flex flex-row justify-end bg-secondary p-1 border-t border-primary">
    {get(config).configPath}
</main>

<style>

</style>

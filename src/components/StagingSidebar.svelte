<script>
    import CommiterBlock from "./CommiterBlock.svelte";
</script>

<main class="flex flex-col">
    <slot></slot>
    <CommiterBlock/>
</main>

<style>
    :global(.staging-block) {
        @apply flex flex-col grow;
    }

    :global(.staging-block .header) {
        @apply text-right;
    }

    :global(.staging-block .header button) {
        @apply p-1 select-none rounded-md text-white whitespace-nowrap border;
    }

    :global(.staging-block .body) {
        @apply flex grow p-2 my-2 bg-primary;
    }
</style>

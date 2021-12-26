<script>
    import RepositoryTab from "./components/RepositoryTab.svelte";
    import ActionBar from "./components/ActionBar.svelte";
    import LeftSidebar from "./components/LeftSidebar.svelte";
    import RightSidebar from "./components/RightSidebar.svelte";
    import BottomBar from "./components/BottomBar.svelte";
    import Graph from "./components/Graph.svelte";

    import bootstrap from "./services/Bootstrap";
</script>

<main class="text-white flex flex-col bg-primary absolute inset-0">
    {#await bootstrap.load()}
        <p>
            ...waiting
        </p>
    {:then value}
        <RepositoryTab />
        <ActionBar />
        <div class="flex flex-row grow min-h-0">
            <LeftSidebar />
            <div class="flex flex-col grow bg-primary p-1 overflow-auto min-h-0">
                <Graph />
            </div>
            <RightSidebar />
        </div>
        <BottomBar />
    {:catch error}
        <p style="color: red">
            {error}
        </p>
    {/await}
</main>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

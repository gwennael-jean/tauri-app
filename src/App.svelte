<script>
    import RepositoryTab from "./components/RepositoryTab.svelte";
    import ActionBar from "./components/ActionBar.svelte";
    import LeftSidebar from "./components/LeftSidebar.svelte";
    import RightSidebar from "./components/RightSidebar.svelte";
    import BottomBar from "./components/BottomBar.svelte";
</script>

<main class="text-white h-full flex flex-col bg-gray-100">
    <RepositoryTab />
    <ActionBar />
    <div class="flex flex-row grow">
        <LeftSidebar />
        <div class="flex flex-col grow bg-primary p-1">
            <h1>Hello !</h1>
            <p>
                Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
                to learn how to build Svelte apps.
            </p>
        </div>
        <RightSidebar />
    </div>
    <BottomBar />
</main>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

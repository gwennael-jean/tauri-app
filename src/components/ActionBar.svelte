<script>
    import { get } from "svelte/store";
    import { user } from "../stores/user";
</script>

<main class="flex justify-between flex-row bg-secondary p-1 border-b border-primary">
    <ul class="flex flex-row">
        <li>
            <a href="#" class="px-1" title="Open Repository">
                <i class="fas fa-folder-open"></i>
            </a>
        </li>
        <li>
            <a href="#" class="px-1" title="Fetch">
                <i class="fas fa-sync"></i>
            </a>
        </li>
    </ul>
    <ul class="flex flex-row">
        <li>
            <a href="#" class="px-1" title="Pull">
                <i class="fas fa-download"></i>
            </a>
        </li>
        <li>
            <a href="#" class="px-1" title="Push">
                <i class="fas fa-upload"></i>
            </a>
        </li>
        <li>
            <a href="#" class="px-1" title="Branch">
                <i class="fas fa-code-branch"></i>
            </a>
        </li>
        <li>
            <a href="#" class="px-1" title="Stash">
                <i class="fas fa-box"></i>
            </a>
        </li>
        <li>
            <a href="#" class="px-1" title="Pop">
                <i class="fas fa-box-open"></i>
            </a>
        </li>
    </ul>
    <div>
        {get(user).firstname}
        {get(user).lastname}
    </div>
</main>

<style>

</style>

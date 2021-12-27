<script>

</script>

<main class="">
    <div class="commiter-title">Commit message</div>
    <div class="commit-form">
        <input type="text" class="commit-summary" placeholder="Summary"/>
        <textarea class="commit-description" rows="3" placeholder="Description"></textarea>
        <button>
            Commit
        </button>
    </div>
</main>

<style>
    main {
        @apply flex flex-col;
    }

    .commit-form {
        @apply flex flex-col;
    }

    .commit-summary {
        @apply py-2 mb-1 w-full text-white bg-primary rounded-md px-1 focus:outline-none;
    }

    .commit-description {
        @apply py-2 mb-1 w-full text-white bg-primary rounded-md px-1 focus:outline-none;
    }

    button {
        @apply mx-1 px-1 py-1 select-none rounded-md text-white bg-emerald hover:bg-nephritis whitespace-nowrap;
    }
</style>

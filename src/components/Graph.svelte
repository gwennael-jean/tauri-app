<script>
    import { gitLog } from "../actions/git/log";
    import { repository } from "../stores/repository";

    let logs = null;
    repository.subscribe(repository => {
        logs = repository.git.logs;
    });
</script>

<div>
    {#await gitLog()}
        <p>
            ...waiting
        </p>
    {:then value}
        <table class="w-full select-none">
            <tbody>
            {#each logs as log}
                <tr class="pointer">
                    <td></td>
                    <td class="td-message">
                        <span>
                            {#each log.branches as branch}
                                <a href="#" class="btn btn-branch">
                                    {branch}
                                </a>
                            {/each}

                                {#each log.tags as tag}
                                <a href="#" class="btn btn-tag">
                                    {tag}
                                </a>
                            {/each}

                            {log.subject}
                        </span>
                    </td>
                    <td class="td-author">
                        {log.author_name}
                    </td>
                </tr>
            {/each}
            </tbody>
        </table>

    {:catch error}
        <p style="color: red">
            {error}
        </p>
    {/await}
</div>

<style>
    .btn-branch {
        @apply mx-1 px-1 py-1 select-none rounded-md text-white bg-amethyst hover:bg-wisteria whitespace-nowrap;
    }

    .btn-branch:first-child {
        @apply ml-0;
    }

    .btn-branch:last-child {
        @apply mr-0;
    }

    .btn-tag {
        @apply px-1 py-1 select-none rounded-md text-white bg-concrete hover:bg-asbestos whitespace-nowrap;
    }

    .td-message {
        @apply w-full;

        position: relative;
        width: 100%;
    }

    .td-message:before {
        content: '&nbsp;';
        visibility: hidden;
    }

    .td-message span {
        position: absolute;
        left: 0;
        right: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0 .25rem;
    }

    .td-author {
        @apply w-0 whitespace-nowrap;
    }
</style>

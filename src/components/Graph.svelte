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
        <table>
            <tbody>
            {#each logs as log}
                <tr>
                    <td>
                        {#each log.branches as ref}
                            <a href="#" class="flex px-1 py-1 font-semibold select-none rounded-md text-white bg-indigo-500 hover:bg-indigo-600 whitespace-nowrap">
                                {ref}
                            </a>
                        {/each}
                    </td>
                    <td></td>
                    <td>{log.subject}</td>
                    <td>{log.author_name}</td>
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

</style>

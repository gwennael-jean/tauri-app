<script>
    import { gitLog } from "../actions/git/log";
    import { repository } from "../stores/repository";

    let logs = null;
    repository.subscribe(repository => {
        logs = repository.git.logs;
    });

    console.log(logs);
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
                    <td>{log.hash}</td>
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

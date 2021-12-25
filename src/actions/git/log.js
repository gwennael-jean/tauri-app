import { repository } from "../../stores/repository";
import { get } from "svelte/store";
import gitCommand from "../../services/Invoker/GitCommand";
import gitLogTransformer from "../../services/Transformer/GitLogTransformer";

export const gitLog = (skip, count) => {
    return new Promise((resolve, reject) => {
        skip = skip || 0;
        count = count || 3;
        gitCommand.invoke('log', { skip, count })
            .then((result) => {
                repository.update(repository => {
                    repository.git.log = gitLogTransformer.transform(result);
                    return repository;
                });

                // console.log(result);
                // console.log(get(repository));
            })
    });
};

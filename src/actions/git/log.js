import { repository } from "../../stores/repository";
import gitCommand from "../../services/Invoker/GitCommand";
import gitLogTransformer from "../../services/Transformer/GitLogTransformer";

export const gitLog = (skip, count) => {
    return new Promise((resolve, reject) => {
        skip = skip || 0;
        count = count || 50;
        gitCommand.invoke('log', { skip, count })
            .then((result) => {
                repository.update(repository => {
                    repository.git.logs = gitLogTransformer.transform(result);
                    return repository;
                });

                resolve();
            })
    });
};

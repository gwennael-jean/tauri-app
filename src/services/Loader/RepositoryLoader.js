import { invoke } from "@tauri-apps/api";
import { repository } from "../../stores/repository";
import { repositories } from "../../stores/repositories";
import { get } from "svelte/store";

export class RepositoryLoader {
    load() {
        return new Promise((resolve, reject) => {
            let actifRepositories = get(repositories).filter(repository => repository.actif);

            if (actifRepositories.length === 0) {
                reject("No repository actif");
            }

            repository.set({
                repository: actifRepositories[0],
                git: {}
            });

            invoke('git_status', { repository: get(repository).repository.path })
                .then((message) => {
                    repository.update(repository => {
                        repository.git.status = message;
                        return repository;
                    });

                    console.log(message);
                    console.log(get(repository));

                    resolve();
                })
        })
    }
}

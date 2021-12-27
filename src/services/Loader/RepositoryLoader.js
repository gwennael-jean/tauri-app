import { getActifRepositories, setRepository } from "../../actions/repository";

export class RepositoryLoader {
    load() {
        return new Promise((resolve, reject) => {
            let actifRepositories = getActifRepositories();

            if (actifRepositories.length === 0) {
                reject("No repository actif");
            }

            setRepository(actifRepositories[0]);

            resolve();
        })
    }
}

import { ConfigLoader } from "./Loader/ConfigLoader";
import { UserLoader } from "./Loader/UserLoader";
import { RepositoriesLoader } from "./Loader/RepositoriesLoader";
import { RepositoryLoader } from "./Loader/RepositoryLoader";

class Bootstrap {
    load() {
        return (new ConfigLoader()).load()
            .then(() => {
                return Promise.all([
                    (new UserLoader()).load(),
                    (new RepositoriesLoader()).load(),
                ])
            })
            .then(() => (new RepositoryLoader()).load())
    }
}

const bootstrap = new Bootstrap();

export default bootstrap;

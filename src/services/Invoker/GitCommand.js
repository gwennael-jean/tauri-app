import { invoke } from "@tauri-apps/api";
import { getRepository } from "../../actions/repository";

class GitCommand {
    invoke(cmd, args) {
        args = args || {};

        return invoke('git_' + cmd, {
            ...args,
            ...{ repository: getRepository().path }
        });
    }
}

const gitCommand = new GitCommand();

export default gitCommand;

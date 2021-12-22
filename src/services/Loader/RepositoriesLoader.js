import { get } from "svelte/store";
import { fs } from "@tauri-apps/api";

import { config } from "../../stores/config";
import { repositories } from "../../stores/repositories";

export class RepositoriesLoader {
    load() {
        return new Promise((resolve, reject) => {
            return fs.readTextFile(get(config).configPath + "repositories.json")
                .then((data) => {
                    console.log('repositories loaded !')
                    repositories.set(JSON.parse(data).data)
                    resolve()
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

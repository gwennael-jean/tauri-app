import { get } from "svelte/store";
import { fs } from "@tauri-apps/api";

import { config } from "../../stores/config";
import { user } from "../../stores/user";

export class UserLoader {
    load() {
        return new Promise((resolve, reject) => {
            return fs.readTextFile(get(config).configPath + "user.json")
                .then((data) => {
                    console.log('user loaded !')
                    user.set(JSON.parse(data).data)
                    resolve()
                })
                .catch((err) => {
                    reject(err)
                })
        })
    }
}

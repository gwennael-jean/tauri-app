import { path } from "@tauri-apps/api";

import { config } from "../../stores/config";

export class ConfigLoader {
    load() {
        return path.configDir()
            .then((configPath) => {
                console.log('config loaded !')
                config.set({
                    configPath: configPath + "tauri-app" + path.sep
                })
            })
    }
}

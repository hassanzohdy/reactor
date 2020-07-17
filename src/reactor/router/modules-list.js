import { addBaseAppPath } from "./apps-list";

// List of all modules 
const modulesList = {};

/**
 * Create modules list for all available applications
 * 
 * @param  {array} modules
 * @returns {void}
 */
export function setModules(modules) {
    for (let moduleOptions of modules) {
        const { path, name, modules, loadMain } = moduleOptions;

        if (path) {
            addBaseAppPath(path);
        }

        // spread all entries into object
        for (let moduleInfo of modules) {
            moduleInfo.load = () => import(`modules/${name}/${moduleInfo.module}/${moduleInfo.module}-provider.js`);
            if (loadMain) {
                moduleInfo.appProvider = () => import(`modules/${name}/${name}-provider.js`); // modules/admin/admin-provider.js
            }

            // loop over the entry array
            for (let entryRoute of moduleInfo.entry) {
                modulesList[entryRoute] = moduleInfo;
            }
        }

    }
}

export default modulesList;
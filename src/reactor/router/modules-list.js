import modules from 'shared/modules';

// List of all modules 
const modulesList = {};

// spread all entries into object
for (let moduleInfo of modules) {
    moduleInfo.load = () => import(`modules/${moduleInfo.module}/${moduleInfo.module}-provider.js`);
    // loop over the entry array
    for (let entryRoute of moduleInfo.entry) {
        modulesList[entryRoute] = moduleInfo;
    }
}

export default modulesList;
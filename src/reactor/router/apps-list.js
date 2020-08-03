import { concatRoute } from "reactor/router";

const appsList = [];

/**
 * Add new app base path
 * 
 * @param  {string} path  
 */
export function addBaseAppPath(path) {
    appsList.push(path);    
}

let currentBaseAppPath = '/';

/**
 * Set current base App path
 * 
 * @param  {string} path
 */
export function setCurrentBseAppPath(path) {
    currentBaseAppPath = concatRoute(path);
}

/**
 * Get current base app path
 * 
 * @returns {string}
 */
export function getCurrentBseAppPath() {
    return currentBaseAppPath;
}

export default appsList;
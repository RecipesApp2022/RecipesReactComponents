import SystemInfo from "../util/SystemInfo"

export default (path, defaultPath = null) => {
    if (!path) {
        return defaultPath;
    }
    
    return `${SystemInfo.api}${path}`;
}
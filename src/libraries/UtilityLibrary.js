const useS3 = true;
const UtilityLibrary = {
    renderAssetPath(assetPath, collectionPath) {
        let path = `/collections/${collectionPath}/${assetPath}`;
        let fullPath;
        if (useS3) {
            fullPath = `https://img.rod.dev${path}`
        } else {
            fullPath = require(`@/assets${path}`);
        }
        return fullPath;
    }
};

export default UtilityLibrary;
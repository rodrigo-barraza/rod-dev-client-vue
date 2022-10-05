const useS3 = false;
const UtilityLibrary = {
    renderAssetPath(assetPath, collectionPath) {
        let path = `/collections/${collectionPath}/${assetPath}`;
        let fullPath = require(`@/assets${path}`);
        if (useS3) {
            fullPath = `https://img.rod.dev${path}`
        }
        return fullPath;
    }
};

export default UtilityLibrary;
import moment from 'moment';

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
    },
    generateCollectionSchema(collection) {
        const works = collection.works;
        const schemaArray = [];

        const collectionObject = {
            "@context": "https://schema.org",
            "@id": `https://rod.dev/collections/${collection.path}`,
            "@type": "Collection",
            "name": collection.title,
            "creator": "Rodrigo Barraza",
            "hasPart": [
            ]
        }

        works.forEach((work) => {
            if (work.imagePath) {
                const imageObject = {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "contentUrl": UtilityLibrary.renderAssetPath(work.imagePath, collection.path),
                    "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
                    // "acquireLicensePage": "https://example.com/how-to-use-my-images"
                }
                const creativeWorkObject = {
                    "@context": "https://schema.org/",
                    "@type": "CreativeWork",
                    "name": work.title,
                    "author": "Rodrigo Barraza",
                    "image": imageObject,
                    // "@id": "http://www.worldcat.org/oclc/17105155",
                    // "isPartOf": {
                    //     "@id": "http://example.org/colls/68"
                    // },
                }
                schemaArray.push(creativeWorkObject);
            } else if (work.videoPath) {
                const videoObject = {
                    "@context": "https://schema.org",
                    "@type": "VideoObject",
                    "name": work.title,
                    "description": work.description,
                    "thumbnailUrl": UtilityLibrary.renderAssetPath(work.poster, collection.path),
                    "uploadDate": work.uploadDate,
                    "duration": moment.duration(work.duration, 'seconds').toISOString(),
                    "contentUrl": UtilityLibrary.renderAssetPath(work.videoPath, collection.path),
                    // "embedUrl": "https://www.example.com/embed/123",
                    // "interactionStatistic": {
                    //     "@type": "InteractionCounter",
                    //     "interactionType": { "@type": "WatchAction" },
                    //     "userInteractionCount": 5647018
                    // }
                }
                const creativeWorkObject = {
                    "@context": "https://schema.org/",
                    "@type": "CreativeWork",
                    "name": work.title,
                    "author": "Rodrigo Barraza",
                    "video": videoObject,
                    // "@id": "http://www.worldcat.org/oclc/17105155",
                    // "isPartOf": {
                    //     "@id": "http://example.org/colls/68"
                    // },
                    dateCreated: work.uploadDate,
                    abstract: work.description,
                }
                schemaArray.push(creativeWorkObject);
            }
        });
        collectionObject.hasPart = schemaArray;
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.textContent = JSON.stringify(collectionObject);
        document.head.appendChild(script);
    },
};

export default UtilityLibrary;
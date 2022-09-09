<template>
  <main collection-view>
    <!-- <div title-one>
        <div container>
            <h1>{{currentCollection.name}}</h1>
        </div>
    </div> -->
    <div collection>
        <div itemscope itemtype="https://schema.org/CreativeWork" work v-for="(work, workIndex) in currentCollection.works" v-bind:key="workIndex" :id="work.path">
            <div container>
                <img v-if="work.imagePath" v-on:click="fullScreen" :src="require(`@/assets/collections/${currentCollection.path}/${work.imagePath}.jpg`)" v:on-click/>
                <video id="oneVideo" v-if="work.videoPath" autoplay muted controls>
                    <source :src="require(`@/assets/collections/${currentCollection.path}/${work.videoPath}.mp4`)" type="video/mp4">
                     Your browser does not support the video tag.
                </video>
            </div>
            <div information>
                <div container>
                    <div name>
                        <h2 itemprop="name">{{work.name}}</h2>
                        <div year><span itemprop="dateCreated">{{work.year}}</span></div>
                    </div>
                    <div actions>
                        <button-component v-on:click="copyText(work.path)">
                            🔗
                        </button-component>
                    </div>
                    <div medium>
                        <div title>Medium</div>
                        <div info itemprop="material">{{work.medium}}</div>
                    </div>
                    <div description v-if="work.description">
                        <div title>Description</div>
                        <p info itemprop="abstract" v-html="work.description"></p>
                    </div>
                </div>
            </div>
        </div>
        <div collection-deets>
            <h1>{{currentCollection.name}}</h1>
            <div>{{currentCollection.medium}}, {{currentCollection.year}}</div>
            <p description v-html="currentCollection.description"></p>
        </div>
    </div>
    <div container more-collections>
        <div section-title>More collections</div>
        <div collections>
            <div collection v-for="(collection, collectionIndex) in moreCollections" v-bind:key="collectionIndex">
                <a image :href="`/collections/${collection.path}`">
                    <div the-image>
                        <img :src="require(`@/assets/${collection.imagePath}.jpg`)"/>
                        <div the-name>{{collection.name}}</div>
                    </div>
                    <div description>
                        <div name>{{collection.name}}</div>
                        <div year>{{collection.year}}</div>
                        <div medium>{{collection.medium}}</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import lodash from 'lodash';
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';
import ButtonComponent from '@/components/ButtonComponent';

export default {
    name: 'CollectionView',
    components: {
        ButtonComponent,
    },
    data() {
        return {
            currentCollection: {},
            artCollections: lodash.shuffle(ArtCollectionsCollection),
            moreCollections: {},
        }
    },
    beforeCreate() {
    },
    created() {
        this.currentCollection = this.$route.meta.currentCollection;
        this.moreCollections = this.$route.meta.moreCollections;
    },
    mounted() {
    },
    methods: {
        fullScreen(element) {
            element.srcElement.requestFullscreen();
            // var elem = document.getElementById("myvideo");
        },
        copyText(text) {
            const hashPath = `${window.location.origin}${window.location.pathname}#${text}`;
            navigator.clipboard.writeText(hashPath);
        },
    },
}
</script>

<style scoped lang="scss">
[collection-view] {
    position: relative;
    > [collection] {
        position: relative;
        background-color: #f0f0f0;
        z-index: 2;
        box-shadow: 0px 15px 30px -35px black;
    }
    [more-collections] {
        position: sticky;
        bottom: 0;
        left: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
    }
    img {
        width: auto;
        height: 100%;
        object-fit: contain;
        max-width: 100%;
        max-height: 900px;
        cursor: pointer;
    }
    video {
        width: 100%;
        max-height: 800px;
    }
    [work] {
        > [container] {
            justify-content: center;
        }
    }
    [collection-deets] {
        padding: 0 0 200px 0;
        margin: 0 0 100px 0;
        h1 {
            font-size: 48px;
            color: black;
            font-weight: 600;
        }
        p {
            text-align: center;
        }
    }
    [information] {
        background: white;
        padding: 64px 0;
        margin: 64px 0;
        [container] {
            display: grid;
            grid-gap: 64px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            [name] {
                grid-column: 1/3;
                grid-row: 1;
                gap: 8px;
                display: flex;
                flex-direction: column;
                h2 {
                    font-size: 42px;
                    color: black;
                    font-weight: 600;
                }
                [year] {
                    font-size: 18px;
                    color: rgba(0,0,0,0.9);
                }
            }
            @media (max-width: 640px) {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                grid-gap: 12px;
                [collection]:nth-of-type(2) {
                    display: none;
                }
                [medium], [name], [actions] {
                    grid-column: revert;
                    grid-row: revert;
                }
                [actions] {
                    align-items: start;
                }
            }
        }
    }
    [actions] {
        grid-column: 2;
        grid-row: 1/2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
    }
    [title] {
        font-size: 28px;
        text-transform: capitalize;
        color: black;
        font-weight: 500;
        margin-bottom: 24px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        padding-bottom: 8px;
    }
    [info] {
        color: black;
        font-weight: 100;
        line-height: 24px;
        font-size: 16px;
    }
    [name], [medium], [description], [description-title] {
        text-align: left;
    }
}
[more-collections] {
    [section-title] {
        text-align: left;
        font-size: 32px;
        font-weight: 600;
        color: black;
    }
    
    [description] {
        grid-column: 1;
        grid-row: 2 / 3;
        display: grid;
        gap: 8px;
        grid-template-columns: 1fr 1fr;
        [name] {
            font-size: 18px;
            font-weight: 400;
        }
        [year] {
            text-align: right;
        }
    }
}
[collections] {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-direction: row;
    flex-wrap: wrap;
    [collection] {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        [image] {
            margin: 2vw;
            flex: 1 1 100%;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 12px;
            overflow: hidden;
            background: black;
            img {
                transition: all 0.3s;
                object-fit: cover;
            }
            &:hover {
                text-decoration: none;
            }
            [the-image] {
                position: relative;
                height: 100%;
                [the-name] {
                    padding: 12px;
                    color: white;
                    font-size: 32px;
                    font-weight: 600;
                    position: absolute;
                    right: 0;
                    left: 0;
                    bottom: 0;
                    top: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: all 0.3s;
                }
            }
            &:hover {
                img {
                    opacity: 0.5;
                }
                [the-image] {
                    [the-name] {
                        opacity: 1;
                    }
                }
            }
        }
        [description] {
            width: 100%;
            font-size: 14px;
            text-align: left;
            margin-left: 16px;
            margin-top: 8px;
            transition: all 0.3s;
            background-color: black;
            color: white;
            padding: 0;
            margin: 0;
            padding: 24px;
            box-sizing: border-box;
        }
    } 
    @media (max-width: 960px) {
        grid-template-columns: 1fr 1fr;
        [collection]:last-of-type {
            display: none;
        }
    }
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        [collection]:nth-of-type(2) {
            display: none;
        }
    }
}
</style>
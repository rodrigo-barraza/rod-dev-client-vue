<template>
  <main collection-view>
    <!-- <div title-one>
        <div container>
            <h1>{{currentCollection.title}}</h1>
        </div>
    </div> -->
    <div collection
    itemscope itemtype="https://schema.org/Collection" :itemid="`https://rod.dev${$route.fullPath}`">
        <div collection-deets>
            <div container>
                <div>
                    <h1 itemprop="name">{{currentCollection.title}}</h1>
                    <span itemprop="dateCreated">{{currentCollection.year}}</span>
                </div>
                <p>{{currentCollection.medium}}</p>
                <p duration>{{currentCollection.duration}}</p>
                <p v-if="currentCollection.ekphrasis" ekphrasis>{{currentCollection.ekphrasis}}</p>
                <p v-if="currentCollection.description" itemprop="abstract" description v-html="currentCollection.description"></p>
                <!-- <link v-for="(work, workIndex) in currentCollection.works" v-bind:key="workIndex"
                itemprop="hasPart" itemscope itemtype="https://schema.org/CreativeWork" :itemid="work.path" /> -->
            </div>
        </div>
        <div work
        v-for="(work, workIndex) in currentCollection.works" v-bind:key="workIndex" :id="work.path" :class="currentCollection.orientation" 
        itemscope itemtype="https://schema.org/CreativeWork" :itemid="`https://rod.dev${$route.fullPath}#${work.path}`" itemprop="hasPart">
            <div container>
                <img v-if="work.imagePath" v-on:click="imageFullscreen($event, currentCollection, work)"
                :src="require(`@/assets/collections/${currentCollection.path}/${work.imagePath}.jpg`)"
                :alt="work.description"
                :title="`${currentCollection.title} - ${work.title}, ${work.medium}, ${work.year}. ${work.description}`"
                itemprop="image"/>
                <video id="oneVideo" autoplay muted :controls="currentCollection.videoControls" loop poster=""
                v-if="work.videoPath"
                itemprop="video">
                    <source :src="require(`@/assets/collections/${currentCollection.path}/${work.videoPath}.mp4`)" type="video/mp4">
                     Your browser does not support the video tag.
                </video>
                <div card v-if="currentCollection.works.length >= 2">
                    <div>
                        <h2 itemprop="name">{{work.title}}</h2>
                        <span year itemprop="dateCreated">{{work.year}}</span>
                    </div>
                    <p>{{work.medium}}</p>
                    <p v-if="work.duration">{{work.duration}}</p>
                    <p ekphrasis v-if="work.ekphrasis">{{work.ekphrasis}}</p>
                    <p info itemprop="abstract" v-if="work.description" v-html="work.description"></p>
                </div>
            </div>
            <!-- <link itemprop="isPartOf" itemscope itemtype="https://schema.org/Collection" :itemid="$route.fullPath" /> -->
        </div>
    </div>
    <div container more-collections>
        <div section-title>More collections</div>
        <div collections>
            <div collection v-for="(collection, collectionIndex) in moreCollections" v-bind:key="collectionIndex">
                <router-link link :to="`/collections/${collection.path}`">
                    <!-- <div the-image>
                        <img :src="require(`@/assets/${collection.imagePath}.jpg`)"/>
                        <div the-name>{{collection.title}}</div>
                    </div> -->
                    <div image><img :src="require(`@/assets/${collection.imagePath}.jpg`)"/></div>
                    <div description>
                        <div><span title>{{collection.title}}</span> <span year>{{collection.year}}</span></div>
                        <div><span medium>{{collection.medium}}</span></div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import lodash from 'lodash';
import EventLibrary from '@/libraries/EventLibrary';
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';
// import ButtonComponent from '@/components/ButtonComponent';

export default {
    name: 'CollectionView',
    components: {
        // ButtonComponent,
    },
    data() {
        return {
            currentCollection: {},
            artCollections: lodash.shuffle(ArtCollectionsCollection),
            moreCollections: {}
        }
    },
    beforeCreate() {
    },
    created() {
        this.loadData();
    },
    mounted() {
    },
    methods: {
        imageFullscreen(element, collection, work) {
            element.srcElement.requestFullscreen();
            EventLibrary.postEventImageFullscreen(`/${collection.path}/${work.imagePath}.jpg`);
        },
        copyText(text) {
            const hashPath = `${window.location.origin}${window.location.pathname}#${text}`;
            navigator.clipboard.writeText(hashPath);
        },
        loadData() {
            this.currentCollection = this.$route.meta.currentCollection;
            this.moreCollections = this.$route.meta.moreCollections;
        },
    },
    watch: {
        '$route.fullPath': {
            handler: function(oldRoute, newRoute) {
                if (newRoute) {
                    this.loadData();
                }
            },
            deep: true,
            immediate: true
        }
    }
}
</script>

<style scoped lang="scss">
[collection-view] {
    position: relative;
    > [collection] {
        position: relative;
        // background-color: #f0f0f0;
        z-index: 2;
        box-shadow: 0px 15px 30px -35px black;
        gap: 32px;
        display: flex;
        flex-direction: column;
    }
    [more-collections] {
        // position: sticky;
        bottom: 0;
        left: 0;
        z-index: 1;
        display: flex;
        flex-direction: column;
    }
    video {
        width: 100%;
        max-height: 800px;
    }
    [work] {
        > [container] {
            justify-content: center;
            align-items: flex-start;
            padding: 0;
            display: grid;
            grid-template-columns: auto auto;
            gap: 32px;
            [card] {
                box-shadow: 0px 15px 30px -35px black;
                width: 450px;
                // flex: 0 0 400px;
                background: white;
                background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0) 100%);
                padding: 32px;
                border-radius: 4px;
                box-sizing: border-box;
                @media (max-width: 1432px) {
                    width: 33vw;
                }
                @media (max-width: 640px) {
                    width: 100%;
                }
                > div {
                    font-size: 32px;
                    color: black;
                    text-align: left;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0px 8px;
                    h2 {
                        display: inline;
                    }
                    [year] {
                        font-weight: 100;
                        @media (max-width: 1432px) {
                            font-size: calc(1.35vw + 13px);
                        }
                        @media (max-width: 640px) {
                            font-size: 24px;
                        }
                    }
                }
            }
        }
        // &:nth-of-type(2n+1) {
        //     [card] {
        //         order: -1;
        //     }
        // }
        &:last-of-type {
            background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 90%, rgba(255,255,255,1) 100%);
            // padding-bottom: 64px;
        }
        img {
            height: default;
            object-fit: cover;
            width: 100%;
            height: 100%;
            object-fit: contain;
            max-width: 100%;
            max-height: 90vh;
            cursor: pointer;
            transition: 0.3s all;
            &:hover {
                filter: brightness(0.9);
                transform: scale(1.01);
            }
        }
        &.horizontal, &.square {
            > [container] {
                gap: 12px 0;
                grid-template-rows: auto auto;
                grid-template-columns: auto;
                [card] {
                    width: 100%;
                }
            }
        }
    }
    [collection-deets] {
        // background: linear-gradient(180deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,1) 100%);
        [container] {
            padding: 0 32px 0 32px;
            display: flex;
            flex-direction: column;
            border-radius: 4px;
            [duration] {
                margin: 0;
            }
            div {
                display: flex;
                flex-wrap: wrap;
                gap: 0px 8px;
                h1, span {
                    text-shadow: 10px 10px 0 rgba(0,0,0,0.1);
                }
                span {
                    font-size: 48px;
                    font-weight: 100;
                    color: black;
                    @media (max-width: 1432px) {
                        font-size: calc(3vw + 5px);
                    }
                    @media (max-width: 640px) {
                        font-size: 28px;
                    }
                }
            }
            p {
                text-align: center;
                line-height: 26px;
                text-align: justify;
            }
        }
    }
    [information] {
        margin: 0;
        [container] {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            background: white;
            padding: 64px;
            max-width: 800px;
            border-radius: 4px;
            [name] {
                grid-column: 1/3;
                grid-row: 1;
                gap: 8px;
                display: flex;
                flex-direction: column;
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
    [info] {
    }
    [ekphrasis] {
        font-style: italic;
    }
    [name], [medium], [description], [description-title] {
        text-align: left;
    }
    [description] {
        grid-column: 1/3;
    }
    @media (max-width: 800px) {
        [work] {
            > [container] {
                // margin-top: 64px;
                // margin-bottom: 64px;
            }
        }
    }
    @media (max-width: 640px) {
        [work] {
            > [container] {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr auto;
                grid-gap: 0;
                [card] {
                    margin: 0;
                    max-width: unset;
                }
            }
        }
    }
}
[more-collections] {
    margin-top: 64px;
    // padding-bottom: 64px;
    [section-title] {
        text-transform: uppercase;
        text-align: left;
        font-size: 18px;
        font-weight: 600;
        color: black;

        font-size: 28px;
        text-transform: capitalize;
        color: black;
        font-weight: 500;
        margin-bottom: 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 8px;
    }
    [collections] {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        // grid-template-rows: 420px;
        flex-direction: row;
        flex-wrap: wrap;
        grid-gap: 32px;
        [collection] {
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            [link] {
                // margin: 2vw;
                flex: 1 1 100%;
                background-size: cover;
                flex-direction: column;
                display: grid;
                grid-template-rows: auto auto;
                justify-content: initial;
                gap: 8px;
                [image] {
                    overflow: hidden;
                    height: 50vw;
                    max-height: 30vh;
                    pointer-events: none;
                    img {
                        height: 100%;
                        width: 100%;
                        transition: all 0.3s;
                        object-fit: cover;
                    }
                }
                [description] {
                    box-shadow: 0px 15px 30px -35px black;
                    width: 100%;
                    font-size: 14px;
                    text-align: left;
                    margin-left: 16px;
                    margin-top: 8px;
                    transition: all 0.3s;
                    background-color: white;
                    color: black;
                    padding: 0;
                    margin: 0;
                    padding: 24px;
                    box-sizing: border-box;
                    box-shadow: 0px 15px 30px -35px black;
                    grid-column: 1;
                    grid-row: 2 / 3;
                    display: grid;
                    gap: 8px;
                    grid-template-rows: 1fr 1fr;
                    [title] {
                        font-size: 18px;
                        font-weight: 400;
                    }
                    [year] {
                        font-size: 18px;
                    }
                    [description] {
                        
                    }
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
                        transform: scale(1.05);
                        filter: brightness(0.3);
                    }
                    [the-image] {
                        [the-name] {
                            opacity: 1;
                        }
                    }
                }
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
}
</style>
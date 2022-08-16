<template>
  <main work-view>
    <div gallery>
        <div image-container v-for="(work, workIndex) in currentCollection" v-bind:key="workIndex" :id="work.path">
            <div container>
                <img v-if="work.imagePath" v-on:click="fullScreen" :src="require(`@/assets/collections/${work.imagePath}.jpg`)" v:on-click/>
                <video v-if="work.videoPath" autoplay muted controls>
                    <source :src="require(`@/assets/collections/${work.videoPath}.mp4`)" type="video/mp4">
                     Your browser does not support the video tag.
                </video>
            </div>
            <!-- <router-link image :to="`/works/${work.path}`">
            </router-link> -->
            <div information>
                <div container>
                    <div name>
                        <div work-name>{{work.name}}</div>
                        <div year>Created on {{work.year}}</div>
                    </div>
                    <div actions>
                        <div copy v-on:click="copyText(work.path)">
                            📄Copy Link
                        </div>
                    </div>
                    <div description>
                        <div title>Description</div>
                        <div info>{{work.description}}</div>
                    </div>
                    <div medium>
                        <div title>Info</div>
                        <div info>{{work.medium}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import lodash from 'lodash';
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';

export default {
    name: 'WorkView',
    components: {
    },
    data() {
        return {
            currentWorkParam: '',
            currentCollection: [],
        }
    },
    created() {
        this.currentWorkParam = this.$route.params.work;
        this.currentCollection = lodash.find(ArtCollectionsCollection, {path: this.currentWorkParam}).works;
        console.log(this.currentCollection);
    },
    methods: {
        fullScreen(element) {
            console.log(element.srcElement);
            element.srcElement.requestFullscreen();
            // var elem = document.getElementById("myvideo");
            // console.log(elem);
        },
        copyText(text) {
            const hashPath = `${window.location.origin}${window.location.pathname}#${text}`;
            navigator.clipboard.writeText(hashPath);
        },
    },
}
</script>

<style scoped lang="scss">
[work-view] {
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
    [image-container] {
        padding-top: 80px;
        > [container] {
            justify-content: center;
            min-height: 900px;
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
        }
    }
    [name] {
        grid-column: 1/3;
        grid-row: 1;
        [work-name] {
            font-size: 48px;
            color: black;
            font-weight: 600;
        }
        [year] {
            font-size: 16px;
            color: rgba(0,0,0,0.5);
        }
    }
    [description] {
        grid-column: 1;
        grid-row: 2 / 3;
    }
    [medium] {
        grid-column: 2;
        grid-row: 2 / 3;
    }
    [actions] {
        grid-column: 2;
        grid-row: 1/2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        [copy] {
            background: black;
            color: white;
            padding: 8px 16px 8px 12px;
            border-radius: 24px;
            cursor: pointer;
            &:hover{
                background: rgba(0,0,0,0.7);
            }
            &:active{
                background: #44d982;
            }
        }
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
    }
    [name], [medium], [description], [description-title] {
        text-align: left;
    }
}
</style>
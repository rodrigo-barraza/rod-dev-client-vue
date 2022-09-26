<template>
  <main class="home">
    <div container itemprop="creator" itemscope itemtype="http://schema.org/Person">
        <h1>
            <span full-name><span itemprop="givenName">Rodrigo</span> <span itemprop="familyName">Barraza</span></span>: <span itemprop="jobTitle">photographer</span>, <span itemprop="jobTitle">software engineer</span>, <span itemprop="jobTitle">artist</span>.
        </h1>
    </div>
    <div gallery>
        <div image-container
        v-for="(collection, collectionIndex) in collections" v-bind:key="collectionIndex"
        itemscope itemtype="https://schema.org/Collection" :itemid="`https://rod.dev/${collection.path}`">
            <router-link image :to="`/collections/${collection.path}`"
            @mouseover="onMouseover"
            @mouseleave="onMouseleave">
                <!-- <div theimage :style="{ 'background-image': 'url('+ require(`@/assets/${collection.imagePath}.jpg`) + ')' }"> -->
                <div theimage>
                    <img v-if="!collection.works[0].videoPath && collection.imagePath" :src="require(`@/assets/${collection.imagePath}.jpg`)"
                    :alt="collection.description"
                    :title="`Rodrigo Barraza, ${collection.title}, ${collection.medium}, ${collection.year}. ${collection.description}`"/>

                    <img v-if="!collection.works[0].videoPath && !collection.imagePath" :src="require(`@/assets/collections/${collection.path}/${collection.works[0].imagePath}.jpg`)"
                    :alt="collection.description"
                    :title="`Rodrigo Barraza, ${collection.title}, ${collection.medium}, ${collection.year}. ${collection.description}`"/>

                    <video v-if="collection.works[0].videoPath" muted loop
                    itemprop="video"
                    :poster="collection.imagePath ? require(`@/assets/${collection.imagePath}.jpg`) : ''">
                        <source :src="require(`@/assets/collections/${collection.path}/${collection.works[0].videoPath}.mp4`)" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    
                    <div inside-description>
                        <div name itemprop="name">{{collection.title}}</div>
                        <div year itemprop="dateCreated">{{collection.year}}</div>
                    </div>
                </div>
                <!-- <div description>{{collection.title}}, {{collection.year}}</div> -->
            </router-link>
        </div>
    </div>
  </main>
</template>

<script>
import lodash from 'lodash';
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';

export default {
    name: 'HomeView',
    components: {
    },
    data() {
        return {
            collections: lodash.shuffle(ArtCollectionsCollection),
        }
    },
    methods: {
        goToPath() {
            this.isPageYOffsetAtZero = window.pageYOffset;
        },
        onMouseover(event) {
            if (event.target.firstElementChild.firstElementChild.tagName === 'VIDEO') {
                event.target.firstElementChild.firstElementChild.play();
            }
        },
        onMouseleave(event) {
            if (event.target.firstElementChild.firstElementChild.tagName === 'VIDEO') {
                event.target.firstElementChild.firstElementChild.load();
            }
        },
    },
}
</script>

<style scoped lang="scss">

.home {
  font-family: Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 180px 0 0 0;
  h1 {
    color: #f0f0f0;
    font-size: 48px;
    text-align: center;
    margin-bottom: 80px;
    text-align: left;
    width: 700px;
    text-shadow: 10px 10px 0px rgb(255 255 255 / 20%);
    font-weight: 100;
    @media (max-width: 1432px) {
        font-size: 3.5vw;
        width: 50vw;
    }
    @media (max-width: 640px) {
        font-size: 5.5vw;
        width: 100%;
    }
  }
  [full-name] {
    background-color: #005dcc;
  }
  [container] {
    @media (max-width: 640px) {
        padding: 0 4vw;
    }
  }
}

[gallery] {
    padding: 0 2vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(7, 37.5vw);
    flex-direction: row;
    flex-wrap: wrap;
    // row-gap: 16px;
    // column-gap: 64px;
    // padding: 40px;
    gap: 2vw;
    [image-container] {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        position: relative;
        [image] {
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            gap: 12px;
            img {
                transition: all 0.3s;
                // width: calc(25vw);
                display: flex;
                width: 100%;
                height: 100%;
                object-fit: contain;
                background: rgba(0,0,0,0.05);
            }
            video {
                top: 0;
                right: 0;
                left: 0;
                border: 0;
                height: 100%;
                max-width: 100%;
                transition: all 0.3s;
            }
            [theimage] {
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                overflow: hidden;
                pointer-events: none;
                [inside-description] {
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 3vw;
                    font-size: 3vw;
                    font-weight: 500;
                    color: white;
                    opacity: 0;
                    transition: all 0.3s;
                    [year] {
                        font-weight: 300;
                    }
                    
                    @media (max-width: 640px) {
                        font-size: 4vw;
                    }
                }
            }
            [description] {
                // flex: 0 0 40px;
                font-weight: 400;
                color: rgba(0,0,0,0.5);
                font-size: 14px;
                text-align: center;
                opacity: 0;
                transition: all 0.2s;
                width: auto;
                display: flex;
                // background: white;
                padding: 0px;
            }
            &:hover {
                text-decoration: none;
            }
        }
        &:hover {
            [image] {
                [theimage] {
                    img, video {
                        transform: scale(1.05);
                        filter: brightness(0.3);
                    }
                    [inside-description] {
                        opacity: 1;
                    }
                }
            }
            [description] {
                opacity: 1;
            }
        }
        &:nth-of-type(3n+1) {
            // padding: 4vw 1vw 1vw 0;
        }
        &:nth-of-type(3n+2) {
            // padding: 0 1vw 4vw 1vw;
        }
        &:nth-of-type(3n+3) {
            // padding: 4vw 1vw 0 1vw;
        }
        &:nth-of-type(3n+2) {
            [image] {
                // background-image: url("../assets/1.jpg");
            }
        }
        &:nth-of-type(1) {
            [image] {
                // background-image: url("../assets/1.jpg");
            }
        }
        &:nth-of-type(2) {
            [image] {
                // background-image: url("../assets/2.jpg");   
            }
        }
        &:nth-of-type(3) {
            [image] {
                // background-image: url("../assets/3.jpg");   
            }
        }
        &:nth-of-type(4) {
            [image] {
                // background-image: url("../assets/4.jpg");   
            }
        }
        &:nth-of-type(5) {
            [image] {
                // background-image: url("../assets/5.jpg");   
            }
        }
        &:nth-of-type(6) {
            [image] {
                // background-image: url("../assets/6.jpg");   
            }
        }
        &:nth-of-type(7) {
            [image] {
                // background-image: url("../assets/7.jpg");   
            }
        }
        &:nth-of-type(8) {
            [image] {
                // background-image: url("../assets/8.jpg");   
            }
        }
        &:nth-of-type(9) {
            [image] {
                // background-image: url("../assets/9.jpg");   
            }
        }
    }
    
    @media (max-width: 640px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(11, 50vw);
    }
}

.body {
    flex: 1 1 500px;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .right {
        background-color: rgba(0,0,0,.05);
        // background-image: url("../assets/right.jpg");
    }
    .left {
        // background-image: url("../assets/left.jpg");
        background-position: top right;
    }
}

.home {
    display: flex;
    flex-direction: column;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
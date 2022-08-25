<template>
  <main class="home">
    <div gallery>
        <div image-container v-for="(collection, collectionIndex) in collections" v-bind:key="collectionIndex">
            <router-link image :to="`/collections/${collection.path}`">
                <img :src="require(`@/assets/${collection.imagePath}.jpg`)"/>
                <div description>{{collection.name}}, {{collection.medium}}, {{collection.year}}</div>
            </router-link>
        </div>
    </div>
  </main>
</template>

<script>
import ArtCollectionsCollection from '@/collections/ArtCollectionsCollection';

export default {
    name: 'HomeView',
    components: {
    },
    data() {
        return {
            collections: ArtCollectionsCollection,
        }
    },
    methods: {
        goToPath() {
            this.isPageYOffsetAtZero = window.pageYOffset;
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
}

[gallery] {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3, 37.5vw);
    flex-direction: row;
    flex-wrap: wrap;
    // row-gap: 16px;
    // column-gap: 64px;
    // padding: 40px;
    [image-container] {
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
            img {
                transition: all 0.3s;
                width: calc(25vw);
                border-radius: 16px;
                &:hover {
                    opacity: 0.9;
                }
            }
            &:hover {
                text-decoration: none;
            }
        }
        [description] {
            width: 100%;
            font-size: 14px;
            text-align: left;
            margin-left: 16px;
            margin-top: 8px;
            opacity: 0;
            transition: all 0.3s;
        }
        &:hover {
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
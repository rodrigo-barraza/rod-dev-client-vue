<template>
  <div class="home">
    <div gallery>
        <div image-container v-for="(image, imageIndex) in images" v-bind:key="imageIndex">
            <div image>
                <img :src="require(`@/assets/${image.image}.jpg`)"/>
                <div description>{{image.description}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: {
    // HelloWorld
    },
    data() {
        return {
            images: [
                {
                    image: '1',
                    description: 'This is not art, 2022'
                },
                {
                    image: '2',
                    description: 'This is not art, 2022'
                },
                {
                    image: '3',
                    description: 'This is not art, 2022'
                },
                {
                    image: '4',
                    description: 'This is not art, 2022'
                },
                {
                    image: '5',
                    description: 'This is not art, 2022'
                },
                {
                    image: '6',
                    description: 'This is not art, 2022'
                },
                {
                    image: '7',
                    description: 'This is not art, 2022'
                },
                {
                    image: '8',
                    description: 'This is not art, 2022'
                },
                {
                    image: '9',
                    description: 'This is not art, 2022'
                },
            ]
        }
    },
}
</script>

<style lang="scss">
.home {
  font-family: Ubuntu;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 80px 0 0 0;
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
            margin: 3vw;
            flex: 1 1 100%;
            background-size: cover;
            img {
                width: calc(33vw - 3vw - 3vw - 1vw - 1vw);
            }
        }
        [description] {
            font-size: 12px;
            text-align: left;
            margin-left: 16px;
            margin-top: 8px;
            opacity: 0;
            transition: all 0.3s;
            font-style: italic;
        }
        &:hover {
            [description] {
                opacity: 1;
            }
        }
        &:nth-of-type(3n+1) {
            padding: 4vw 1vw 1vw 0;
        }
        &:nth-of-type(3n+2) {
            padding: 0 1vw 4vw 1vw;
        }
        &:nth-of-type(3n+3) {
            padding: 4vw 1vw 0 1vw;
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
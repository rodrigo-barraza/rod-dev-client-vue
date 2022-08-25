<template>
  <header :class="[routeName]">
    <div fixed>
        <div background>
            <video id="background-video" autoplay muted>
                <source :src="require('@/assets/ai-art-video-done.mp4')" type="video/mp4">
            Your browser does not support the video tag.
            </video>
        </div>
        <div stripe>
        </div>
    </div>
    <div floaty  :class="[{'tiny': isPageYOffsetAtZero > 35}, routeName]">
        <div container>
            <div name>
                <router-link to="/">
                    <div logo>
                    </div>
                    <div text>
                        RODRIGO BARRAZA
                    </div>
                </router-link>
            </div>
            <nav full>
                <ul>
                    <li ai-art><router-link to="/"  active-class="active">Collections</router-link></li>
                    <li ai-art><router-link to="/ai-art"  active-class="active">AI Art</router-link></li>
                    <li photography><router-link to="/photography"  active-class="active">Photography</router-link></li>
                    <li photography><router-link to="/photography"  active-class="active">NFT Collections</router-link></li>
                    <li about><router-link to="/about"  active-class="active">About</router-link></li>
                </ul>
            </nav>
            <div hamburger>
                <div>
                    🍔
                </div>
            </div>
            <nav mini>
                <ul>
                    <li ai-art><router-link to="/ai-art" active-class="active">AI Art</router-link></li>
                    <li photography><router-link to="/photography" active-class="active">Photography</router-link></li>
                    <li about><router-link to="/about" active-class="active">About</router-link></li>
                </ul>
            </nav>
        </div>
    </div>
  </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    props: {
    },
    data() {
        return {
            isPageYOffsetAtZero: 0,
            routeName: '',
        }
    },
    created() {
        window.addEventListener('scroll', this.isScrolling);
    },
    methods: {
        isScrolling() {
            this.isPageYOffsetAtZero = window.pageYOffset;
        },
    },
    watch: { 
     '$route.name': {
        handler: function(routeName) {
           this.routeName = routeName;
           const backgroundVideo = document.getElementById('background-video');
           console.log(backgroundVideo);
           if (backgroundVideo) {
            backgroundVideo.play();
           }
        },
        deep: true,
        immediate: true
      }
}   
}
</script>

<style scoped lang="scss">
header {
    [fixed] {
        height: 150px;
        display: flex;
        flex-direction: column;
        [background] {
            background-color: black;
            flex: 1 1 100%;
            overflow: hidden;

            display: flex;
            justify-content: center;
            align-items: center;
            video {
                width: 100%;
                opacity: 0.5;
            }
        }
        [stripe] {
            display: block;
            content: '';
            background-color: #f0f0f0;
            position: absolute;
            width: 100%;
            height: 40px;
            transform: skewY(-1deg) translateY(150px);
            transform-origin: 0 100%;
            top: 0;
            height: 100px;
        }
    }
    [floaty] {
        z-index: 3;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        height: 120px;
        font-family: Ubuntu;
        background: none;
        transition: 0.33s all;
        display: flex;
        color: white;
        [container] {
            flex: 1 1 100%;
            display: flex;
            [name] {
                font-weight: 300;
                font-size: 28px;
                display: flex;
                height: 100%;
                display: flex;
                align-items: center;
                display: flex;
                a {
                    display: flex;
                    [logo] {
                        flex: 0 0 32px;
                        height: 32px;
                        background-image: url("@/assets/logo-rodrigo.png");
                        background-size: 100%;
                        image-rendering: pixelated;
                    }
                    [text] {
                        flex: 0 0 280px;
                    }
                    &:hover {
                        [logo] {
                            background-image: url("@/assets/logo-animated.gif");
                        }
                    }
                }
            }
            nav {
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                ul {
                    padding: 0;
                    margin: 0;
                    display: flex;
                    grid-gap: 32px;
                    li {
                        padding: 8px 16px;
                        a {
                            font-size: 18px;
                        }
                        &[about] {
                            background: black;
                            color: white;
                            border-radius: 24px;
                        }
                    }
                }
                &[mini] {
                    display: none;
                }
            }
            [hamburger] {
                display: none;
                width: 100px;
                div {
                    cursor: pointer;
                    border-radius: 10px;
                    padding: 2px 8px 8px 8px;
                    background-color: rgba(0,0,0,0.05);
                }
            }
            
        }
        &.ai-art {
            color: white;
        }
        &.tiny {
            height: 48px;
            background: black;
            color: white;
            box-shadow: 0px 0px 10px -5px black;
            
            // [container] {
            //     nav {
            //         ul {
            //             li {
            //                 background: black;
            //                 color: white;
            //                 padding: 8px;
            //                 border-radius: 12px;
            //             }
            //         }
            //     }
            //     [name] {
            //         div {
            //             background: black;
            //             color: white;
            //             padding: 8px;
            //             border-radius: 12px;
            //         }
            //     }
            // }
        }
        @media (max-width: 800px) {
            [container] {
                nav {
                    display: none;
                }
                [hamburger] {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 30px;
                }
            }
            &.tiny {
                [container] {
                    nav {
                    }
                    [hamburger] {
                        font-size: 18px;
                        div {
                            background-color: rgba(255,255,255,0.3);
                        }
                    }
                }
            }
        }

    }
}
</style>
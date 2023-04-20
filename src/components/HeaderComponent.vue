<template>
  <header :class="[routeName]">
    <div stripe :style="stripeStyle" :class="stripeClass">
        <!-- <video id="background-video" autoplay loop muted>
            <source src="" type="video/mp4">
        Your browser does not support the video tag.
        </video> -->
        <!-- <img src=""/> -->
    </div>
    <div fixed></div>
    <div floaty :class="[{'tiny': isPageYOffsetAtZero > 35}, routeName]">
        <div container>
            <div name>
                <router-link title="Rodrigo Barraza" to="/" v-on:click="closeMobileMenu">
                    <div logo></div>
                    <div text>RODRIGO BARRAZA</div>
                </router-link>
            </div>
            <nav full>
                <ul>
                    <li ai-art><router-link to="/" active-class="active" v-on:click="closeMobileMenu('/collections')">Collections</router-link></li>
                    <li ai-art><router-link to="/projects" active-class="active" v-on:click="closeMobileMenu('/projects')">Projects</router-link></li>
                    <li about><router-link to="/rodrigo-barraza" active-class="active" v-on:click="closeMobileMenu('/rodrigo-barraza')">About</router-link></li>
                </ul>
            </nav>
            <div hamburger>
                <div v-on:click="toggleMobileMenu">
                    <span v-if="!isMobileMenuOpen">☰</span>
                    <span v-if="isMobileMenuOpen">✖</span>
                </div>
            </div>
        </div>
    </div>
    <div overlay v-if="isMobileMenuOpen">
        <nav shrink>
            <ul>
                <li ai-art><router-link to="/" v-on:click="closeMobileMenu('/collections')" active-class="active">Collections</router-link></li>
                <li ai-art><router-link to="/projects" v-on:click="closeMobileMenu('/projects')" active-class="active">Projects</router-link></li>
                <li about><router-link to="/rodrigo-barraza" v-on:click="closeMobileMenu('/rodrigo-barraza')" active-class="active">About</router-link></li>
            </ul>
        </nav>
        <ul socials>
            <li social
            v-for="(social, socialIndex) in socialsCollection" v-bind:key="socialIndex"
            :class="social.type">
                <a :href="social.url" target="_blank"><div logo></div></a>
            </li>
        </ul>
    </div>
  </header>
</template>

<script>
import EventLibrary from '@/libraries/EventLibrary';
import SocialsCollection from '@/collections/SocialsCollection';
import UtilityLibrary from '@/libraries/UtilityLibrary';

export default {
    name: 'HeaderComponent',
    props: {
    },
    data() {
        return {
            stripeStyle: '',
            stripeClass: '',
            isPageYOffsetAtZero: 0,
            routeName: '',
            isMobileMenuOpen: false,
            socialsCollection: SocialsCollection,
            isDocumentLoading: true,
            renderAssetPath: UtilityLibrary.renderAssetPath,
        }
    },
    created() {
        window.addEventListener('scroll', this.isScrolling);
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                this.isDocumentLoading = false;
            } else if (document.readyState === 'interactive') {
                this.isDocumentLoading = true;
            }
        };
        window.addEventListener('resize', () => {
           this.setStripeProperties();
        });
    },
    methods: {
        isScrolling() {
            this.isPageYOffsetAtZero = window.pageYOffset;
        },
        toggleMobileMenu() {
            if (this.isMobileMenuOpen == false) {
                EventLibrary.postEventMenuOpen();
            } else {
                EventLibrary.postEventMenuClose();
            }
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        },
        setStripeProperties() {
            const self = this;
            const route = this.$route;
            
            const letsStripeStyle = function() {
                const style = {};
                const stripe = document.querySelector("[stripe]");
                const floaty = document.querySelector("header");
                const collectionDeets = document.querySelector("[collection-deets]");
                if (route.name === 'collection' && !collectionDeets) {
                    letsStripeStyle(route);
                } else if (route.name === 'collection') {
                    const deetsHeight = collectionDeets?.offsetHeight;
                    const floatyHeight = floaty?.offsetHeight;
                    stripe.setAttribute("style",`height:${deetsHeight + floatyHeight + 80}px`);
                    if (route.params?.collection === 'dreamwork') {
                        // style['background'] = 'linear-gradient(0.5turn, #7eab8f, #e9f3ea)';
                    }
                } else if (route.name === 'about') {
                    stripe.setAttribute("style",'height:300px');
                } else if (route.name === 'projects') {
                    stripe.setAttribute("style",'height:200px');
                } else {
                    stripe.removeAttribute("style");
                }
                // }  else if (route.name === 'ai-experiments') {
                //     stripe.setAttribute("style",'height:160px; background:rgba(0,0,0,0.15)');
                // } else {
                //     stripe.removeAttribute("style");
                // }
                self.stripeClass = `${route.name}`;
                self.stripeStyle = style;
            }
            
            const timeoutTimer = setTimeout(function () {
                letsStripeStyle();
                clearTimeout(timeoutTimer);
            }, 100);
        },
    },
    watch: {
     '$route': {
        handler: function(route) {
           this.routeName = route.name;
           if (route.name === 'ai-experiments') {
            this.routeName = `micro ${route.name}`
           }
           const backgroundVideo = document.getElementById('background-video');
           if (backgroundVideo) {
            backgroundVideo.play();
           }
           this.setStripeProperties(route);
           
            this.stripeClass = `${route.name} opacityZero`;

        },
        deep: true,
        immediate: true
      }
    }   
}
</script>

<style scoped lang="scss">
@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

// .fadeIn {
//     animation: fadein 1s;
// }
.opacityZero {
    opacity: 0;
}
.opacityOne {
    opacity: 1;
}
[stripe] {
    width: 100%;
    position: absolute!important;
    top: 0;
    height: 270px;
    z-index: -1;
    background: black;
    // background: linear-gradient(0.25turn, #351dc6, #25ddf5);
    overflow: hidden;
    transition: all 1s ease-in-out;
    [video] {
        width: 100%;
    }
    &:after {
      content: "";
      display: block;
      width: 110%;
      height: 100px;
      left: 0;
      position: absolute;
      right: 0;
      bottom: -100px;
      transform: rotate(-2deg);
      background-color: #f0f0f0;
      transition: all 1s;
      transform-origin: 0;
    }
    &.home {
      @media (max-width: 1432px) {
        height: calc(8vw + 150px);
      }
      @media (max-width: 640px) {
        height: calc(13vw + 150px);
      }
    }
    &.collection {
      // background: linear-gradient(0.5turn, #d28bff, #87f1ff);
      // linear-gradient(0.5turn, #d28bff, #87f1ff)
      // linear-gradient(0.5turn, #bb8578, #cdff87)
      // linear-gradient(0.5turn, #585858, #f2f2f2)
      // linear-gradient(0.5turn, #7eab8f, #e9f3ea) dreamwork
      // linear-gradient(0.5turn, #0270cb, #cce0f1) tv-date
    }
    &.about {
      &:after {
        transform: rotate(2deg);
        transform-origin: 100%;
      }
    }
}

header {
    [fixed] {
        height: 120px;
        display: flex;
        flex-direction: column;
        [background] {
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
        z-index: 4;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        height: 120px;
        font-family: 'Ubuntu', sans-serif;
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
                    align-items: center;
                    gap: 8px;
                    [logo] {
                        flex: 0 0 32px;
                        height: 32px;
                        background-size: 100%;
                        image-rendering: pixelated;
                        pointer-events: none;
                    }
                    [text] {
                        flex: 0 0 auto;
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        pointer-events: none;
                    }
                    @media (max-width: 400px) {
                        [logo] {
                            flex: 0 0 5vw;
                            height: 5vw;
                        }
                        [text] {
                            font-size: 6vw;
                        }
                    }
                }
            }
            nav {
                flex: 0 0 auto;
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
                            color: white;
                            border-radius: 24px;
                        }
                    }
                }
            }
            [hamburger] {
                display: none;
                width: 100px;
                justify-content: flex-end;
                div {
                    cursor: pointer;
                    border-radius: 10px;
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
        }
        @media (max-width: 640px) {
            [container] {
                padding: 0 4vw;
                nav {
                    display: none;
                }
                [hamburger] {
                    display: flex;
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
                    }
                }
            }
        }

    }
    [overlay] {
        animation: fadein 1s;
        background: black;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
         display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 10vw;
        z-index: 3;
        ul {
            display: flex;
            flex-direction: column;
            gap: 5vw;
        }
        [socials] {
            list-style: none;
            display: flex;
            flex-direction: row;
            position: absolute;
            bottom: 20px;
            background-color: #e8e8e8;
            padding: 4px 12px;
            border-radius: 30px;
            gap: 0;
            [social] {
                a {
                    display: block;
                    border-radius: 8px;
                    padding: 4px;
                    [logo] {
                        display: block;
                        height: 30px;
                        width: 30px;
                        filter: grayscale(1) opacity(0.9);
                        pointer-events: none;
                    }
                    &:hover {
                        text-decoration: none;
                        background: #3390ff;
                        transform: translate(0, -2px);
                        color: black;
                    }
                }
            }
        }
    }
    &.micro {
        height: 0;
        [stripe] {
            height: 220px;
            background: #e3e3e3;
            color: white;
        }
        [floaty] {
            height: 48px;
            background: black;
            color: white;
            box-shadow: 0px 0px 10px -5px black;
        }
        [fixed] {
            height: 48px;
        }
    }
}
</style>
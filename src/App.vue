<template>
  <!-- <nav></nav> -->
  <header-component/>
  <router-view/>
  <footer-component/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';

export default {
  name: 'rod-dev',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    console.log("Well, hello there, and welcome to Rodrigo Barraza's online profile.");
  },
  methods: {
  }
}
</script>
<style lang="scss">
html {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    body {
        flex: 1 1 100%;
        display: flex;
        // background-image: url("@/assets/background-light.png");
        background-color: #f0f0f0;
    #app {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-family: Ubuntu;
        > header {
            flex: 0 0 auto;
        }
        > main {
            margin: 32px 0 0 0;
            flex: 1 1 auto;
        }
        > footer {
            flex: 0 0 200px;
        }
    }
  }
  ul {
    li {
        list-style: none;
    }
  }
}

[container] {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: calc(16px * 2 + 1400px);
  margin: 0 auto;
  padding: 0 36px;
  box-sizing: border-box;
}

body {
  height: 100%;
  padding: 0;
  margin: 0;
}

// nav a.router-link-exact-active {
//   color: #42b983;
// }
a {
  font-weight: 300;
  font-family: ubuntu;
  color: inherit;
  text-decoration: none;
  text-underline-offset: 1px;
  transition: 0.33s all;
  text-underline-offset: 5px;
  &:hover{
      text-decoration: underline;
  }
  &.active{
      text-decoration: underline;
  }
}
p {
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: black;
  font-weight: 100;
  line-height: 26px;
  text-align: justify;
  &+p{
    margin-top: 16px;
  }
  a {
    font-weight: 400;
    color: #655ffa;
  }
}

h1, h2, h3, h4, h5, p {
  text-align: left;
}

h1, h2, h3, h4, h5 {
  padding: 0;
  margin: 0;
}
h1 {
  font-size: 48px;
  font-weight: 600;
  color: black;
}
h2 {
  font-size: 32px;
  font-weight: 500;
  color: black;
}
ul {
  padding: 0;
  margin: 0;
}

@media (max-width: 1432px) {
  h1 {
    font-size: calc(3vw + 5px);
  }
  h2 {
    font-size: calc(1.35vw + 13px);
  }
  p {
    font-size: calc(0.25vw + 14px);
  }
}
@media (max-width: 640px) {
  h1 {
    font-size: 28px;
  }
  h2 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
}
[social] {
  &.instagram { 
    [logo] {
      background-image: url("@/assets/icons/instagram.png");
      background-size: 100%;
    }
  }
  &.facebook { 
    [logo] {
      background-image: url("@/assets/icons/facebook.png");
      background-size: 100%;
    }
  }
  &.twitter { 
    [logo] {
      background-image: url("@/assets/icons/twitter.png");
      background-size: 100%;
    }
  }
  &.github { 
    [logo] {
      background-image: url("@/assets/icons/github.png");
      background-size: 100%;
    }
  }
  &.deviantart { 
    [logo] {
      background-image: url("@/assets/icons/deviantart.png");
      background-size: 100%;
    }
  }
  &.behance { 
    [logo] {
      background-image: url("@/assets/icons/behance.png");
      background-size: 100%;
    }
  }
  &.flickr { 
    [logo] {
      background-image: url("@/assets/icons/flickr.png");
      background-size: 100%;
    }
  }
  &.foundationapp { 
    [logo] {
      background-image: url("@/assets/icons/foundationapp.png");
      background-size: 100%;
    }
  }
  &.opensea { 
    [logo] {
      background-image: url("@/assets/icons/opensea.png");
      background-size: 100%;
    }
  }
  &.superrare { 
    [logo] {
      background-image: url("@/assets/icons/superrare.png");
      background-size: 100%;
    }
  }
  &.discord { 
    [logo] {
      background-image: url("@/assets/icons/discord.png");
      background-size: 100%;
    }
  }
  &.keybase { 
    [logo] {
      background-image: url("@/assets/icons/keybase.png");
      background-size: 100%;
    }
  }
  &.linkedin { 
    [logo] {
      background-image: url("@/assets/icons/linkedin.png");
      background-size: 100%;
    }
  }
}
</style>

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
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
            margin: 100px 0 0 0;
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
  &+p{
    margin-top: 8px;
  }
}
main {
  &:before {
  }
}

h1, h2, h3, h4, h5 {
  padding: 0;
  margin: 0;
}
</style>

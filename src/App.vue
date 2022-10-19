<template>
  <header-component/>
  <!-- CollectionView doesn't seem to update when routed to this same view, so we have to assign a key to
  router-view to ensure that the component is always re-rendered when routed to -->
  <router-view :key="$route.fullPath"/>
  <footer-component/>
</template>

<script>
import EventLibrary from '@/libraries/EventLibrary';
import UtilityLibrary from '@/libraries/UtilityLibrary';
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';

export default {
  name: 'rod-dev',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
  },
  data() {
      return {
        currentRoute: this.$route,
      }
  },
  methods: {
  },
  created() {
    const sessionId = sessionStorage.id;
    if (sessionId) {
      EventLibrary.postEventSessionReturning(document.referrer, window.location.href);
    } else {
      EventLibrary.postEventSessionNew(document.referrer, window.location.href);
    }
    setInterval(postSession, 1000);

    function postSession() {
      EventLibrary.postSession(1, screen.width, screen.height);
    }

    const head = document.head;
    const style = document.createElement('style');
    const css = `
    [social].instagram [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/instagram.png')}");
        background-size: 100%;
    }
    [social].facebook [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/facebook.png')}");
        background-size: 100%;
    }
    [social].twitter [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/twitter.png')}");
        background-size: 100%;
    }
    [social].github [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/github.png')}");
        background-size: 100%;
    }
    [social].deviantart [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/deviantart.png')}");
        background-size: 100%;
    }
    [social].behance [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/behance.png')}");
        background-size: 100%;
    }
    [social].flickr [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/flickr.png')}");
        background-size: 100%;
    }
    [social].foundationapp [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/foundationapp.png')}");
        background-size: 100%;
    }
    [social].opensea [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/opensea.png')}");
        background-size: 100%;
    }
    [social].superrare [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/superrare.png')}");
        background-size: 100%;
    }
    [social].discord [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/discord.png')}");
        background-size: 100%;
    }
    [social].keybase [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/keybase.png')}");
        background-size: 100%;
    }
    [social].linkedin [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('icons/linkedin.png')}");
        background-size: 100%;
    }
    [brand] [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('images/rodrigo-barraza-logo.png')}");
    }
    [brand]:hover [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('images/rodrigo-barraza-logo-animated.gif')}");
    }
    [name] [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('images/rodrigo-barraza-logo.png')}");
    }
    [name]:hover [logo] {
        background-image: url("${UtilityLibrary.renderAssetPath('images/rodrigo-barraza-logo-animated.gif')}");
    }`
    head.appendChild(style);
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));

    // Track Clicks
    document.addEventListener('click', (e) => {
      e = e || window.event;
      const target = e.target;
      // const text = target.textContent || target.innerText;
        if (target.nodeName === 'A') {
          if(target.href.includes('//development.rod.dev') ||
          target.href.includes('//rod.dev') ||
          target.href.includes('//localhost')) {
            EventLibrary.postEventNavigationClick(target.href);
          } else {
            EventLibrary.postEventLinkClick(target.href);
          }
        }
    }, false);
    window.onbeforeunload = (event) => {
      EventLibrary.postEventSessionExit();
      var start = Date.now(), now = start;
      var delay = 1000; // msec
      while (now - start < delay) {
          now = Date.now();
      }
      // this is needed to avoid to show a confirmation prompt
      delete event['returnValue'];
      return "Do you really want to close?"
    }
  },
  unmounted() {
    console.log('unmounting');
  },  
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
        background-color: #f0f0f0;
        height: 100%;
        padding: 0;
        margin: 0;
    #app {
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        font-family: 'Ubuntu', sans-serif;
        > header {
            flex: 0 0 auto;
        }
        > main {
            margin: 0 0 0 0;
            flex: 1 1 auto;
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

a {
  font-weight: 300;
  font-family: 'Ubuntu', sans-serif;
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

h1, h2, h3, h4, h5, p {
  text-align: left;
  margin: 0;
  padding: 0;
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

p {
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
    text-underline-offset: 2px;
    &:hover{
        color: #b86cd3;
    }
    &:active{
        color: #6cd3b2;
    }
    &:visited{
        color: #b86cd3;
    }
  }
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
</style>

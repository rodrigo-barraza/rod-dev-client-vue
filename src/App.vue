<template>
  <!-- <nav></nav> -->
  <div stripe :style="stripeStyle" :class="stripeClass"></div>
  <header-component/>
  <!-- CollectionView doesn't seem to update when routed to this same view, so we have to assign a key to
  router-view to ensure that the component is always re-rendered when routed to -->
  <router-view :key="$route.fullPath"/>
  <footer-component/>
</template>

<script>
import EventLibrary from '@/libraries/EventLibrary';
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from '@/components/FooterComponent';

export default {
  name: 'rod-dev',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    // console.log(`
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNWWWWWNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNXXXXXNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNWNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWN0xl;,,,,cd0NWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNXK00KXXx;.     ....;okXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWX0xl:'.'',;.       ...   .'ckXNWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWXkl,..      .   ... ...       .'cOXNWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWWWWNO:....       ... .  ...           .,cONWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWWNKo'...         ......   ...        .....:dKNWNNWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWWWWKx;.            ..',,,'....              ...;kOkO0XNWWWWWNWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWWW0o,..            .,:looolc:,...               .dkxkkk0KNWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWWW0:.              .;ldxxxxxxdol:,...            .lxxO0OOOOKNWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWW0:.              .;oxxkkkkkxxxdool:;,''''...     'ldxxkOkkO0XWWNWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWXl.      ....    .,oxkkkkkkkkkkxxxxxddddddlc;;'.. .'odoxkOOOO0NWNWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWW0,       ....   .'lxkkkkkkkkkkkkkkkxxxxdddddddol:,..:dxkxxkOkOXNWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
    // WWWWWWWWWWWWWWWWWWx.        ..   ..cxkOOOOOOkkkkkkkkkxxdddoodddddxxdoc:ldxkxxkkk0NWWWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXXX
    // WWWWWWWWWWWWWWWWWX:             .'lxOOOOOOOOOOOOOOOkdcclllcccllllllllodddddolloodkOO000KKKXNWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXX
    // WWWWWWWWWWWWWWWWW0,        ..  .'lkOO000000OOOOOOOOxc:lc:::::::::;::::cllllccc:::cccclllllxKWNNNNNNNNNNNNNNNNNNNNNNNNNNNNNXXX
    // WWWWWWWWWWWWWWWWWO,         ...'cx0000000000000O0Oko,:c:coccoddocoxoclolcodlcoolcllccllcccl0NNNNNNNNNXXXXXXXXXXXXNNXNXXXXXXXX
    // WWWWWWWWWWWWWWWWNk,.         .'cxO000000000000000Od;':c:cllldkkdoOKkoxOdok0xlxkooxxoldxc:cl0WNNXK0000000000000KKKKKKKKXXXXXXX
    // WWWWWWWWWWWWWWWWWOo,        .'lxkO000000000000000kc.'cc:cccd000Odx0Oxoxkkxddxkdldkxl:cc;:clOK0OkxxxxkkkkkkOOOOO00000KK000KKKK
    // WWWWWWWWWWWWWWWWWXOl..      .;dkOO000000000000000xl;,cc:cloONNWXk0WWXk0WWKkKNNOxXNNOdc'':ccxkxxddooddddxxxxxkkkkkOOO0KKK000KK
    // WWWWWWWWWWWWWWWWWWW0:.       .oOOO00OOO000000000Oxo:;c:;,';x00KOdx00kdk00xdk00xdO00xc,.':cldddooolc:::::c:::ccloodxxk0KK00KKK
    // WWWWWWWWWWWWWWWWWWWNk:.      .oOOOOOOOO00000000OOxxl;c:',co0WNWKk0NN0x0XXkx0KKkx0K0o;'.':ccclc;'''.........'''',;:odxO0000KKK
    // WWWWWWWWWWWWWWWWWWWWWKl.     'dkOOOOOOOO0000OOOkkkko;c:',;:okOOxox00xdOKKxxKKKxkNNKdo:.':cc:'....''.''.. .........,cdkO000000
    // WWWWWWWWWWWWWWWWWWWWWWXo.    'okkkOOOOOO000Okxddodxl:c;...'...'''',;;,;ckOxdk0xdO0koooc;:ccooc;'......,,. ..........,lkO00000
    // WWWWWWWWWWWWWWWWWWWWWWWNk;.  .'ldkOOOOOOOxl:;;,',:l:;l:,,,,'..'''''''''cOKkd0NOkKW0ONM0c:cclool:,......,,.............:dOOO00
    // WWWWWWWWWWWWWWWWWWWWWWWWNXx,.  .':oxkOkdc'',,....co:,::::cc:;;;;,,,,,,',,;;;:c::clccooc:ccclolool:;'...';'.............'dOO00
    // WWWWWWWWWWWWWWWWWWWWWWWWNNN0o;'....':od:.;lc,,:;;lo:,,,,,;::c;,''','.,,''';;:::,''',',,;;;:lllllllc:;,,;;,..............l0000
    // WWWWWWWWWWWWWWWWWWWWWWWWNWWNNXK0kddl:;;',lol,,ldodl:ccc:,'''''',;;;;;::::,''''.','''.,,'.':oolllllcc:;,::,..............;k000
    // WWWWWWWWWWWWWWWWWWWWWWWNNWWNNWNNNNWNXK0koc:cllddxxo:cc:::;;;;;:::;;::::::;,'''',,;;;::cc,.:oollllccc:;;::,'..............cOKK
    // WWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNWNNNNNXkc:ldxxkkd:cc;;:cc:cdOkkocool::cc;:oolclddl:::c;';cllccccc:;;::;,'..............'d0K
    // WWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNX0OOkkOOOd:cc:;:cc:cxkOOdldxdccolcoO0kdOXXx::::,,;:lcccccc:;;:c,,'...............cO0
    // WWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNXXKxclc;;lddl:loolccool;;:::lxxdldkkl;;;:,,;;cc::::cc::c:,,,...............;kK
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNNkclc,;okkdcoddoloxkd:;:;:xKXOdk0Ol'';:,,;;;cc::;::::c;',,.............'.'dK
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNNxclc,,:cc::oool:cllccccc:okkoldxxc'.;:',lloxxdlc:;'.,'',,................l0
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNNNXdcl:,,::::okkOxlcllcdKX0ooxxlcddo:'';:,:dO0K0OOkxo;...',,'..........'''..:k
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNNNNNNNNNNNXdcl:,:oddclxxxoccll:okOxloxdlldxd:;,;clk000OOO000Okdl:;;,.............'..'o
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNNNWNNNXOdccl:,dNWNOOXXXOdkOOlcool;;::;'''',c::xO0OkdclxkkkOOOOkxdo;...........    'd
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNKxl:;',cllc;,okOkdxOO0xoxOkolddl::::;....,l:ckOkkkxddxkkkkOOOOOOOx;...           :k
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNOc'.  .,k0lcl:::;;;;;;;;;;:::,;:::cool;,''',;;lkO0000KK00000000000OOd,            .:k
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNWWNWXo.';...:0XKOdool;''',',,,,''....,oxO00OxxdolccldO00OOOOOOOOOO000OOkOkxl'           .;k
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWk..;'. 'x0KKKKKKd,......'.......,d00K00OOkkkkxdxO0OkOOOO0000000000Okxxxdl'           ;x
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKc..'.  ,x00KKKKOl'......'''...;oO000OkOOOOkddooxOO00KKKKKK00000OOOOOxxxdc.           ,d
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWN0:.c;. .:k0KKKKK0kc'.....'..,cdO0OOO000KK00Okdl:lxk00OOOOOOOOO0OOkkkkkxxo,...    ...  'o
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKc.'.  .:OKKKXKKK0o'...'''':dO0OO000K00OOOkkkxdl;lkOkkkOOO000KKK0kkkkkkx:. ..    ......'
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWN0c..    .c0KKKXKXOc''..',;lO00000000OOOO0000Okdl:cxkkO000000KKK00OOkkkkl. ...    .. ... 
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW0l;.      .c0XXXXXO:,'''.,:dKK00OO0000KKKK0000Odlc:oxkOkxoodkO000000OOko'  ..          . 
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKol:.       'kXXXXXKo;,,'.',lOKKK00000OOOOOOkxxxxdc',dkxc...':oxk000000d'.  ...           
    // WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW0:.ll.       .lXXXXXKOo:::::;lOKKKK00Okkkkkkkxxxxdol'.:dl;.   .:oxOO000x,. .....           
    // `);
  },
  data() {
      return {
        stripeStyle: '',
        stripeClass: '',
        currentRoute: this.$route,
      }
  },
  methods: {
  },
  created() {
    const self = this;
    const sessionId = sessionStorage.id;
    if (sessionId) {
      EventLibrary.postEventSessionReturning(document.referrer, window.location.href);
    } else {
      EventLibrary.postEventSessionNew(document.referrer, window.location.href);
    }
    setInterval(myGreeting2, 1000);

    function myGreeting2() {
      EventLibrary.postSession(1, screen.width, screen.height);
    }

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
    setInterval(myGreeting, 100);

    function myGreeting() {
        const collectionDeets = document.querySelector("[collection-deets]");
        const stripe = document.querySelector("[stripe]");
        const floaty = document.querySelector("header");
        const routeName = self.$route.name;
        if (routeName === 'collection') {
          const deetsHeight = collectionDeets?.offsetHeight;
          const floatyHeight = floaty?.offsetHeight;
          stripe.setAttribute("style",`height:${deetsHeight + floatyHeight + 80}px`);
        } else if (routeName === 'about') {
          stripe.setAttribute("style",'height:300px');
        } else {
          stripe.removeAttribute("style");
        }
    }
  },
  unmounted() {
    console.log('unmounting');
  },
  watch: { 
    '$route': {
      handler: function(route) {
        const style = {
        }
        if (route.name === 'home') {
          // style['background-color'] = 'black';
        } else if (route.name === 'collection') {
          if (route.params?.collection === 'dreamwork') {
            // style['background'] = 'linear-gradient(0.5turn, #7eab8f, #e9f3ea)';
          }
          if (route.params?.collection === 'walks') {
            // style['background'] = 'linear-gradient(#0d0d0d, #f6f6f6)';
          }
        } else if (route.name === 'about') {
          //
        }
        this.stripeClass = route.name;
        this.stripeStyle = style;
      },
      deep: true,
      immediate: true
    }
  }   
}
</script>
<style lang="scss">
[stripe] {
    width: 100%;
    position: absolute!important;
    top: 0;
    height: 270px;
    z-index: -1;
    // background: linear-gradient(0.25turn, #351dc6, #25ddf5);
      background: black;
    overflow: hidden;
    transition: all 1s;
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
            margin: 0 0 0 0;
            flex: 1 1 auto;
        }
        > footer {
            // flex: 0 0 200px;
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
    // &:link{
    //     text-decoration: underline;
    // }
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

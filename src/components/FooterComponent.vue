<template>
  <footer>
    <div bar1>
    </div>
    <div bar2>
    </div>
    <div container>
      <!-- https://rod.dev is the portfolio of Rodrigo Barraza, Software Engineer & Artist
      2005-2020 -->
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    props: {
    },
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
footer {
  margin-top: 50px;
  overflow: hidden;
  position: relative;
  [bar1] {
    background-color: #f0f0f0;;
    position: absolute;
    width: 100%;
    height: 40px;
    transform: skewY(-3deg) translateY(-5px);
    z-index: 2;
    transform-origin: 100% 0;
  }
  [bar2] {
    background-color: black;
    width: 100%;
    height: 100%;
    transform-origin: 100% 0;
    transform: skewY(-3deg);

    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  [container] {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    color: white;
    padding-top: calc(calc(calc(100vw - 17px) * 0.106) + calc(0*1px) - 0.106 * calc(calc(100vw - 17px) / 2 - 1080px / 2));
  }
}
</style>

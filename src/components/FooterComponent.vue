<template>
  <footer>
    <div bar1>
    </div>
    <div bar2>
    </div>
    <div container>
      https://rod.dev is the portfolio of Rodrigo Barraza, Software Engineer & Artist
      2005-2020
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
  margin-top: 180px;
  overflow: hidden;
  [bar1] {
    background-color: #f0f0f0;;
    position: absolute;
    width: 100%;
    height: 40px;
    transform: skewY(-5deg) translateY(-5px);
    z-index: 2;
    transform-origin: 100% 0;
  }
  [bar2] {
    background-color: #ededed;
    width: 100%;
    height: 100%;
    transform-origin: 100% 0;
    transform: skewY(-5deg);
  }
}
</style>

<template>
  <main id="AIArtView">
    <div header>
      <video autoplay loop muted>
        <source :src="require('@/assets/ai-art-video-done.mp4')" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      <div title>
        AI Art
      </div>
    </div>
    <div>
      BDASD ASDASD
      ASD
      ASD
      ASD
      ASD
      ASD
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'AIArtView',
    components: {
    // HelloWorld
    },
    data() {
        return {
        }
    },
}
</script>

<style lang="scss">
#AIArtView {
  display: flex;
  flex-direction: column;
  [header] {
    background-position: bottom;
    flex: 0 0 360px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    video {
      min-width: 100vw;
      position: absolute;
      min-height: 100%;
      bottom: -140px;
    }
    [title] {
      z-index: 2;
      flex: 1 1 100%;
      color: white;
      font-size: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-shadow: 0px 8px 10px rgba(125,125,125,0.9), 0px -8px 10px rgba(125,125,125,0.9) ;
    }
  }
}
</style>
<template>
  <main view-view>
    <div container>
    </div>
  </main>
</template>

<script>

export default {
    name: 'view-view',
    components: {
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    },
}
</script>

<style scoped lang="scss">
[view-view] {
  position: relative;
  [container] {
    flex-direction: column;
    display: flex;
    grid-gap: 24px;
    padding: 0;
  }
}
</style>
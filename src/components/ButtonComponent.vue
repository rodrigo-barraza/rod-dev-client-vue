<template>
  <div button-component>
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
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
[button-component] {
    font-size: 24px;
    background-color: #323232;
    text-shadow: 0px 0px 0px #dbdbdb;
    color: transparent;
    padding: 12px 24px;
    border-radius: 24px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s, background 0s;
    box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.25);
    &:hover{
        text-shadow: 0px 0px 0px white;
        transform: translateY(-2px);
        background-color: black;
        box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.25);
    }
    &:active{
        transform: translateY(0);
        background: #505050;
        box-shadow: 0px 5px 10px -5px rgba(0,0,0,0.25);
    }
}
</style>
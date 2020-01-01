<template>
  <div id="app">
    <transition
        :duration="300"
        enter-active-class="animated bounceInRight"
        leave-active-class="animated bounceOutLeft"
    >
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'assets/css/_base.scss';
@import 'assets/css/_reset.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

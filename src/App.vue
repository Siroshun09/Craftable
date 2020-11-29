<template>
  <div id="app">
    <header><Header /></header>

    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <footer><Footer /></footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
    components: {
      Header,
      Footer
    },

    metaInfo: {
      titleTemplate: '%s | Craftable',
      meta: [{
          property: 'og:title',
          content: 'Craftable',
        },
        {
          property: 'og:description',
          content: 'A Java programmer\'s site.',
        },
        {
          property: 'og:type',
          content: 'product',
        },
        {
            property: 'og:image',
            content: 'https://lh3.googleusercontent.com/pw/ACtC-3eugRNFuGDac3r14X6dUN12aB4XDm6F-4jl9t8zqXATtt5bKxjBXh4fWsX8rZI0Yj2WO0MhGKjfGvPlDHvHs5KGAenJZPIM8vAKSbaX5ICpjyq9FeKFWRZP28DhO0NKRls8qK_Megb08jOmO3KSrhn9Fw=w1767-h972-no?authuser=0',
        },
        {
          property: 'og:url',
          content: 'https://siroshun09.github.io',
        },
        {
          property: 'og:site_name',
          content: 'Craftable',
        },
      ],
    }
  }
</script>

<style lang='scss'>
* {
  box-sizing: border-box;
}

:focus {
  outline: #448aca 1px solid;
}

input:focus {
  outline-offset: unset;
}

html {
  height: 100%;
  font-size: 12px;

  @include breakpoint($md) {
    font-size: 14px;
  }

  @include breakpoint($lg) {
    font-size: 16px;
  }
}

body {
  margin: 0;
  height: 100%;
  display: flex;
  overflow-x: hidden;
}

#app {
  color: $app-color;
  background-color: $app-background;
  line-height: 1.5;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column;
  font-family: 'Source Sans Pro', 'Noto Sans CJK JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

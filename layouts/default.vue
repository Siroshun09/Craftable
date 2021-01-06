<template>
  <div id="app">
    <header>
      <Header />
    </header>

    <main id=main-contents>
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Ubuntu:wght@500&display=swap');

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
  font-size: 14px;
}

body {
  margin: 0;
  height: 100%;
  display: flex;
  overflow-x: hidden;
}

code, pre {
  font-family: Consolas;
}

#__nuxt {
  height: 100%;
  width: 100%;
}

#app {
  color: $app-color;
  background-color: $app-background;
  line-height: 1.5;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column;
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#main-contents {
  margin-bottom: 3em;
  width: 100%;
}
</style>

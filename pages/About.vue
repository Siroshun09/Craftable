<template>
  <div id=about>
    <div class=icon>
      <img alt="Siroshun09's icon" src="https://i.imgur.com/grWEt3W.jpg" />
    </div>
    <div class=markdown>
      <Markdown path="About" />
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown.vue';
export default {
  scrollToTop: true,
  components: {
    Markdown
  },
  head() {
    return {
      title: 'About',
      meta: [{
          hid: 'description',
          name: 'description',
          content: "Who is Siroshun09?"
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "About"
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Who is Siroshun09?"
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://siroshun09.github.io/about"
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
#about {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;

  @include breakpoint($xs) {
    width: 90%;
  }

  .icon {
    position: relative;
    display: flex;
    z-index: 1;
    margin-bottom: 1.5em;

    >img {
      margin-left: auto;
      margin-right: auto;
      height: 40%;
      width: 40%;

      @include breakpoint($xs) {
        height: 60%;
        width: 60%;
      }
    }
  }

  .markdown {
    text-align: center;
  }
}
</style>
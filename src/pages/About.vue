<template>
    <main id=about>
        <div class=icon>
        <img alt="Siroshun09's icon" src='~@/assets/icon.png'>    
      </div>
        <Markdown path="About" />
    </main>
</template>

<script>
import Markdown from '../components/Markdown.vue';
export default {
  components: { Markdown },
  metaInfo: {
      title: "About"
  }
}
</script>

<style lang="scss">
@import url('../css/MarkdownPage.css');
#about {
    width: 50%;

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
            height: 50%;
            width: 50%;
        }
    }

    .markdown-body {
        >h1 {
            text-align: center;
        }
    }
}
</style>
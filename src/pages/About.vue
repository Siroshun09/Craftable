<template>
    <div id=about>
        <div class=icon>
            <img alt="Siroshun09's icon" src="https://i.imgur.com/grWEt3W.jpg"/>
        </div>
        <Markdown path="About" />
    </div>
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
                height: 50%;
                width: 50%;
            }
        }
    }

    .markdown-body {
        >h1,h2,p {
            text-align: center;
        }
    }
}
</style>
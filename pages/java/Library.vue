<template>
  <div class=markdown>
    <Markdown path="java/Library" />
  </div>
</template>

<script>
import Markdown from '@/components/Markdown.vue';
export default {
  components: {
    Markdown
  },
  head() {
    return {
      title: 'Libraries for Java',
      meta: [{
          hid: 'description',
          name: 'description',
          content: "Java libraries created by Siroshun09"
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Libraries for Java"
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Java libraries created by Siroshun09"
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://siroshun09.github.io/java/library"
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import url('@/assets/css/markdown-page.css');
</style>

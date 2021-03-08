<template>
  <div class="markdown">
    <Markdown path="java/Minecraft" />
  </div>
</template>

<script>
import Markdown from '@/components/Markdown.vue'
export default {
  components: {
    Markdown,
  },
  head() {
    return {
      title: 'Minecraft Plugins',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Minecraft plugins created by Siroshun09',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Minecraft plugins',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Minecraft plugins created by Siroshun09',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://siroshun09.github.io/java/minecraft',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@import url('@/assets/css/markdown-page.css');
</style>
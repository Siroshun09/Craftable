<template>
    <main>
        <Markdown path="java/Minecraft" />
    </main>
</template>

<script>
import Markdown from '@/components/Markdown.vue';
export default {
  components: { Markdown },
  metaInfo: {
      title: "Minecraft Plugins"
  }
}
</script>

<style lang="scss">
@import url('../../css/MarkdownPage.css');
</style>
<template>
    <main>
        <Markdown path="java/Library" />
    </main>
</template>

<script>
import Markdown from '@/components/Markdown.vue';
export default {
  components: { Markdown },
  metaInfo: {
      title: "Libraries for Java"
  }
}
</script>

<style lang="scss">
@import url('../../css/MarkdownPage.css');
</style>
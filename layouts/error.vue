<template>
  <section class="not-found-section">
    <h1>
      <font-awesome icon="exclamation-circle" />
      <span>Not found!</span>
    </h1>
    <div v-if="error.statusCode === 404" class="error">
      <p>指定されたリンクのページ "<code>{{ this.$route.path }}</code>" は見つかりませんでした。</p>
      <p>The page "<code>{{ this.$route.path }}</code>" couldn't be found.</p>
    </div>
    <div v-else class="error">
      <p>エラーが発生しました。</p>
      <p>An error has been occurred.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NotFound',
  metaInfo: {
    title: 'Not Found',
  },
  props: ['error'],
  layout: 'error'
};
</script>

<style lang="scss" scoped>
.not-found-section {
  flex-direction: column;
  align-items: center;
  padding: 4rem;

  h1 {
    position: relative;
    font-size: 3.0em;

    >svg {
      color: $not-found-red;
      z-index: 1;
      opacity: .5;
      margin-right: 0.5em;
    }

    >span {
      z-index: 2;
    }
  }

  .error {
    color: $not-found-red;

    >p {
      font-size: 1.3rem;
    }
  }
}
</style>

<template>
  <NotFound />
</template>

<script>
import NotFound from '@/components/NotFound.vue';
export default {
  scrollToTop: true,
  components: {
    NotFound
  },
  name: 'NotFound',
  head() {
    return {
      title: 'Not Found',
    }
  },
};
</script>

<template>
<div>
    <template v-if="content">
        <transition name="fade" mode="out-in">
            <article>
                <component :is="content" />
            </article>
        </transition>
    </template>
    <template v-else>
        <NotFound />
    </template>
</div>
</template>

<script>
import NotFound from "../pages/NotFound.vue";
export default {
    props: {
        path: {
            type: String,
            required: true,
        }
    },
    components: {
        NotFound,
    },
    data() {
        return {
            content: null
        }
    },
    created() {
        const markdown = require(`../markdown/${this.path}.md`)
        this.content = markdown.vue.component
    }
}
</script>

<style scoped>
@import "../../node_modules/github-markdown-css/github-markdown.css";
</style>
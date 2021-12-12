<template>
  <div v-if="posts.length > 0">
    <span class="title">{{ $localization.state.default.posts.listPost }}</span>
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @remove="removePost"
    />
  </div>
  <div v-else>
    <span class="title">Список постов пуст.</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop, Emit } from "vue-property-decorator";
import Post from "@/types/Posts/Post";
import PostItem from "./PostItem.vue";
import { PropType } from "@vue/runtime-core";

@Options({
  components: { PostItem },
  name: "PostList",
})
export default class PostList extends Vue {
  @Prop({ type: Array as PropType<Post[]>, required: true }) posts!: Post[];

  @Emit("remove") removePost(post: Post) {
    return post;
  }
}
</script>

<style scoped>
.title {
  display: block;
  margin: 20px 0 0 0;
  font-size: 24px;
}
.post_list-item {
  display: inline-block;
  margin-right: 10px;
}
</style>
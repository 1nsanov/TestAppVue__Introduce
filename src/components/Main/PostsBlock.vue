<template>
  <post-list :posts="posts" @remove="removePost"/>
  <pagination
    @changePage="changePage"
    :countPages="GeneralPB.countPages"
    :currentPage="GeneralPB.currentPage"
  />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PostList from "@/components/Main/PostList.vue";
import { Emit, Prop } from "vue-property-decorator";
import Post from "@/types/Posts/Post";
import GeneralPB from "@/types/GeneralPB";
import { PropType } from "@vue/runtime-core";

@Options({
  components: { PostList },
  name: "PostsBlock",
})
export default class PostsBlock extends Vue {
  @Prop({ type: Object as PropType<GeneralPB>, required: true })
  GeneralPB!: GeneralPB;
  @Prop({ type: Array as PropType<Post[]>, required: true }) posts!: Post[];

  @Emit("remove") removePost(post: Post) {
    return post;
  }
  @Emit("changePage") changePage(countPage: number) {
    return countPage;
  }
}
</script>

<style scoped>
</style>
<template>
  <form action="" @submit.prevent>
    <h1 class="header-text">Создание поста</h1>
    <my-input
      class="input-form"
      v-model="post.title"
      type="text"
      placeholder="Название"
    />
    <br />
    <my-input
      class="input-form"
      v-model="post.body"
      type="text"
      placeholder="Описание"
    />
    <br />
    <my-button class="btn create-btn" @click="createPost">Добавить</my-button>
  </form>
</template>

<script lang="ts">
import Post from "@/types/Posts/Post";
import { Options, Vue } from "vue-class-component";
import { Emit } from "vue-property-decorator";
@Options({
  name: "PostForm",
})
export default class PostForm extends Vue {
  post: Post = { id: "", title: "", body: "" };
  @Emit("create") createPost() {
    this.post.id = Date.now().toString();
    return Object.assign({}, this.post);
  }
}
</script>

<style scoped>
.header-text {
  font-size: 32px;
  font-weight: bold;
}
</style>
<template>
  <div class="search">
    <my-input
      class="input input-search"
      @input="updateInput"
      placeholder="Поиск постов"
    />
  </div>
  <div class="app-btns">
    <my-button class="btn create-btn" @click="showDialog">{{
      $localization.state.default.posts.createPost
    }}</my-button>
    <my-select
      class="search"
      @change="changeOption"
      :options="options"
      v-model="modelValueSelect"
      />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PostList from "@/components/Main/PostList.vue";
import { Emit, Prop } from "vue-property-decorator";
import Option from "@/types/Posts/Option";
import { PropType } from "@vue/runtime-core";

@Options({
  components: { PostList },
  name: "PostsCoord",
})
export default class PostsCoord extends Vue {
  @Prop({ type: String }) modelValueInput!: string;
  @Prop({ type: String }) modelValueSelect!: Option;
  @Prop({ type: Array as PropType<Option[]>, default: () => [] })
  options!: Option;
  @Prop({ type: Boolean }) dialogVisible!: boolean;

  @Emit("update:modelValueInput") updateInput(event: any) {
    return event.target.value;
  }
  @Emit("update:modelValueSelect") changeOption(event: any) {
    return event.target.value;
  }
  @Emit("showDialog") showDialog() {
    return this.dialogVisible;
  }
}
</script>

<style>
</style>
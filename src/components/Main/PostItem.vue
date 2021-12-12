<template>
  <div class="post">
    <div>
      <div>
        <strong>{{ $localization.state.default.posts.post.titlePost }}: </strong
        >{{ post.title }}
      </div>
      <div>
        <strong>{{ $localization.state.default.posts.post.bodyPost }}: </strong
        >{{ post.body }}
      </div>
    </div>
    <div class="post__interface">
      <my-button class="btn delete-btn" @click="removePost">{{
        $localization.state.default.posts.post.delete
      }}</my-button>
      <div class="post__interface__reaction">
        <div class="reaction like">
          <img
            src="@/img/hand_like_icon.png"
            alt=""
            class="like"
            @click="DoLike"
          />
          <span class="count">{{ like }}</span>
        </div>
        <div class="reaction dislike">
          <img
            src="@/img/hand_dislike_icon.png"
            alt=""
            class="dislike"
            @click="DoDislike"
          />
          <span class="count">{{ dislike }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Post from "@/types/Posts/Post";
import { PropType } from "@vue/runtime-core";

@Options({
  name: "PostItem",
})
export default class PostItem extends Vue {
  @Prop({ type: Object as PropType<Post>, required: true }) post!: Post;
  @Emit("remove") removePost() {
    return this.post;
  }
  like = 0;
  flagLike = false;
  dislike = 0;
  flagDisLike = false;

  DoLike() {
    if (this.flagLike === false) {
      if (this.flagDisLike === true) {
        this.flagDisLike = false;
        this.dislike--;
      }
      this.flagLike = true;
      this.like++;
    } else {
      this.flagLike = false;
      this.like--;
    }
  }
  DoDislike() {
    if (this.flagDisLike === false) {
      if (this.flagLike === true) {
        this.flagLike = false;
        this.like--;
      }
      this.flagDisLike = true;
      this.dislike++;
    } else {
      this.flagDisLike = false;
      this.dislike--;
    }
  }
}
</script>

<style scoped>
.post__interface {
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__interface__reaction {
  display: flex;
}
.reaction {
  margin-left: 15px;
  display: flex;
  align-items: center;
}
.like,
.dislike {
  cursor: pointer;
}
</style>
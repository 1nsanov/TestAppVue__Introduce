<template>
  <div class="home container">
    <div class="content">
      <span class="name-app">Test App</span> - lorem ipsum dolor sit amet
      consectetur adipisicing elit. Hic dolore, quam libero provident in aliquid
      fugit dolor facilis beatae facere assumenda iure consequatur nemo labore
      quibusdam placeat dicta nesciunt rem.
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Home",
})
export default class Home extends Vue {

}
</script>


<style  lang="less" scoped>
.name-app {
  font-weight: 700;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>

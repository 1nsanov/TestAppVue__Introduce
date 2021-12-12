<template>
  <div class="about container">
    <div class="content">
      <p>{{ $localization.state.default.about.title }}</p>
      <br />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
        exercitationem. Eos, dolor. A obcaecati quasi animi assumenda, excepturi
        ad, fugiat nam nisi accusamus recusandae vitae ipsa velit rem et
        temporibus!
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "About",
})
export default class About extends Vue {}
</script>


<style scoped>
</style>


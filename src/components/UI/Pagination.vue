<template>
  <div class="page__wrapper" v-if="this.countPages != 0">
    <div
      class="page-arrow"
      @click="prevPage"
      :class="{
        'page-block': this.showPages[0] == 1,
        page: this.showPages[0] > 1,
      }"
    >
      <i class="fas fa-chevron-left"></i>
    </div>
    <div
      class="page"
      v-for="countPage in showPages"
      :key="countPage"
      :class="{ 'current-page': currentPage === countPage }"
      @click="changePage(countPage)"
    >
      {{ countPage }}
    </div>

    <div
      class="page-arrow"
      :class="{
        'page-block':
          this.showPages[2] == this.countPages || this.showPages.length < 3,
        page: this.showPages[2] < this.countPages,
      }"
      @click="nextPage"
    >
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop, Watch } from "vue-property-decorator";
@Options({
  name: "Pagination",
})
export default class Pagination extends Vue {
  @Prop({ type: Number, required: true }) countPages!: number;
  @Prop({ type: Number, required: true }) currentPage!: number;

  @Emit("changePage") changePage(countPage: number) {
    return countPage;
  }

  showPages: number[] = [];

  @Watch("countPages")
  createPageList() {
    if (this.countPages < 4) {
      if (this.countPages == 3) {
        this.showPages = [1, 2, 3];
      } else if (this.countPages == 2) {
        this.showPages = [1, 2];
      } else {
        this.showPages = [1];
      }
      return false;
    } else {
      if (this.showPages.length == 3) {
        return true;
      } else {
        this.showPages = [1, 2, 3];
        return true;
      }
    }
  }

  @Watch("countPages")
  controlCurrent() {
    if (this.countPages < this.showPages[2]) {
      this.prevPage();
    }
    if (this.currentPage > this.countPages) {
    }
  }

  mounted() {
    this.createPageList();
  }

  nextPage() {
    if (this.createPageList()) {
      let last = this.showPages[2];
      if (this.countPages > last) {
        this.showPages[0]++;
        this.showPages[1]++;
        this.showPages[2]++;
      }
    }
  }
  prevPage() {
    if (this.createPageList()) {
      let first = this.showPages[0];
      if (1 < first) {
        this.showPages[0]--;
        this.showPages[1]--;
        this.showPages[2]--;
      }
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin: 0 auto;
  max-width: 500px;
  justify-content: center;
}
.page {
  color: #fff;
  font-weight: 700;
  background: rgb(26, 103, 167);
  border-radius: 5px;
  width: 35px;
  height: 35px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 3px 15px 3px;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;
}
.page:hover {
  color: rgb(26, 103, 167);
  background: white;
  outline: 1px solid rgb(26, 103, 167);
}
.current-page {
  outline: 1.5px solid rgb(30, 212, 39);
}

.page-block {
  background: rgb(70, 70, 70);
  color: rgb(168, 168, 168);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 0 3px 15px 3px;
  cursor: default;
}
.page-arrow {
  margin-left: 12px;
  margin-right: 12px;
  width: 25px;
  font-size: 18px;
}
</style>
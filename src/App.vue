<template>
  <div class="wrapper" :style="styles">
    <NavBar @changeTheme="onClickChangeTheme" />
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "App",
})
export default class App extends Vue {
  styles = {};
  onClickChangeTheme() {
    this.styles = {
      "--main-bg-color": this.$my.getTheme().mainBgColor,
      "--main-text-color": this.$my.getTheme().mainTextColor,
      "--post-bg-color": this.$my.getTheme().postBgColor,
      "--post-text-color": this.$my.getTheme().postTextColor,
    };
    this.$my.changeTheme();
  }
  beforeMount() {
    this.onClickChangeTheme();
  }
}
</script>

<style lang="less">
.app {
  .tirscript-button {
    border-radius: 20px;
    margin: 0;
  }
  .tirscript-input {
    margin: 10px 0;
    .form-control {
      border-radius: 10px;
    }
  }
}
body {
  font-size: 24px;
  font-family: "Source Sans Pro", sans-serif;
}
.container {
  max-width: 1300px;
  margin: 0px auto;
  padding: 0 15px;
}
.wrapper {
  background: var(--main-bg-color);
  color: var(--main-text-color);
  width: 100%;
  height: 100vh;
  overflow: auto;
  transition: 0.5s;
  padding: 0px auto;
}
.post {
  margin: 15px 0px;
  padding: 15px;
  border-radius: 5px;
  background: var(--post-bg-color);
  color: var(--post-text-color);
  transition: 0.5s;
}
.theme {
  background: var(--main-bg-color);
  color: var(--main-text-color);
  transition: 0.5s;
}
.lang {
  background: var(--main-bg-color);
  color: var(--main-text-color);
  transition: 0.5s;
}
.header {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(83, 146, 218);
  color: var(--main-bg-color);
  align-items: center;
  z-index: 10;
  transition: 0.5s;
}
.table__item {
  background: var(--post-bg-color);
  color: var(--post-text-color);
}
.dialoge__content {
  background: var(--main-bg-color);
}

.content {
  margin: 95px 0 0 0;
}
.title {
  text-align: center;
  display: block;
  font-size: 36px;
  font-weight: 700;
}
.app-btns {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}

.back {
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 46px;
  color: rgb(83, 146, 218);
}
</style>

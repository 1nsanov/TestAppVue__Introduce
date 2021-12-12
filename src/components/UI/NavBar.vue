<template>
  <header class="header">
    <div class="header__contanier container">
      <div class="header__logo"><i class="fab fa-vuejs"></i> Test App</div>
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#" class="menu__link" @click="$router.push('/')">{{
              $localization.state.default.header.home
            }}</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link" @click="$router.push('/main')">{{
              $localization.state.default.header.posts
            }}</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link" @click="$router.push('/table')">{{
              $localization.state.default.header.table
            }}</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__link" @click="$router.push('/about')">{{
              $localization.state.default.header.about
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <dropdown
      :stateDropdown="stateDropdown"
      @changeTheme="changeTheme"
      v-model:modelValueSelect="valueSelect"
      @switchLang="switchLang"
      :options="options"
    />
  </header>
</template>

<script lang="ts">
import { Vue, Options } from "vue-property-decorator";

@Options({
  name: "NavBar",
})
export default class NavBar extends Vue {
  stateDropdown = true;
  options = [
    { value: "ru", name: "Ru" },
    { value: "en", name: "En" },
  ];
  valueSelect = "ru";
  showDropDown() {
    this.stateDropdown = !this.stateDropdown;
  }
  changeTheme() {
    this.$emit("changeTheme");
  }

  switchLang() {
    this.$localization.state.switchLangSelect(this.valueSelect);
  }
}
</script>


<style lang='less'>
.header {
  z-index: 100;
}
.header__contanier {
  display: flex;
  min-height: 75px;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  position: relative;
  font-size: 32px;
  font-weight: 900;
  cursor: pointer;
  float: left;
}

.menu {
  position: relative;
  padding: 5px 0;
  float: right;
}

.menu__list {
  display: flex;
  flex-wrap: wrap;
}

.menu__item:not(:last-child) {
  margin: 0 25px 0 0;
}

.menu__link {
  font-weight: 600;
}

@media screen and (max-width: 767px) {
  .menu__item {
    font-size: 24px;
  }
  .header__logo {
    font-size: 26px;
  }
  .menu__item:not(:last-child) {
    margin: 0 20px 0 0;
  }
}
@media screen and (max-width: 479px) {
  .menu__item {
    font-size: 18px;
  }
  .header__logo {
    font-size: 20px;
  }
  .menu__item:not(:last-child) {
    margin: 0 5px 0 0;
  }
}
</style>
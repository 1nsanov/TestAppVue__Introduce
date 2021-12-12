<template>
  <div class="dropdown" v-if="stateDropdown">
    <div class="dropdown__title">
      {{ $localization.state.default.dropdown.menu }}
    </div>
    <div class="dropdown__menu">
      <div class="dropdown__menu_item">
        <span
          ><i class="fas fa-adjust"></i>
          {{ $localization.state.default.dropdown.nightStyle }}</span
        >
        <span class="switch"><toggle-switch @onClick="changeTheme" /></span>
      </div>
      <div class="dropdown__menu_item">
        <span>
          <i class="fas fa-globe"></i>
          {{ $localization.state.default.dropdown.lang }}
        </span>
        <span>
          <my-select
            class="sw-lang"
            @change="changeOption"
            :options="options"
            v-model="modelValueSelect"
            @onClick="switchLang"
          />
        </span>
      </div>
    </div>
    <div class="flag"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  name: "Dropdown",
})
export default class Dropdown extends Vue {
  @Prop({ default: false }) stateDropdown!: Boolean;
  @Prop({ type: String }) modelValueSelect!: {};
  @Prop({ default: () => [] }) options!: [];

  changeTheme() {
    this.$emit("changeTheme");
  }
  @Emit("update:modelValueSelect") changeOption(event: any) {
    return event.target.value;
  }
  switchLang() {
    this.$emit("switchLang");
  }
}
</script>

<style lang='less' scoped>
.dropdown {
  margin-top: 75px;
  position: fixed;
  top: 0;
  left: -270px;
  z-index: 90;
  background: rgb(66, 66, 66);
  height: 100vh;
  min-width: 270px;
  transition: ease 1s;
}
.dropdown:hover {
  left: 0;
}
.flag {
  position: fixed;
  width: 25%;
  height: 75px;
  top: 0;
  left: 0;
}
.dropdown__title {
  width: 100%;
  line-height: 55px;
  font-weight: 900;
  font-size: 30px;
  background: rgb(34, 80, 133);
  padding: 10px 15px;
  cursor: pointer;
}
.dropdown__menu_item {
  color: rgb(177, 177, 177);
  width: 100%;
  font-size: 32px;
  padding: 15px 15px 15px 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
}
.dropdown__menu_item:hover {
  background: rgb(116, 116, 116);
}
.sw-lang {
  width: 50px;
  margin: 0;
}
</style>
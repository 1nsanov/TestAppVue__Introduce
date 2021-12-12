<template>
  <label class="switch">
    <input type="checkbox" checked @click="emitClick" />
    <span class="slider round"></span>
  </label>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ToggleSwitch",
})
export default class ToggleSwitch extends Vue {
  emitClick() {
    this.$emit("onClick");
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(25px);
  -ms-transform: translateX(25px);
  transform: translateX(25px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
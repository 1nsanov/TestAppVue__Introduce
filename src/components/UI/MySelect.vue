<template>
  <select class="select" :value="modelValue" @change="changeOption" @click="emitClick" >
    <option v-for="option in options" :key="option.value" :value="option.value" >
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Option from "@/types/Posts/Option";

@Options({
  name: "MySelect",
})
export default class MySelect extends Vue {
  @Prop({ type: String }) modelValue!: Option;
  @Prop({ default: () => [] }) options!: [];

  emitClick() {
    this.$emit("onClick");
  }
  @Emit("changeOption") changeOption(event: any){
    return event.target.value
  }
  // changeOption(){
  //   this.$emit("changeOption",)
  // }
}
</script>

<style lang='less' scoped>
:root {
  --select-arrow: var(--select-border);
}
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  &::-ms-expand {
    display: none;
  }

  display: grid;
  outline: none;
  margin: 11px 0 0 0;
  padding-left: 7px;
  width: 200px;
  height: 32px;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  font-weight: 600;
  select,
  &::after {
    grid-area: select;
  }
  // Custom arrow
  &:after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}
</style>
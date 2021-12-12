<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  name: "MyInput",
})
export default class MyInput extends Vue {
  @Prop({ type: String }) modelValue!: string;
  @Emit("update:modelValue") updateInput(event: any) {
    return event.target.value;
  }
}
</script>

<style scoped>
.input {
  padding: 7px 10px;
  margin: 10px 0 0 0px;
  border: 2px solid rgb(13, 180, 221);
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
}
.input:focus {
  border: 2px solid rgb(12, 122, 224);
}
.input.input-form {
  width: 300px;
}
</style>
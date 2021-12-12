<template>
  <form action="" @submit.prevent>
    <h1 class="header-text" v-if="change == false">Записать человека</h1>
    <h1 class="header-text" v-else>Редактирование</h1>
    <my-input
      class="input-peoples"
      placeholder="Имя"
      v-model="people.name"
      minLength="2"
    />
    <br />
    <my-input
      type="number"
      class="input-peoples"
      placeholder="Возраст"
      v-model="people.age"
      minLength="2"
    />
    <br />
    <my-input
      class="input-peoples"
      placeholder="Должность"
      v-model="people.position"
      minLength="3"
    />
    <br />
    <my-input
      type="tel"
      class="input-peoples"
      placeholder="373(000)00000"
      v-model="people.telnumber"
      pattern="373([0-9]{3})[0-9]{5}"
      minLength="13"
    />
    <br />
    <my-button
      class="create-btn-form"
      @click="createPeople"
      v-if="change == false"
      >Добавить</my-button
    >
    <my-button class="create-btn-form" @click="changePeople" v-else
      >Изменить</my-button
    >
  </form>
</template>

<script lang="ts">
import People from "@/types/People/People";

import { Emit, Prop, Vue, Options } from "vue-property-decorator";

@Options({
  name: "TableForm",
})
export default class TableForm extends Vue {
  @Prop({ type: Boolean }) change!: boolean;
  @Prop() people!: People;
  @Prop() peoples!: People[];

  @Emit("createPeople") createPeople() {
    this.people.id = Date.now().toString();
    return Object.assign({}, this.people);
  }
  @Emit("changePeople") changePeople() {
    this.people.id = Date.now().toString();
    return Object.assign({}, this.people);
  }
}
</script>

<style scoped>
.input-peoples {
  width: 100%;
}
.create-btn-form {
  margin-top: 10px;
}
</style>
<template>
  <div class="title">{{ $localization.state.default.table.title }}</div>
  <div class="search-people">
    <my-input class="search" @input="updateInput" placeholder="Поиск" />
    <my-select
      class="search"
      @change="changeOption"
      :options="options"
      v-model="modelValueSelect"
    />
  </div>
</template>

<script lang="ts">
import OptionTypePeople from "@/types/People/OptionTypePeople";
import OptionPeople from "@/types/People/OptionPeople";
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  name: "PeopleCoord",
})
export default class PeopleCoord extends Vue {
  @Prop({ type: String }) modelValueInput!: string;
  @Prop({ type: String }) modelValueSelect!: OptionTypePeople;
  @Prop({ default: () => [] }) options!: OptionPeople[];

  @Emit("update:modelValueInput") updateInput(event: any) {
    return event.target.value;
  }
  @Emit("update:modelValueSelect") changeOption(event: any) {
    return event.target.value;
  }
}
</script>


<style scoped>
.search-people {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.search {
  margin: 10px 10px 5px 10px;
  font-size: 16px;
  align-self: center;
}
</style>
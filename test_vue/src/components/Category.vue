<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <br />
    <slot>默认插槽的默认值</slot><br />
    <slot name="slot1">具名插槽slot1默认值</slot><br />
    <slot :movies="movies">作用域插槽的默认值</slot><br />
    <slot :movies="movies" name="slot2">作用域插槽slot2的默认值</slot><br />
  </div>
</template>
<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      movies: ["古惑仔", "无间道", "逃学威龙", "赌圣"],
    };
  },
};
</script>
<style scoped>
.category {
  background-color: pink;
}
</style>

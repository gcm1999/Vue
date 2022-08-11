<template>
  <div>
    <h2>学生名字：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="getStudentName(name)">获取学生姓名</button>
  </div>
</template>
<script>
export default {
  name: "Student",
  props: ["getStudentName"],
  data() {
    return {
      name: "cc",
      age: 22,
    };
  },
};
</script>
<style scoped>
div {
  background-color: skyblue;
}
</style>

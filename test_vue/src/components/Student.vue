<template>
  <div>
    <h2 v-show="schoolName">学校名字：{{ schoolName }}</h2>
    <h3>学生名字：{{ name }}</h3>
    <h3>年龄：{{ age }}</h3>
    <button @click="getStudentName(name)">获取学生姓名</button>
    <button @click="emitStudentName()">传递学生姓名给School</button>
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
      schoolName: "",
    };
  },
  methods: {
    emitStudentName() {
      this.$bus.$emit("getStudentName", this.name);
    },
  },
  mounted() {
    this.$bus.$on("getSchoolName", (name) => {
      this.schoolName = name;
    });
  },
};
</script>
<style scoped>
div {
  background-color: skyblue;
}
</style>

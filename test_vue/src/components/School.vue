<template>
  <div>
    <h2>学校名字：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="getSchoolName">传递学校名字给App</button>
    <button @click="emitSchoolName">传递学校名字给Student</button>
    <h3 v-show="stuName">学生名字：{{ stuName }}</h3>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      name: "mm",
      address: "JX",
      stuName: "",
    };
  },
  methods: {
    getSchoolName() {
      this.$emit("myEvent", this.name);
    },

    setStudentName(name) {
      this.stuName = name;
    },

    emitSchoolName() {
      this.$bus.$emit("getSchoolName", this.name);
    },
  },
  mounted() {
    this.$bus.$on("getStudentName", this.setStudentName);
  },
};
</script>
<style scoped>
div {
  background-color: pink;
}
</style>

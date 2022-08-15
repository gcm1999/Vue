<template>
  <div>
    <h1>获取到的名字:{{ name }}</h1>
    <Student :getStudentName="getStudentName"></Student>
    <!-- <School @myEvent="getSchoolName"></School> -->
    <!-- 自定义事件第二种写法1 -->
    <School ref="school"></School>
  </div>
</template>
<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  data() {
    return {
      name: "gg",
    };
  },
  components: {
    Student,
    School,
  },
  methods: {
    getStudentName(name) {
      this.name = name;
    },
    getSchoolName(name) {
      this.name = name;
    },
  },
  mounted() {
    // 自定义事件第二种写法2
    this.$refs.school.$on("myEvent",this.getSchoolName)
  },
};
</script>
<style scoped></style>

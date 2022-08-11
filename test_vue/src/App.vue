<template>
  <div>
    <h1>获取到的名字:{{ name }}</h1>
    <Student :getStudentName="getStudentName"></Student>
    <School @myEvent="getSchoolName"></School>
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
};
</script>
<style scoped></style>

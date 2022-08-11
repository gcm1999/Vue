<template>
  <div>
    <h2>学校名字：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
    <button @click="getSchoolName">获得学校名字</button>
  </div>
</template>
<script>
export default {
  name: "School",
  data() {
    return {
      name: "mm",
      address: "JX",
    };
  },
  methods: {
    getSchoolName() {
      this.$emit("myEvent", this.name);
    },
  },
};
</script>
<style scoped>
div {
  background-color: pink;
}
</style>

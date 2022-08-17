<template>
  <div>
    <h1>获取到的名字:{{ name }}</h1>
    <Student :getStudentName="getStudentName"></Student>
    <!-- <School @myEvent="getSchoolName"></School> -->
    <!-- 自定义事件第二种写法1 -->
    <School ref="school"></School>

    <Category title="默认插槽">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>

    <Category title="具名插槽1">
      <h4 slot="slot1">hhhhh</h4>
      <ol slot="slot1">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ol>
    </Category>

    <Category title="具名插槽1">
      <template slot="slot1">
        <h4>hhhhh</h4>
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category title="具名插槽1">
      <template v-slot:slot1>
        <h4>hhhhh</h4>
        <ol>
          <li v-for="(item, index) in games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category title="作用域插槽1">
      <template slot-scope="scopeData">
        <h4>{{ scopeData }}</h4>
        <ol>
          <li v-for="(item, index) in scopeData.movies" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>

    <Category title="作用域插槽2">
      <template slot-scope="scopeData" slot="slot2">
        <h4>{{ scopeData }}</h4>
        <ol>
          <li v-for="(item, index) in scopeData.movies" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
  </div>
</template>
<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
import Category from "./components/Category.vue";
export default {
  name: "App",
  data() {
    return {
      name: "gg",
      games: ["lol", "tft", "pubg"],
    };
  },
  components: {
    Student,
    School,
    Category,
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
    this.$refs.school.$on("myEvent", this.getSchoolName);
  },
};
</script>
<style scoped></style>

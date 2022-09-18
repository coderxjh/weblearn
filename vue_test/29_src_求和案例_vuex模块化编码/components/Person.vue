<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件求和为：{{ sum }}</h3>
    <h3>列表中的第一个人的名字:{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">从服务器中添加人员</button>

    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList;
    },
    sum() {
      return this.$store.state.countAbout.sum;
    },
    firstPersonName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  mounted() {
    console.log(this.$store)
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.name = "";
      this.$store.commit("personAbout/ADD_PERSON", personObj);
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.name = "";
      this.$store.dispatch("personAbout/addPersonWang", personObj);
    },
    addPersonServer() {
      this.$store.dispatch("personAbout/addPersonServer");
    },
  },
};
</script>

<style>
</style>
<template>
  <h1>一个人的信息：</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h2>a的值：{{ a }}</h2>
  <button @click="sayHello">说话(Vue3配置的——sayWelcome)</button>
  <br />
  <br />
  <button @click="sayWelcome">说话(Vue2配置的——sayWelcome)</button>
  <br />
  <br />
  <button @click="test1">测试在Vue2的配置中读取Vue3中的数据、方法</button>
  <br />
  <br />
  <button @click="test2">测试在Vue3的setup配置中读取Vue2中的数据、方法</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
      a: 100,
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎来到尚硅谷学习");
    },
    test1() {
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      this.sayHello();
    },
  },
  // 此处只是测试setup，暂时不考虑响应式的问题
  setup() {
    // 数据
    let name = "张三";
    let age = 18;
    let a = 200;

    // 方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了,你好啊！`);
    }

    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);
      console.log(this.sayWelcome);
    }
    // 返回一个对象(常用)
    return {
      name,
      age,
      sayHello,
      test2,
      a,
    };
    // 返回一个渲染函数
    // return () => h("h1", "尚硅谷");
  },
};
</script>


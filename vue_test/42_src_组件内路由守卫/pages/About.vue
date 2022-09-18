<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg:'about'
    }
  },
  // beforeDestroy() {
  //   console.log("About组件被销毁了");
  // },
  // mounted() {
  //   console.log("About组件挂载完毕了", this.$route);
  // },
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About--beforeRouteEnter", to, from);
    // 判断切换的路由是否需要进行权限控制
    if (to.meta.isAuth) {
      // 权限控制的具体规则
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限查看");
      }
    } else {
      // 放行
      next();
    }
  },
  // 通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About--beforeRouteLeave", to, from);
    next();
  },
};
</script>
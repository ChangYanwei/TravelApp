<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>

  import Home from "./pages/home/Home";

  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style>
  @import "assets/css/reset.css";
  @import "assets/css/border.css";
  @import "assets/css/iconfont.css";

</style>

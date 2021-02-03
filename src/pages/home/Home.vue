<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>

  import HomeHeader from "./childComponents/HomeHeader";
  import HomeSwiper from "./childComponents/HomeSwiper";

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>

<style scoped>

</style>

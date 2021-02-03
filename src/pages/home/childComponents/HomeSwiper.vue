<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.src">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>


<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [
          {
            id: '0001',
            src: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_710x360_7486df6c.jpg'
          },
          {
            id: '0002',
            src: 'http://imgs.qunarzz.com/vs_ceph_vs_tts/899cb5cd-beec-4e75-a37e-55eae1c26af9.jpg_r_480x320x95_f6f463b3.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff

  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee

    .swiper-img
      width: 100%
</style>

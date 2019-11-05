<template lang="pug">
  .content-wrap
    .ixdBnner
      carousel(
        :perPage="1"
        :mouse-drag="false"
        :paginationEnabled="true"
        :paginationActiveColor="'#ff3c00'"
        :paginationColor="'#000'"
        :paginationSize="15"
        :loop="true"
        :autoplay="true"
        :speed="1000"
        :autoplayTimeout="30000")
        slide(v-for="(imgs,index) in idxBanners" :key="index")
          li
            img(:src='require(`@img/banner/${imgs.bigImg}`)')
</template>

<script>
import SvgIcon from '@c/SvgIcon.vue'
import idxBanner from '@data/idxBanner'
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Home',
  data() {
    return {
      idxBanners: idxBanner
    }
  },
  components: {
    SvgIcon,                 //svg sprite
    Carousel,                //輪播圖
    Slide                    //輪播圖
  }
}
</script>

<style lang="sass">
  @import '@css/index.sass'
</style>

<template lang="pug">
  .content-wrap
    section.ixdBnner(ref="company")
      ul.pc
        carousel(
          ref="carousel"
          :perPage="1"
          :mouse-drag="false"
          :paginationEnabled="true"
          :paginationActiveColor="'#ff3c00'"
          :paginationColor="'#000'"
          :paginationSize="15"
          :loop="true"
          :autoplay="true"
          :speed="1000"
          :autoplayTimeout="5000")
          slide(v-for="(imgs,index) in idxBanners" :key="index")
            li
              img(:src='require(`@img/banner/${imgs.pcImg}`)' @load="getScrollTop")
      ul.mb
        carousel(
          :perPage="1"
          :mouse-drag="false"
          :paginationEnabled="true"
          :paginationActiveColor="'#ff3c00'"
          :paginationColor="'#000'"
          :loop="true"
          :autoplay="true"
          :speed="1000"
          :autoplayTimeout="5000")
          slide(v-for="(imgs,index) in idxBanners" :key="index")
            li
              img(:src='require(`@img/banner/${imgs.mbImg}`)')
    section.about-wrap(ref="about")
      .themeTitle
        .heading 認識昱翔
        .subTitle ABOUT YU XIANG
      .about-content
        .bg-sec
          img(src="@img/about.png")
        .article
          p
            |遇見，飛翔，我們遇見創意的延生
            br
            |飛翔，在這無限天際中
            br
            |我們是一群候鳥，在無限的天際中
            br
            |創造想像力的延生，設計美學的無限性
            br
            |連接你我世界的軌道
            br
            |讓我們來幫你的天空，填滿色彩吧！
    section.service-wrap(ref="service")
      i.redDot.right-dot
      i.redDot.left-dot
      i.redDot.top-dot
      i.redDot.bottom-dot
      .themeTitle
        .heading 服務項目
        .subTitle SERVICE ITEMS
      .service-item
        ul.serviceItem-list
          li
            .icon
              img(src="@img/service_01.png")
            .txt 品牌形象顧問
          li
            .icon
              img(src="@img/service_02.png")
            .txt 行銷通路開發
          li
            .icon
              img(src="@img/service_03.png")
            .txt 媒體設計經營
          li
            .icon
              img(src="@img/service_04.png")
            .txt 政府接案規劃
    section.market-wrap(ref="activity")
      .themeTitle
        .heading 活動市集
        .subTitle SUNDAY MARKET
      ul.marketItem-list
        i.redDot.top-dot
        i.redDot.left-dot
        i.redDot.right-dot
        i.redDot.bottom-dot
        li
          img(src="@img/market_01.jpg")
          .title 公益活動
        li
          img(src="@img/market_02.jpg")
          .title 文青市集
        li
          img(src="@img/market_03.jpg")
          .title 資源再造
</template>

<script>
import SvgIcon from '@c/SvgIcon'
import idxBanner from '@data/idxBanner.json'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Home',
  data() {
    return {
      idxBanners: idxBanner,
      vueCarousel: null
    }
  },
  components: {
    SvgIcon,                 // svg sprite
    Carousel,                // 輪播圖
    Slide                    // 輪播圖
  },
  methods: {
    getScrollTop() {
      const scrollTop = document.documentElement.scrollTop
      const headerHeight = document.querySelector('header').offsetHeight
      const blocks = document.querySelectorAll('section')
      const menu = document.getElementsByClassName('sideMenu')
      const menuLi = menu[0].getElementsByTagName('li')

      for (let i = 0; i < blocks.length; i++) {
        const tops = blocks[i].offsetTop - headerHeight
        const blocksHeight = blocks[i].offsetHeight

        menuLi[i].classList.remove('enable')
        if (scrollTop >= tops && scrollTop < (tops + blocksHeight)) {
          menuLi[i].classList.add('enable')

          // 進入-- 認識昱翔
          if (i === 1) {
            const moveIn = document.getElementsByClassName('article')
            moveIn[0].classList.add('moveIn')
          }

          // 進入-- 服務項目
          if (i === 2) {
            const item = document.getElementsByClassName('serviceItem-list')
            const itemLi = item[0].getElementsByTagName('li')

            for (let j = 0; j < itemLi.length; j++) {
              itemLi[j].classList.add('is-visible')
            }
          }
        }
      }
    },
    scrollTop(tag, duration) {
      const htmlElement = document.documentElement ? document.documentElement : document.body
      const headerHeight = document.querySelector('header').offsetHeight
      const to = this.$refs[tag].offsetTop - headerHeight

      const start = htmlElement.scrollTop
      const change = to - start
      let currentTime = 0
      const increment = 20

      const animateScroll = () => {
        currentTime += increment

        const val = this.easeInOutQuad(currentTime, start, change, duration)
        const element = document.documentElement ? document.documentElement : document.body
        element.scrollTop = val
        if (currentTime < duration) {
          setTimeout(animateScroll, increment)
        }
      }
      animateScroll()
    },
    easeInOutQuad(t, b, c, d) {
      let tValue = t
      tValue /= d / 2
      if (t < 1) return (c / 2) * tValue * tValue + b
      tValue--
      return (-c / 2) * (tValue * (tValue - 2) - 1) + b
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollTop)
    this.$bus.$on('getBlocks', data => {
      this.scrollTop(data.tag, 1000)
    })
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScrollTop)
    this.$bus.$off('getBlocks')
  }
}
</script>

<style lang="sass">
  @import '~@css/index.sass'
</style>

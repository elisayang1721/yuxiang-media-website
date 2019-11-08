<template lang="pug">
  .content-wrap.contant
    section.cBanner
      img(src="@img/contact_banner.jpg" @load="getScrollTop")
    section.cHeading
      .cn 聯絡我們
      .en
        |GET IN TOUCH
        br
        |WITH US
    section.contactWay-wrap
      ul.contact-list
        li
          .heading
            .cn 聯絡資訊
            .en HELLO！
          .infoList
            .icon-box
              .icon
                img(src="@img/contact_01.png")
            .cMethod
              div
                h1 PHONE
                h2 +886 4-2254-0759
              div
                h1 EMAIL
                h2 yuxianghr@gmail.com
        li
          .heading
            .cn 人才專區
            .en
              |WE NEED YOU！
          .infoList
            .icon-box
              .icon.getJob
                img(src="@img/contact_02.png")
            .cMethod
              a.jobLink()
                span 點我應徵
                i
</template>
<script>

export default {
  name: 'Contact',
  methods: {
    getScrollTop() {
      const scrollTop = document.documentElement.scrollTop
      const headerHeight = document.querySelector('header').offsetHeight
      const blocks = document.getElementsByClassName('cHeading')
      const blocksTop = blocks[0].offsetTop - headerHeight
      const blocksHeight = blocks[0].offsetHeight

      if (scrollTop >= blocksTop && scrollTop < (blocksTop + blocksHeight)) {
        const item = document.getElementsByClassName('contact-list')
        const itemLi = item[0].getElementsByTagName('li')

        for (let j = 0; j < itemLi.length; j++) {
          itemLi[j].classList.add('is-visible')
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollTop)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScrollTop)
  }
}
</script>

<style lang="sass">
  @import '~@css/contact.sass'
</style>

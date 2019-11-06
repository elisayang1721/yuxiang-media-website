<template lang="pug">
  header(:class="{'isOpen':isMbNavOpen}")
    .topLogo
      router-link(to="/")
        img(src="@img/logo.png")
    .hamburger-box
      .hamburger-btn(@click="navToggle('mb')")
        .hamburger-inner
    .subMenuBar(:class="{'open':isPcNavOpen}")
      .subLogo
      .navCollapse(@click="navToggle('pc')")
        svg-icon(icon-class="collapse")
      .l-header
        ul.sideMenu
          li(v-for="(nav,index) in navs" :key="index" @click="goBlocks(nav.id)")
            template(v-if="nav.link")
              router-link(:to="nav.link")
                i.icon
                  svg-icon(:icon-class="nav.icon")
                span {{nav.title}}
            template(v-else)
              i.icon
                svg-icon(:icon-class="nav.icon")
              span {{nav.title}}
</template>
<script>

export default {
  name: 'Header',
  data() {
    return {
      isPcNavOpen: false,
      isMbNavOpen: false,
      selectTag: 'company',
      navs: [
        {
          title: '關於公司',
          icon: 'company',
          id: 'company'
        },
        {
          title: '認識昱翔',
          icon: 'about',
          id: 'about'
        },
        {
          title: '服務項目',
          icon: 'service',
          id: 'service'
        },
        {
          title: '活動市集',
          icon: 'activity',
          id: 'activity'
        },
        {
          title: '聯絡我們',
          icon: 'contact',
          link: 'contact'
        }
      ]
    }
  },
  methods: {
    navToggle(cName) {
      // eslint-disable-next-line no-empty
      // eslint-disable-next-line default-case
      switch (cName) {
        case 'mb':
          this.isMbNavOpen = !this.isMbNavOpen
          break
        case 'pc':
          this.isPcNavOpen = !this.isPcNavOpen
          break
      }
    },
    scrollDown() {
      const scrollTop = document.documentElement.scrollTop
      const header = document.querySelector('header')
      const headerHeight = header.offsetHeight

      if (scrollTop >= headerHeight) {
        header.classList.add('scrollDown')
      } else {
        header.classList.remove('scrollDown')
      }
    },
    goBlocks(tag) {
      this.$bus.$emit('getBlocks', { tag })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollDown)
  }
}
</script>

<style scoped>
</style>

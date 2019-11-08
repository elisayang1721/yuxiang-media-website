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
          li(v-for="(nav,index) in navs"
            :key="index"
            :class="{enable:index === menuNowIndex}"
            @click="goBlocks(nav.id,index);navToggle('mb')")
            router-link(:to="nav.link")
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
      menuNowIndex: Number,
      navs: [
        {
          title: '關於公司',
          icon: 'company',
          id: 'company',
          link: '/'
        },
        {
          title: '認識昱翔',
          icon: 'about',
          id: 'about',
          link: '/'
        },
        {
          title: '服務項目',
          icon: 'service',
          id: 'service',
          link: '/'
        },
        {
          title: '活動市集',
          icon: 'activity',
          id: 'activity',
          link: '/'
        },
        {
          title: '聯絡我們',
          icon: 'contact',
          link: 'contact'
        }
      ]
    }
  },
  watch: {
    '$route': function () {
      this.currentPage()
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
    goBlocks(tag, index) {
      this.menuNowIndex = index
      this.$bus.$emit('getBlocks', { tag })
    },
    currentPage() {
      const page = this.$route.path
      const menu = document.getElementsByClassName('sideMenu')
      const menuLi = menu[0].getElementsByTagName('li')

      if (page === '/contact') {
        for (let i = 0; i < menuLi.length; i++) {
          menuLi[i].classList.remove('enable')
          menuLi[4].classList.add('enable')
        }
      } else {
        menuLi[4].classList.remove('enable')
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollDown)
    this.currentPage()
  }
}
</script>

<style scoped>
</style>

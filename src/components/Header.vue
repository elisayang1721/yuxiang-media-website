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
        ul.menu
          li(v-for="(nav,index) in navs" :key="index")
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
      navs: [
        {
          title: '關於公司',
          icon: 'company'
        },
        {
          title: '認識昱翔',
          icon: 'about',
        },
        {
          title: '服務項目',
          icon: 'service',
        },
        {
          title: '活動市集',
          icon: 'activity',
        },
        {
          title: '聯絡我們',
          icon: 'contact',
          link: 'contact'
        },
      ]
    }
  },
  methods: {
    navToggle(dec) {
      switch(dec) {
        case 'mb':
          this.isMbNavOpen = !this.isMbNavOpen
          break;
        case 'pc':
          this.isPcNavOpen = !this.isPcNavOpen
          break;
      }    
    }
  }
}
</script>

<style scoped>
</style>

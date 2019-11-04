<template lang="pug">
  header
    .topLogo
      router-link(to="/")
        img(src="@img/logo.png")
    .subMenuBar(:class="{'open':isNavOpen}")
      .subLogo
      .navCollapse(@click="navToggle")
        svg-icon(icon-class="collapse")
      ul.menu
        li(v-for="(nav,index) in navs" :key="index")
          template(v-if="nav.link")
            router-link(:to="nav.link")
              svg-icon(:icon-class="nav.icon")
              span {{nav.title}}
          template(v-else)
            svg-icon(:icon-class="nav.icon")
            span {{nav.title}}
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      isNavOpen: false,
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
    navToggle() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>

<style scoped>
</style>

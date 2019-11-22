<template lang="pug">
  footer
    .wrap
      .sitemap
        .logo
          img(src="@img/logo_white.png")
        ul.footerNav
          li(v-for="(nav,index) in navs" :key="index"
            @click="goBlocks(nav.id,index)")
            router-link(:to="nav.link")
              | {{nav.title}}
      .copyright © 2019 Yu Xiang Multimedia Advertising Co.,Ltd All Right Reserved
</template>
<script>

export default {
  name: 'Footer',
  data() {
    return {
      navs: [
        {
          title: '關於公司',
          id: 'company',
          link: '/'
        },
        {
          title: '認識昱翔',
          id: 'about',
          link: '/'
        },
        {
          title: '服務項目',
          id: 'service',
          link: '/'
        },
        {
          title: '活動市集',
          id: 'activity',
          link: '/'
        },
        {
          title: '聯絡我們',
          link: 'contact',
          children: [
            {
              subtitle: '人才專區 (104)',
              href: 'https://www.google.com.tw/'
            }, {
              subtitle: '公司電話、信箱',
              link: 'contact'
            }
          ]
        }
      ]
    }
  },
  methods: {
    goBlocks(tag) {
      this.$bus.$emit('getBlocks', { tag })
    }
  }
}
</script>

<style scoped>
</style>

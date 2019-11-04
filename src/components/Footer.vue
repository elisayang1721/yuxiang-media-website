<template lang="pug">
  footer
    .wrap
      .sitemap
        .logo
          img(src="@img/logo_white.png")
        ul.footerNav
          template(v-for="(nav,index) in navs")
            template(v-if="nav.children")
              li.hassub
                | {{nav.title}}
                .subMenu
                  template(v-for="(sub,index) in nav.children")
                    template(v-if="sub.href")
                      a(
                        :href="sub.href"
                        target="blank"
                      ) {{sub.subtitle}} 
                    template(v-if="sub.link")
                      router-link(:to="sub.link") {{sub.subtitle}}
            template(v-else)
              li
                | {{nav.title}}

      .copyright © 2019 Brilliant All Right Reserved
</template>
<script>

export default {
  name: 'Footer',
  data() {
    return {
      navs: [
        {
          title: '關於公司'
        },
        {
          title: '認識昱翔'
        },
        {
          title: '服務項目'
        },
        {
          title: '活動市集'
        },
        {
          title: '聯絡我們',
          children: [
            {
              subtitle: '人才專區 (104)',
              href: 'https://www.google.com.tw/'
            },{
              subtitle: '公司電話、信箱',
              link: 'contact'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>

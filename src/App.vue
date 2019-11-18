<template lang="pug">
  #app
    Header
    router-view
    Footer
</template>

<script>
import Header from '@c/Header'
import Footer from '@c/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>

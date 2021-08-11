<template lang="pug">
  v-app#home
    v-app-bar(height="50px", fixed, dark, flat).px-5
      a.d-inline-flex.align-center(href="https://github.com/shudesigns/chts-test", target="_blank") #[v-icon.mr-2 mdi-github] View on Github
    v-main
      .main-container.container.d-flex.flex-column.justify-center.align-center
        h1.main-title CHTS 前端工程師 實作考題
        h2.sub-title BY 蔡書薇
        .main-links.mt-5
          ul.list-unstyled.row.justify-center
            mixin list-item(title, url)
              li.col-auto
                v-btn(tag="a", href=url, depressed)= title
            +list-item('試題一', './employees')
            +list-item('試題二', './rwd')
            +list-item('試題三', './map')
</template>

<style lang="sass" src="@/styles/global.sass"></style>
<style lang="sass" src="@/styles/home.sass"></style>

<script>
export default {
  name: 'Home',
}
</script>

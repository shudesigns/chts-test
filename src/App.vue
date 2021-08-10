<template lang="pug">
  router-view/
</template>

<style lang="sass" src="@/styles/global.sass"></style>

<script>
export default {
  name: 'App',
  data() {
    return {
      menu: [
        {
          text: 'Index',
          url: '/'
        },
        {
          text: 'Test One',
          url: '/employees'
        }
      ]
    }
  }
}
</script>

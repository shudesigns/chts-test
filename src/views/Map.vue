<template lang="pug">
  v-app#map
    v-main
      .main-container.container
        .map-scale.d-flex.flex-column.align-center.text-center
          span.map-scale-txt Anti-trans bills by state
          ul.map-scale-values.list-unstyled
            li(v-for="index in 8", :key="index")
        svg-map(v-if="mapData != null", :map="USA", :location-class="locationClass")
</template>

<style lang="sass" src="@/styles/map.sass"></style>

<script>
import { SvgMap } from 'vue-svg-map'
import USA from '@svg-maps/usa'
import axios from 'axios'
export default {
  name: 'Map',
  data() {
    return {
      USA,
      mapData: null
    }
  },
  components: {
    'svg-map': SvgMap
  },
  methods: {
    locationClass(location) {
      let className = ''
      this.mapData.forEach(e => { 
        if ( e.state === location.name ) className = 'value-' + e.bills
      })
      return className
    }
  },
  mounted() {
    axios.get('/data/map.json').then((res) => {
      this.mapData = res.data
    })
  }
}
</script>
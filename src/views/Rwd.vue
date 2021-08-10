<template lang="pug">
  v-app#rwd
    v-app-bar(height="80", color="#000000", dark, flat)
      .main-container.container
        h1.v-app-bar-title Logo
    v-main
      .main-container.container
        custom-row
          custom-col(:size="panel1.size", :cols="panel1.cols")
            custom-panel
              template(v-slot:head)
                v-btn(width="72", height="28", color="#ffffff", depressed, @click="toggle") {{ toggleText }}
              template(v-slot:inner)
                v-row(ref="flags")
                  v-col.col(v-for="index in visibleFlags", :key="index")
                    .flag
          custom-col(:size="panel2.size", :cols="panel2.cols")
            custom-panel
          custom-col(size="md")
            custom-row
              custom-col(cols="12")
                custom-panel
              custom-col(cols="12")
                custom-panel
          custom-col(size="lg")
            custom-row
              custom-col
                custom-panel
              custom-col
                custom-panel
    
</template>

<style lang="sass" src="@/styles/rwd.sass"></style>

<script>
import CustomRow from '@/components/CustomRow.vue'
import CustomCol from '@/components/CustomCol.vue'
import CustomPanel from '@/components/CustomPanel.vue'
export default {
  name: 'Rwd',
  data() {
    return {
      panel1: {
        size: 'md',
        cols: false
      },
      panel2: {
        size: 'lg',
        cols: false
      },
      isExpand: false,
      flagsWidth: null
    }
  },
  components: {
    'custom-row': CustomRow,
    'custom-col': CustomCol,
    'custom-panel': CustomPanel
  },
  computed: {
    toggleText() {
      return this.isExpand ? '較少' : '更多'
    },
    visibleFlags() {
      if ( this.flagsWidth != null && this.flagsWidth/346 >= 2 ) {
        return Math.floor(this.flagsWidth/300)
      } else {
        return 2
      }
    }
  },
  methods: {
    toggle() {
      if ( !this.isExpand ) {
        this.panel1 = {
          size: '',
          cols: 12
        }
        this.panel2 = {
          size: '',
          cols: 12
        }
      } else {
        this.panel1 = {
          size: 'md',
          cols: false
        }
        this.panel2 = {
          size: 'lg',
          cols: false
        }
      }
      this.$nextTick(() => {
        this.flagsWidth = this.$refs.flags.clientWidth
        this.isExpand = !this.isExpand
      })
    },
    resize() {
      this.flagsWidth = this.$refs.flags.clientWidth
    }
  },
  mounted() {
    window.onresize = this.resize
  }
}
</script>
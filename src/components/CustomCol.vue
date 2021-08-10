<template lang="pug">
  v-col.custom-col(:class="size", :cols="size != '' ? 'auto' : cols")
    slot/
</template>

<script>
export default {
  name: 'CustomCol',
  props: {
    'cols': {
      type: [String, Boolean, Number],
      default: false
    },
    'size': {
      type: String,
      default: ''
    }
  }
}
</script>
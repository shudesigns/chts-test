<template lang="pug">
  .custom-panel
    .custom-panel-head
      slot(name="head")
    .custom-panel-inner(v-if="!!$slots.inner")
      slot(name="inner")
</template>
<template>
  <div>
    <home class="indexhome" />
  </div>
</template>

<script>
import home from '@/components/Main/Home.vue'
export default {
  components: {
    home,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.indexhome {
  background-color: $white;
}
</style>

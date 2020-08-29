<template>
  <div class="thanks">
    <Thanks/>
  </div>
</template>

<script>
import Thanks from '@/components/Thanks.vue'

export default {
  name: 'Top',
  components: {
    Thanks
  }
}
</script>
<style scoped lang="scss">
.thanks {
  height: 100vh;
  line-height: 1;
  background-color: #f3f3f3;
}
</style>

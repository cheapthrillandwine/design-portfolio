<template>
  <div class="questionnaire-top">
    <SurveyTop/>
  </div>
</template>

<script>
import SurveyTop from '@/components/SurveyTop.vue'

export default {
  name: 'Top',
  components: {
    SurveyTop
  }
}
</script>
<style scoped lang="scss">
.questionnaire-top {
  height: 100vh;
  line-height: 1;
  background-color: #f3f3f3;
}
</style>

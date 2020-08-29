<template>
  <div class="thanq">
    <h1>{{ msg }}</h1>
    <ul>
      <router-link to="/thanq/survey-top"><li>SurveyTop</li></router-link>
      <router-link to="/thanq/survey"><li>SurveyList</li></router-link>
      <router-link to="/thanq/thanks"><li>Thanks</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'thanq',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-item;
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>

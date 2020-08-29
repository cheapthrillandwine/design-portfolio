<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <img src='@/assets/images/top.png'>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  text-align: center;
}
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img {
    width: 50%;
    
  }  
}
</style>

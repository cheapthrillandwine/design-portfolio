<template>
  <div class="survey">
    <header class="header">
      <section class="header-left">
        <router-link to="/thanq">
          <img
            src='@/assets/logo/thanq_japan_logo.png'
            class="header-logo"
          />
        </router-link>
      </section>
      <section class="header-right">
        <a class="header-button header-signin">
          Sign in
        </a>
        <a class="header-button header-question">
          Question
        </a>
      </section>
    </header>    
    <section class="survey-banner">
      <img src='@/assets/images/banner.png'/>
    </section>
    <section class="thanks-image">
      <img src='@/assets/images/thanks.png'/>
    </section>
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
.survey {
  .header {
    width: 100%;
    height: 60px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    .header-left {
      display: flex;
      .header-logo {
        width: 100%;
        max-width: 150px;
        margin-left: 3px;
      }
    }
    .header-right {
      display: flex;
      .header-button {
        padding: 10px;
        margin-right: 10px;
        border-radius: 5px;
        font-weight: 700;
        font-size: 14px;
        cursor: pointer;
      }
      .header-signin {
        border: solid 1px #ff5050;
        color: #ff5050;
      }
      .header-question {
        background: #ff5050;
        color: #ffffff;
      }
    }
  }  
  .survey-banner {
    width: 100%;
    margin-top: 15px;
    margin-bottom: 10px;
    img {
      width: 100%;
      display: block;
      margin: 0 auto;
    }
  }
  .thanks-image {

  }
}
</style>

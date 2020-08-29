<template>
  <div class="survey">
    <section class="survey-banner">
      <img src='@/assets/images/banner.png'/>
    </section>
    <section class="survey-description">
      <div class="card-header">
        <p>ZEBRA Awareness questionnaire</p>
      </div>
      <div class="card-message">
        <p>
          Thank you for your cooperate our survey! <br />
          Please answer for some questions below.
        </p>
      </div>
    </section>
    <section class="survey-cards">
      <div class="survey-list">
        <div class="card-header">
          <p>Q1. Do you know our brand?</p>
        </div>
        <ul class="card-message">
          <li>
            <input type="radio" name="q1" value="YES" /> Absolutely, ‘YES’
          </li>
          <li>
            <input type="radio" name="q1" value="Unkown" />
            {'\bProbably, ‘YES’, but I’m not sure'}
          </li>
          <li>
            <input type="radio" name="q1" value="NO" /> I don’t know...
          </li>
        </ul>
      </div>
      <div class="survey-list">
        <div class="card-header">
          <p>Q2. Do you know other japanese stationary brand?</p>
        </div>
        <ul class="card-message">
          <li>
            <input type="radio" name="q1" value="YES" /> Absolutely, ‘YES’
          </li>
          <li>
            <input type="radio" name="q1" value="NO" /> I don’t know...
          </li>
        </ul>
      </div>
      <div class="survey-list">
        <div class="card-header">
          <p>Q3. If you answered ‘YES’ in Q2, is there a brand in below.</p>
        </div>
        <ul class="card-message">
          <li>
            <input type="radio" name="q1" value="Tombo" /> Tombo
          </li>
          <li>
            <input type="radio" name="q1" value="KOKUYO" /> KOKUYO
          </li>
          <li>
            <input type="radio" name="q1" value="PLUS" /> PLUS
          </li>
          <li>
            <input type="radio" name="q1" value="Others" /> Others
          </li>
        </ul>
      </div>
      <div class="survey-list">
        <div class="card-header">
          <p>
            Q4. If you answered ‘I don’t know...’ in Q2, do you usually use stationary?
          </p>
        </div>
        <ul class="card-message">
          <li>
            <input type="radio" name="q1" value="YES" /> ‘YES’
          </li>
          <li>
            <input type="radio" name="q1" value="NO" /> ‘NO’
          </li>
          <li>
            <input type="radio" name="q1" value="Others" /> Others
          </li>
        </ul>
      </div>
    </section>
    <section class="bottom-item">
      <div class="bottom-button cancel">
        <a class="button">Cancel</a>
      </div>
      <div class="bottom-button send">
        <a class="button">Send</a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'survey-list',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.survey {
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
  .survey-description {
    height: auto;
    padding: 10px;
    margin: 0 10px 10px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    .card-header {
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0 auto;
      padding: 0;
      color: #000000;
      p {
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .card-message {
      display: flex;
      list-style: none;
      margin: 0 auto;
      padding: 0;
      p {
        padding-top: 10px;
        word-break: break-word;
        text-decoration: none;
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        color: #000000;
      }
    }
  }
  .survey-cards {
    margin: 0 auto;
    padding: 0;
    text-align: left;
    .survey-list {
      height: auto;
      padding: 10px;
      margin: 0 10px 10px;
      list-style-type: none;
      border-radius: 10px;
      background: #ffffff;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      .card-header {
        display: flex;
        align-items: center;
        margin: 0 auto;
        padding: 0;
        color: #000000;
        p {
          display: inline-block;
          vertical-align: middle;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          .card-header-image {
            width: 30px;
            border-radius: 50%;
          }
        }
      }
      .card-message {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        li {
          padding-top: 10px;
          word-break: break-word;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          color: #000000;
        }
      }
    }
  }
  .bottom-item {
    display: flex;
    justify-content: space-evenly;
    .bottom-button {
      width: 25%;
      text-align: center;
      margin: 20px 0;
      padding: 10px;
      border-radius: 10px;
      .button {
        font-weight: 700;
        font-size: 16px;
        cursor: pointer;
      }
    }
    .cancel {
      background: #ff5050;
      color: #ffffff;
    }
    .send {
      background: #c4c4c4;
      color: #ffffff;
    }
  }
}
</style>

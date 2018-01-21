import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    message: "hello world!!"
  }
})

if (module.hot) {
  module.hot.accept();
}
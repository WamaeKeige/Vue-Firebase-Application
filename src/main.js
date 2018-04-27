// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = 'https://vue-http-c44cd.firebaseio.com/';
Vue.http.interceptors.push((request, next) =>{
  if (request.method == 'POST'){
    request.emthod = 'PUT';
  }
  next(response => {
    response.json = () => {return {messages: response.body}}
  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import vue from 'vue';

window.Vue = vue;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('query-message', require('./components/base/QueryMessage.vue').default);
Vue.component('home', require('./components/home.vue').default);
Vue.component('footer', require('./components/footer.vue').default);

Vue.component('edit_ingredient', require('./components/ingredient/edit_ingredient.vue').default);
Vue.component('insert_ingredient', require('./components/ingredient/insert_ingredient.vue').default);
Vue.component('search_ingredient', require('./components/ingredient/search_ingredient.vue').default);
Vue.component('show_ingredient', require('./components/ingredient/show_ingredient.vue').default);

Vue.component('insert_recipe', require('./components/recipe/insert_recipe').default);
Vue.component('show_recipe', require('./components/recipe/show_recipe').default);
Vue.component('edit_recipe', require('./components/recipe/edit_recipe').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});

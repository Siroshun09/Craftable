import Vue from 'vue'
import Vuex from 'vuex'
import VueMeta from 'vue-meta';

import App from './App.vue'
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {  
  faBars,
  faBlog,
  faBook,  
  faBookOpen,  
  faCode,
  faCodeBranch,
  faExclamationCircle,
  faExternalLinkAlt,
  faUserCircle,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faDiscord,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faBars,
  faBlog,
  faBook,
  faBookOpen,
  faCode,
  faCodeBranch,
  faExclamationCircle,
  faExternalLinkAlt,
  faUserCircle,
  faQuestionCircle,

  faGithub,
  faDiscord,
  faTwitter,
);

require('@/scss/index.scss');

Vue.component('font-awesome', FontAwesomeIcon);

Vue.use(Vuex)
Vue.use(VueMeta);

Vue.config.productionTip = false
Vue.config.performance = true;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
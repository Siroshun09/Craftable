import Vue from 'vue'

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

Vue.component('font-awesome', FontAwesomeIcon);

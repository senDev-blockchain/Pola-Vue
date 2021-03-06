// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2d62ed',
        secondary: '#b0bec5',
        anchor: '#8c9eff',
        buttons: '#00CCF2',
      },
    },
  },
})

export default vuetify

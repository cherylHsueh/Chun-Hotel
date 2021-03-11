import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpinner, faPhoneAlt, faMapMarkerAlt, faInstagram)

export default {
  install: (app, options) => {
    app.component('FaIcon', FontAwesomeIcon)
  }
}

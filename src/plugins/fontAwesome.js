import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner, faPhoneAlt, faMapMarkerAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faSpinner, faPhoneAlt, faMapMarkerAlt, faInstagram, faChevronLeft)

export default {
  install: (app, options) => {
    app.component('FaIcon', FontAwesomeIcon)
  }
}

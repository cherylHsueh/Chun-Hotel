import Swal from 'sweetalert2'

export default {
  install: (app, options) => {
    app.provide('Swal', Swal)
  }
}

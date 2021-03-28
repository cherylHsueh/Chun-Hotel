import { SetupCalendar, Calendar, DatePicker } from 'v-calendar'

export default {
  install: (app, options) => {
    app.use(SetupCalendar, {})
    app.component('Calendar', Calendar)
    app.component('DatePicker', DatePicker)
  }
}

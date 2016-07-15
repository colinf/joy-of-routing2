import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'
import Devtools from 'cerebral-module-devtools'
import Router from 'cerebral-module-router'
import About from './modules/About'
import App from './modules/App'
import Teams from './modules/Teams'

const controller = Controller(Model({}))

controller.addModules({
  devtools: Devtools(),

  about: About,
  app: App,
  teams: Teams,

  router: Router({
    '/': 'app.opened',
    '/about': 'about.opened',
    '/teams': {
      '': 'teams.opened',
      '/:id': 'teams.teamSelected'
    }
  })
  
})

export default controller

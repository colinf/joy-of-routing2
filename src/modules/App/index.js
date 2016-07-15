import openApp from './chains/openApp'
import redirectToPage from './chains/redirectToPage'

export default module => {

  console.log('app module')
  module.addState({
    currentPage: 'HOME'
  })

  module.addSignals({
    opened: openApp,
    pageMenuClicked: redirectToPage
  })

}

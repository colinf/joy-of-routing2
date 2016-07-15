import openPage from './chains/openPage'

export default module => {

  module.addSignals({
    opened: openPage
  })

}

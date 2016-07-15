import openPage from './chains/openPage'
import selectTeam from './chains/selectTeam'
import closeTeamDetail from './chains/closeTeamDetail'
import testData from './testData'

export default module => {

  module.addState({
    data: testData,
    selectedTeamId: null
  })

  module.addSignals({
    opened: openPage,
    teamSelected: selectTeam,
    teamClosed: closeTeamDetail
  })

}

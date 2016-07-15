import {set, copy} from 'cerebral/operators'

export default [
  set('state:app.currentPage', 'TEAMS'),
  copy('input:id', 'state:teams.selectedTeamId')
]
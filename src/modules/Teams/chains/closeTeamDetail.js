import {set} from 'cerebral/operators'
import {redirect} from 'cerebral-module-router'

export default [
  set('state:teams.selectedTeamId', null),
  redirect('/teams')
]
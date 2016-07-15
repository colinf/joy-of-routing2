
export default ({input, state, services}) => {

  const selectedTeamId = state.get('teams.selectedTeamId')
  const module = input.page.toLowerCase()
  if (module == 'teams' && selectedTeamId) {
    services.router.redirectToSignal('teams.teamSelected', {id: selectedTeamId})
  } else {
    services.router.redirectToSignal(`${module}.opened`)
  }
}

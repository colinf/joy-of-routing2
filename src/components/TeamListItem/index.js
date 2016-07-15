import React from 'react'
import {connect} from 'cerebral-view-react'
import classnames from 'classnames'

export default connect({
    selectedTeamId: 'teams.selectedTeamId',
    teams: 'teams.data'
  },
  ({teamId, selectedTeamId, teams, signals}) => {
    const team = teams[teamId]
    return (
      <div className={classnames({'team-item': true, 'pure-g': true, 'team-item-selected': selectedTeamId === teamId})}
           onClick={() => signals.teams.teamSelected({id: teamId})}
      >
        <div className="pure-u-1">
          <h5 className="team-name">{team.name}</h5>
        </div>
      </div>
    )
  }
)

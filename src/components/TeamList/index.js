import React from 'react'
import {connect} from 'cerebral-view-react'
import TeamListItem from '../TeamListItem'

export default connect({
    teams: 'teams.data'
  },
  ({teams, signals}) => {
    return (
      <div id="list" className="pure-u-1">
        {Object.keys(teams).map(teamId =>
          <TeamListItem
            key={teamId}
            teamId={teamId}
          />
        )}
      </div>
    )
  }
)

import React from 'react'
import {connect} from 'cerebral-view-react'
import classnames from 'classnames'
import TeamPage from '../TeamPage'
import AboutPage from '../AboutPage'
import Home from '../Home'

const pages = {
  ABOUT: AboutPage,
  TEAMS: TeamPage,
  HOME: Home
}

export default connect({
  currentPage: 'app.currentPage'
},
  ({currentPage, signals}) => {
    const Page = pages[currentPage]

    return (
      <div id="layout" className="content pure-g">
        <div id="nav" className="pure-u">
          <div className="nav-inner">
            <div className="pure-menu">
              <ul className="pure-menu-list">
                <li className={classnames({'pure-menu-item': true, 'pure-menu-selected': currentPage == 'TEAMS'})}>
                  <a className="pure-menu-link"
                     onClick={() => signals.app.pageMenuClicked({page: 'TEAMS'})}
                  >
                    Teams
                  </a>
                </li>
                <li className={classnames({'pure-menu-item': true, 'pure-menu-selected': currentPage == 'ABOUT'})}>
                  <a className="pure-menu-link"
                     onClick={() => signals.app.pageMenuClicked({page: 'ABOUT'})}
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Page />

      </div>
    )
  }
)

import RockPaperScissorsContext from '../../context/rockPaperScissorsContext'

import {
  NavContainer,
  NavHeading,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

const NavBar = () => (
  <RockPaperScissorsContext.Consumer>
    {value => {
      const {scoreValue} = value

      return (
        <NavContainer>
          <div>
            <NavHeading>ROCK PAPER SCISSORS</NavHeading>
          </div>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{scoreValue}</Score>
          </ScoreContainer>
        </NavContainer>
      )
    }}
  </RockPaperScissorsContext.Consumer>
)

export default NavBar

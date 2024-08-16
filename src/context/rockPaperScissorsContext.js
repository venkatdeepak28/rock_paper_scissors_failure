import React from 'react'

const RockPaperScissorsContext = React.createContext({
  userValue: '',
  randomValue: '',
  scoreValue: 0,
  result: '',
  userClicked: () => {},
  playAgain: () => {},
})

export default RockPaperScissorsContext

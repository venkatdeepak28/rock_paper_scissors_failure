import {Component} from 'react'

import {BackgroundContainer} from './styledComponents'
import RockPaperScissorsContext from './context/rockPaperScissorsContext'
import NavBar from './components/NavBar'
import GamePage from './components/GamePage'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {userValue: '', randomValue: '', scoreValue: 0, result: 'INITIAL'}

  componentDidMount() {
    this.generateRandomValue()
  }

  generateRandomValue = () => {
    const random = Math.floor(Math.random() * 3)
    let randomText
    if (random === 0) {
      randomText = 'ROCK'
    } else if (random === 1) {
      randomText = 'SCISSORS'
    } else {
      randomText = 'PAPER'
    }

    this.setState({randomValue: randomText})
  }

  checkSame = () => {
    const {userValue, randomValue} = this.state
    console.log(userValue, randomValue)
    if (userValue === 'ROCK') {
      if (randomValue === 'ROCK') {
        this.setState({result: 'DRAW'})
      } else if (randomValue === 'SCISSORS') {
        this.setState(prevScore => ({
          result: 'WON',
          scoreValue: prevScore.scoreValue + 1,
        }))
      } else {
        this.setState({result: 'LOSE', scoreValue: 0})
      }
    }

    if (userValue === 'PAPER') {
      if (randomValue === 'PAPER') {
        this.setState({result: 'DRAW'})
      } else if (randomValue === 'ROCK') {
        this.setState(prevScore => ({
          result: 'WON',
          scoreValue: prevScore.scoreValue + 1,
        }))
      } else {
        this.setState({result: 'LOSE', scoreValue: 0})
      }
    }

    if (userValue === 'SCISSORS') {
      if (randomValue === 'SCISSORS') {
        this.setState({result: 'DRAW'})
      } else if (randomValue === 'PAPER') {
        this.setState(prevScore => ({
          result: 'WON',
          scoreValue: prevScore.scoreValue + 1,
        }))
      } else {
        this.setState({result: 'LOSE', scoreValue: 0})
      }
    }
  }

  userClicked = id => {
    this.setState({userValue: id}, this.checkSame)
  }

  playAgain = () => {
    this.setState({result: 'INITIAL'}, this.generateRandomValue)
  }

  render() {
    const {scoreValue, result, userValue, randomValue} = this.state

    return (
      <RockPaperScissorsContext.Provider
        value={{
          scoreValue,
          result,
          choicesList,
          userValue,
          randomValue,
          userClicked: this.userClicked,
          playAgain: this.playAgain,
        }}
      >
        <BackgroundContainer>
          <NavBar />
          <GamePage />
        </BackgroundContainer>
      </RockPaperScissorsContext.Provider>
    )
  }
}

export default App

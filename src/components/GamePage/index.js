import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import RockPaperScissorsContext from '../../context/rockPaperScissorsContext'
import WonPage from '../WonPage'

import {
  GameContainer,
  ListElement,
  ListButtonElement,
  ImageElement,
  UpButton,
  PopUpImage,
} from './styledComponents'

const overlayStyles = {
  padding: '16px',
  width: '50vw',
  backgroundColor: 'transparent',
}

const GamePage = () => (
  <RockPaperScissorsContext.Consumer>
    {value => {
      const {result, choicesList, userClicked} = value

      const clickValue = event => {
        userClicked(event.target.alt)
      }

      if (result === 'INITIAL') {
        return (
          <>
            <GameContainer>
              {choicesList.map(eachValue => (
                <button
                  type="submit"
                  onClick={clickValue}
                  data-testid={`${eachValue.id.toLowerCase()}Button`}
                >
                  <ImageElement
                    src={eachValue.imageUrl}
                    alt={eachValue.id}
                    key={eachValue.id}
                  />
                </button>
              ))}
            </GameContainer>
            <Popup
              modal
              overlayStyle={overlayStyles}
              trigger={<UpButton type="submit">Rules</UpButton>}
            >
              {close => (
                <>
                  {/* eslint-disable-next-line */}
                  <button type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </button>
                  <PopUpImage
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </>
              )}
            </Popup>
          </>
        )
      }
      return <WonPage />
    }}
  </RockPaperScissorsContext.Consumer>
)

export default GamePage

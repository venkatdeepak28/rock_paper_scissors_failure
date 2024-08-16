import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  WonContainer,
  WonList,
  WonHeading,
  MainHeading,
  ListButtonElement,
  ImageElement,
  UpButton,
  PopUpImage,
  PlayAgainButton,
} from './styledComponents'

import RockPaperScissorsContext from '../../context/rockPaperScissorsContext'

const overlayStyles = {
  padding: '16px',
  width: '50vw',
  backgroundColor: 'transparent',
}

const WonPage = () => (
  <RockPaperScissorsContext.Consumer>
    {value => {
      const {userValue, randomValue, choicesList, result, playAgain} = value

      const youList = choicesList.filter(
        eachValue => eachValue.id === userValue,
      )
      const opponentList = choicesList.filter(
        eachValue => eachValue.id === randomValue,
      )

      const clickAgain = () => {
        playAgain()
      }

      let drawValue

      if (result === 'DRAW') {
        drawValue = 'IT IS DRAW'
      } else {
        drawValue = `YOU ${result}`
      }

      return (
        <>
          <WonContainer>
            <WonList>
              <WonHeading>You</WonHeading>
              <ListButtonElement
                type="submit"
                data-testid={`${youList[0].id.toLowerCase()}Button`}
              >
                <ImageElement src={youList[0].imageUrl} alt="your choice" />
              </ListButtonElement>
            </WonList>
            <WonList>
              <WonHeading>Opponent</WonHeading>
              <ListButtonElement
                type="submit"
                data-testid={`${opponentList[0].id.toLowerCase()}Button`}
              >
                <ImageElement
                  src={opponentList[0].imageUrl}
                  alt="opponent choice"
                />
              </ListButtonElement>
            </WonList>
          </WonContainer>
          <MainHeading>{drawValue}</MainHeading>
          <PlayAgainButton onClick={clickAgain} type="button">
            PLAY AGAIN
          </PlayAgainButton>
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
    }}
  </RockPaperScissorsContext.Consumer>
)

export default WonPage

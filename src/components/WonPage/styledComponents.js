import styled from 'styled-components'

export const UnorderedList = styled.ul`
  list-style: none;
  height: 40vh;
  width: 30vw;
  flex-wrap: wrap;
  margin-top: 5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 0;
  padding-bottom: 0;
`
export const ListElement = styled.li`
  width: 15vw;
  padding-bottom: 0;
  height: 8vh;
`

export const WonContainer = styled(UnorderedList)`
  height: 30vh;
  width: 40vw;
`
export const WonList = styled(ListElement)`
  width: 13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WonHeading = styled.h1`
  font-family: 'Roboto';
  color: white;
`
export const MainHeading = styled.p`
  margin-top: 8%;
  margin-left: 3%;
  font-family: 'Roboto';
  color: white;
`
export const PlayAgainButton = styled.button`
  margin-top: 0;
  margin-left: 4%;
  height: 7vh;
  width: 20vw;
  color: #223a5f;
  background-color: white;
  border: 0;
  font-family: 'Bree Serif';
  font-size: 20px;
  border-radius: 10px;
`

export const ListButtonElement = styled.button`
  background-color: transparent;
  border: 0;
`
export const ImageElement = styled.img`
  height: 150px;
`
export const UpButton = styled.button`
  color: #223a5f;
  background-color: white;
  margin-top: 10%;
  border: 0;
  margin-left: 85%;
  height: 5vh;
  width: 8vw;
  font-family: 'Bree Serif';
  font-size: 20px;
  border-radius: 10px;
`

export const PopUpImage = styled.img`
  height: 50vh;
`

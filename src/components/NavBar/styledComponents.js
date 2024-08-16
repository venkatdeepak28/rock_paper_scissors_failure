import styled from 'styled-components'

export const NavContainer = styled.div`
  border: 2px solid white;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavHeading = styled.h1`
  color: white;
  font-family: 'Bree Serif';
  font-weight: normal;
  width: 20vw;
  margin-left: 10%;
`
export const ScoreContainer = styled.div`
  background-color: white;
  width: 15vw;
  height: 13vh;
  margin-right: 2%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  margin-top: 10px;
  margin-bottom: 0;
  font-family: 'Bree Serif';
`
export const Score = styled.p`
  margin-top: 0;
  color: #223a5f;
  font-family: 'Roboto';
`
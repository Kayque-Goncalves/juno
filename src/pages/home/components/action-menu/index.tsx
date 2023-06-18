import {FunctionComponent, ReactElement} from "react";

import { Container, ProfileContainer, PlayingNowContainer } from './styles'
import {PlayingNow, Profile} from './components'


const ActionMenu: FunctionComponent = (): ReactElement => {
  return (
    <Container>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>

      <PlayingNowContainer>
        <PlayingNow />
      </PlayingNowContainer>
    </Container>
  )
}

export default ActionMenu

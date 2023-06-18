import React, { FunctionComponent, ReactElement } from 'react'

import {
  Container,
  LogoContainer,
  Logo,
  Header,
  Footer,
  MainMenuContainer,
  MainMenuHeader,
  MainMenuBody,
  CollectionMenuBody,
  CollectionMenuContainer,
  CollectionMenuHeader,
  ExitContainer
} from './styles'
import MenuItem from "./components/menu-item/menu-item";
import {collectionItems} from "../../../../constants/menu-items";
import {Logout} from "../../../../assets/icons";

const NavigationMenu: FunctionComponent  = (): ReactElement => {
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')

    window.location.replace('/')
  }

  return (
    <Container>
      <Header>
        <LogoContainer>
          <h1>Juno</h1>
          <Logo />
        </LogoContainer>

        <MainMenuContainer>
          <MainMenuHeader>
            <span>Menu</span>
          </MainMenuHeader>
          <MainMenuBody>
            <MenuItem title={'Home'} icon={'home'} />
            <MenuItem title={'Descubra'} icon={'explore'} />
            <MenuItem title={'Trending'} icon={'music'} />
          </MainMenuBody>
        </MainMenuContainer>

        <CollectionMenuContainer>
          <CollectionMenuHeader>
            <span>Sua coleção</span>
          </CollectionMenuHeader>
          <CollectionMenuBody>
            {collectionItems.map((item: any, index: number) => {
              return <MenuItem key={index} title={item?.title} icon={item?.icon} />
            })}
          </CollectionMenuBody>
        </CollectionMenuContainer>
      </Header>

      <Footer>
        <ExitContainer onClick={handleLogout}>
          <Logout stroke={'#D9D9D9'} />
          <p>Sair</p>
        </ExitContainer>
      </Footer>
    </Container>
  )
}

export default NavigationMenu
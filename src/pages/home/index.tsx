import React, {FunctionComponent, ReactElement, useEffect, useState} from 'react'
import NavigationMenu from './components/navigation-menu/navigation-menu';

import { Container } from './styles'
import {ActionMenu, MainContent} from "./components";
import {loginEndpoint, setClientToken} from "../../services";

const Home: FunctionComponent = (): ReactElement => {
  const [token, setToken] = useState<any>('')

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;

    window.location.hash = "";

    if (!token && !hash) {
      const test = document.createElement('a')
      test.href = loginEndpoint
      test.click()


    } else if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    <Container>
      <NavigationMenu />
      <MainContent />
      <ActionMenu />
    </Container>
  )
}

export default Home
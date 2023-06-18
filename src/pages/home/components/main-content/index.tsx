import React, {FunctionComponent, ReactElement, useEffect, useState} from "react";

import { Search } from '../../../../assets/icons'

import { Container, SearchBar, SearchBarContainer, CategoriesContainer, HomePlaylistContainer } from './styles'
import {Categories, Player} from './components'
import { Playlist } from '../../../../components'
import {getHomePlaylist} from "../../../../services/getHomePlaylist";

const MainContent: FunctionComponent = (): ReactElement => {
  const [homePlaylist, setHomePlaylist] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await getHomePlaylist()

      setHomePlaylist(data)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <SearchBarContainer>
        <Search />
        <SearchBar placeholder={'Procure uma música'} />
      </SearchBarContainer>

      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>

      <HomePlaylistContainer>
        <Playlist playlist={homePlaylist} />
      </HomePlaylistContainer>

      <Player />
    </Container>
  )
}

export default MainContent

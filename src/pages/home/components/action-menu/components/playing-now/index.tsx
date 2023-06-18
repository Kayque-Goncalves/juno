import {FunctionComponent, ReactElement} from "react";
import {Heart} from '../../../../../../assets/icons'

import { AlbumCover, InformationContainer, MusicInfo } from './styles'
import {usePlayer} from "../../../../../../contexts/player-context";


const PlayingNow: FunctionComponent = (): ReactElement => {
  const { playlist, currentTrackIndex } = usePlayer()

  const track = playlist[currentTrackIndex]?.track

  return (
    <>
      {track ? (
        <>
          <p style={{ fontSize: '16px' }}>Tocando agora</p>

          <AlbumCover>
            <img alt={track?.album.name} src={track?.album.images[1].url} />
          </AlbumCover>

          <InformationContainer>
            <MusicInfo>
              <p>{track?.name}</p>
              <span>{track?.artists.map((artist: any) => artist.name)}</span>
            </MusicInfo>

            <Heart stroke={'#D9D9D9'} />
          </InformationContainer>
        </>
      ) : null}
    </>
  )
}

export default PlayingNow
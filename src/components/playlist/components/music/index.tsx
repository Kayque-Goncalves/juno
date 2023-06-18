import {FunctionComponent, ReactElement} from "react";

import { Container, Number, Title, Left, Right, Plays, Album, Time, Cover } from "./styles";
import {usePlayer} from "../../../../contexts/player-context";

const Music: FunctionComponent<any> = ({ music, index, playlist }: any): ReactElement => {
  const { handlePlaylist, playlist: playlistState, currentTrackIndex } = usePlayer()

  const durationTime = () => {
    const minutes: any = Math.floor(music.duration_ms / 60000)
    const seconds: any = ((music.duration_ms % 60000) / 1000).toFixed(0)

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const handlePlayMusic = (event: any, track: string, index: number) => {
    event.preventDefault()

    handlePlaylist(playlist, index)

    // const music = new Audio(track)
    // music.play()

    // playTrack({ trackUri: track, token: window.localStorage.getItem("token") })
  };

  let isActive = index === currentTrackIndex
  if (!playlistState[currentTrackIndex]) isActive = false

  return (
    <Container className="teste" role="button" id="musicItem" onClick={(event: any) => handlePlayMusic(event, music.preview_url, index)}>
      <div>
        <Number isActive={isActive}>
          <p>{`${index + 1}`}</p>
        </Number>

        <Title>
          <Left>
            <Cover>
              <img alt={music.album.name} src={music.album.images[2].url} />
            </Cover>
          </Left>
          <Right isActive={isActive}>
            <p>{music.name}</p>
            <span>{music.artists.map((artist: any) => {
              return artist.name
            })}</span>
          </Right>
        </Title>

        <Plays>
          <p></p>
        </Plays>

        <Album>
          <p>{music.album.name}</p>
        </Album>
      </div>

      <div>
        <Time>
          <p>{durationTime()}</p>
        </Time>
      </div>
    </Container>
  )
}

export default Music
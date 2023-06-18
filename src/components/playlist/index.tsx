import {FunctionComponent, ReactElement} from "react";

import { PlaylistContainer, PlaylistHeader, Album } from "./styles";
import {Clock} from "../../assets/icons";
import {Music} from "./components";

interface IPlaylistProps {
  playlist: any
}

const Playlist: FunctionComponent<IPlaylistProps> = ({ playlist }: IPlaylistProps): ReactElement => {
  return (
    <>
      {playlist ? (
        <>
          <p>{playlist.name}</p>
          <PlaylistContainer>
            <PlaylistHeader>
              <div>
                <p>Titulo</p>

                <Album>
                  <p>Album</p>
                </Album>
              </div>

              <div>
                <Clock />
              </div>
            </PlaylistHeader>

            {playlist.tracks.items.map((item: any, index: number) => {
              return <Music key={item.id} playlist={playlist.tracks.items} music={item.track} index={index} />
            })}
          </PlaylistContainer>
        </>
      ) : null}
    </>
  )
}

export default Playlist
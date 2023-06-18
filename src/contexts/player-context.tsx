import { createContext, ReactNode, useContext, useState } from "react";

interface PlayerContextData {
  playlist: any[];
  currentTrackIndex: number;
  setPlayingState: (state: boolean) => void;
  handlePlay: (track: any) => void;
  isPlaying: boolean;
  isLooping: boolean;
  handlePlaylist: (list: any[], index: number) => void;
  handlePlayNext: () => void;
  togglePlay: () => void;
  handlePlayPrevious: () => void;
  clearPlayerState: () => void;
  toggleLoop: () => void;
}

interface PlayerContextProviderProps {
  children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData)

export const PlayerContextProvider = ({ children }: PlayerContextProviderProps) => {
  const [playlist, setPlaylist] = useState<any[]>([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isLooping, setIsLooping] = useState<boolean>(false)

  const handlePlay = (track: any) => {
    setPlaylist([track])
    setCurrentTrackIndex(0)
    setIsPlaying(true)
  }

  const handlePlaylist = (list: any[], index: number) => {
    setPlaylist(list)
    setCurrentTrackIndex(index)
    setIsPlaying(true)
  }

  const setPlayingState = (state: boolean) => {
    setIsPlaying(state)
  }

  const clearPlayerState = () => {
    setPlaylist([])
    setCurrentTrackIndex(0)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLoop = () => {
    setIsLooping(true)
  }

  const handlePlayNext = () => {
    const nextTrackIndex = currentTrackIndex + 1

    if (nextTrackIndex < playlist.length) {
      setCurrentTrackIndex(currentTrackIndex + 1)
    }
  }

  const handlePlayPrevious = () => {
    if (currentTrackIndex > 0) setCurrentTrackIndex(currentTrackIndex - 1)
  }

  return (
    <PlayerContext.Provider value={{
      playlist,
      currentTrackIndex,
      setPlayingState,
      handlePlay,
      isPlaying,
      isLooping,
      handlePlayNext,
      handlePlaylist,
      togglePlay,
      handlePlayPrevious,
      clearPlayerState,
      toggleLoop,
    }}>
      { children }
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  return useContext(PlayerContext)
}

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {FunctionComponent, ReactElement, useEffect, useRef, useState} from "react";
import {Pause, PlayNext, PlayPrevious, Repeat} from "../../../../../../assets/icons";

import { Container, ActionButtonsContainer, Button, SliderContainer, SliderWrapper } from "./styles";
import {usePlayer} from "../../../../../../contexts/player-context";

const Player: FunctionComponent = (): ReactElement => {
  const trackRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState<number>(0)

  const {
    isPlaying,
    handlePlayNext,
    playlist,
    currentTrackIndex,
    isLooping ,
    setPlayingState,
    handlePlayPrevious,
    toggleLoop,
    togglePlay
  } = usePlayer()

  const setupProgressListener = () => {
    // @ts-ignore
    trackRef.current.currentTime = 0

    // @ts-ignore
    trackRef.current.addEventListener('timeupdate', () => {
      // @ts-ignore
      setProgress(Math.floor(trackRef.current.currentTime))
    })
  }

  useEffect(() => {
    if (!trackRef.current) return

    isPlaying ? trackRef.current.play() : trackRef.current.pause()

    isPlaying && setupProgressListener()
  }, [isPlaying])

  const durationTime = (duration: number) => {
    const minutes: any = Math.floor(duration / 60000)
    const seconds: any = ((duration % 60000) / 1000).toFixed(0)

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const handleSeek = (amount: number) => {
    // @ts-ignore
    trackRef.current.currentTime = amount / 1000

    setProgress(Math.floor(amount / 1000))
  }

  const handleTrackEnded = () => {
    handlePlayNext()
  }

  const track = playlist[currentTrackIndex]?.track.preview_url

  return (
    <>
      {track ? (
        <Container>
          <ActionButtonsContainer>
            <Button style={{ transform: 'rotate(-180deg)' }} onClick={handlePlayPrevious}>
              <PlayPrevious />
            </Button>
            <Button onClick={togglePlay}>
              <Pause stroke={isPlaying ? '#486ADE' : '#D9D9D9'} />
            </Button>
            <Button onClick={handlePlayNext}>
              <PlayNext />
            </Button>
            <Button onClick={toggleLoop}>
              <Repeat />
            </Button>
          </ActionButtonsContainer>

          <SliderContainer>
            <span>{isPlaying ? durationTime((progress + 1) * 1000) : durationTime(0)}</span>
            <SliderWrapper>
              <Slider
                max={30000}
                value={ isPlaying ? (progress + 1) * 1000 : 0 }
                onChange={ (value: any) => handleSeek(value) }
                trackStyle={{ backgroundColor: '#486ADE' }}
                railStyle={{ backgroundColor: '#929292' }}
                handleStyle={{ borderColor: '#D9D9D9', borderWidth: 4 }} />
            </SliderWrapper>
            <span>{durationTime(30000)}</span>
          </SliderContainer>

          {track ? (
            <audio
              src={ track }
              ref={ trackRef }
              autoPlay
              loop={ isLooping }
              onLoadedMetadata={ setupProgressListener }
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
              onEnded={ handleTrackEnded }
            />
          ) : null}
        </Container>
      ) : null}
    </>
  )
}

export default Player

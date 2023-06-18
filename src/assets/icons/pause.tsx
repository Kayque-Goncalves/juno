import { FunctionComponent, ReactElement } from 'react'

interface IPauseProps {
  stroke: string
}

const Pause: FunctionComponent<IPauseProps> = ({ stroke }: IPauseProps): ReactElement => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 6C15 6 15.5 9 15.5 12C15.5 15 15 18 15 18M9 6C9 6 8.5 9 8.5 12C8.5 15 9 18 9 18" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Pause
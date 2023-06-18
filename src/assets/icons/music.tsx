import { FunctionComponent, ReactElement } from 'react'

interface IMusicProps {
  stroke?: string
}

const Music: FunctionComponent<IMusicProps> = ({ stroke }: IMusicProps): ReactElement => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 17.5C9 17.5 8.5 13.5 8.5 11C8.5 8.5 9 6 9 6C9 6 11 5 14.5 4C18 3 20 3 20 3C20 3 19.5 6.5 19.5 9C19.5 11.5 20 16.5 20 16.5M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5ZM20 16.5C20 17.8807 18.8807 19 17.5 19C16.1193 19 15 17.8807 15 16.5C15 15.1193 16.1193 14 17.5 14C18.8807 14 20 15.1193 20 16.5Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Music
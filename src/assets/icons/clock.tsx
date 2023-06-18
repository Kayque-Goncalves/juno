import { FunctionComponent, ReactElement } from 'react'

const Clock: FunctionComponent = (): ReactElement => {
  return (
    <svg width="12" height="12" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2.66667V4L4.66667 4.66667M7 4C7 5.65685 5.65685 7 4 7C2.34315 7 1 5.65685 1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4Z" stroke="#6A6A6A" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Clock
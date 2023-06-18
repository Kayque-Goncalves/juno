const pxToNumber = (px: number) => {
  return parseFloat(`${px}`.replace('px', ''))
}

export const convertPxToVw = (px: number) => {
  const value = document ? document.documentElement.clientWidth : 320

  return `${(pxToNumber(px) * 100) / value}vw`
}
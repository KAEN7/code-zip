import { css } from 'styled-components'

// 기기 사이즈
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

// 미디어 스타일
const breakpoint = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

// color
const color = {
  white: '#F8F8F8',
  black: '#141414',
  gray: '#D1D1D1',
  point: '#5754CE',
  subPoint: '#E680B0',
}

// flex 디자인
const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const flexCenterDir = css`
  ${flexCenter}

  flex-direction: column;
`

const pageSetting = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  box-sizing: border-box;
  padding: 3rem;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

const mobileWidth = css`
  @media screen and ${breakpoint.mobileL} {
    width: 25.75rem !important;
  }
`

export const theme = {
  size,
  breakpoint,
  color,
  flexCenter,
  flexCenterDir,
  pageSetting,
  mobileWidth,
}

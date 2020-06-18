export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  tabletL: "1024px",
  laptop: "1336px",
  laptopL: "1600px",
  desktop: "1920px",
  desktopL: "2560px",
}

const device = {
  mobileS: `screen and (min-width: ${size.mobileS})`,
  mobileM: `screen and (min-width: ${size.mobileM})`,
  mobileL: `screen and (min-width: ${size.mobileL})`,
  tablet: `screen and (min-width: ${size.tablet})`,
  tabletL: `screen and (min-width: ${size.tabletL})`,
  laptop: `screen and (min-width: ${size.laptop})`,
  laptopL: `screen and (min-width: ${size.laptopL})`,
  desktop: `screen and (min-width: ${size.desktop})`,
  desktopL: `screen and (min-width: ${size.desktopL})`,
}

export default device

export const colors = {
  primary: "#00A9B4",
  dark: "#181818",
  darkSideBar: "#1B1B1B",
  light: "#fff",
  lightDarker: "#8A8A8F",
};

export const fontSizeBase = 16;

export const gradient = {
  slider: "linear-gradient(180deg, #004D5E 0%, #007691 100%);",
};

const size = {
  tablet: 576,
  screen: 768,
};
export const device = {
  mobile: `(max-width: ${size.tablet - 1}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  screen: `(min-width: ${size.screen}px)`,
};
/* 
  how to use:
  @media ${device.mobile} {
    max-width: 200px;
  }
*/

export const gap = {
  normal: "16px",
};

export const layout = {
  sideBarWidth: "80px",
};

export const mixins = {
  resetUl: "padding-left: unset; margin-bottom: unset; list-style-type: none;",
  clearFix: `
    &::after {
      display: block;
      content: '';
      clear: both;
    }
  `,
  center: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

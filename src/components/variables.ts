import { generate } from '@ant-design/colors'

const palette = (color: string) => {
  // 色版生成工具 ：https://ant.design/docs/spec/colors-cn#%E8%89%B2%E6%9D%BF%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7
  // primary 顏色參照：https://ant.design/theme-editor-cn
  const colors = generate(color)
  return {
    // base: colors[5], itself, same as color
    hover: colors[4],
    active: colors[6],
  }
}
export const colors = {
  primary: '#00A9B4',
  primaryHover: '#1FBCC2',
  primaryActive: '#00818F',
  primaryLight: '#E3F6FA',
  primaryLightOn: '#6EE8F0',
  primaryLightBorder: '#CCEEF0',
  primaryHeader: '#00667C',
  reset: '#F5A60B',
  resetHover: palette('#F5A60B').hover,
  resetActive: palette('#F5A60B').active,
  danger: '#EB5757',
  dangerLight: '#FFE3E3',
  dangerHover: palette('#EB5757').hover,
  dangerActive: palette('#EB5757').active,
  white: '#FFFFFF',
  black: '#333333',
  borderBase: '#D9D9D9',
  disabled: 'rgba(0, 0, 0, 0.25)',
  disabledBgc: 'rgba(0, 0, 0, 0.04)',
}

export const fontSizeBase = 16

export const gradient = {
  slider: 'linear-gradient(180deg, #004D5E 0%, #007691 100%);',
}

const size = {
  tablet: 576,
  screen: 768,
}
export const device = {
  mobile: `(max-width: ${size.tablet - 1}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  screen: `(min-width: ${size.screen}px)`,
}
/* 
  how to use:
  @media ${device.mobile} {
    max-width: 200px;
  }
*/

export const gap = {
  normal: '16px',
}

export const layout = {
  headerHeight: '42px',
  headerPaddingLeft: '35px',
  headerPaddingRight: '24px',
  sideBarWidth: '200px',
  sideBarTriggerHeight: '48px',
  sideBarMinHeight: '700px',
  pageContentMinHeight: '550px',
}

export const mixins = {
  resetUl: 'padding-left: unset; margin-bottom: unset; list-style-type: none;',
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
}

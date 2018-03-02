// Constants
const backgroundColor = '#2A2739'
const foregroundColor = '#8A86A1'

// Colors
const RED = '#DF5D46'
const GREEN = '#7EC699'
const CYAN = '#67CDCC'
const YELLOW = '#F8C555'
const BLUE = '#4499CD'
const MAGENTA = '#B35D8D'
const LIGHT_GRAY = '#8A86A1'
const DARK_GRAY = '#999999'

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: LIGHT_GRAY,
  lightBlack: DARK_GRAY,
  lightRed: RED,
  lightGreen: GREEN,
  lightYellow: YELLOW,
  lightBlue: BLUE,
  lightMagenta: MAGENTA,
  lightCyan: CYAN,
  colorCubes: '#8A86A1',
  grayscale: foregroundColor
}

// Additional Constants
const cursorColor = YELLOW
const borderColor = backgroundColor

exports.decorateConfig = config => {
  let windowControlsCSS

  if (config.showWindowControls) {
    windowControlsCSS = '.list_2902 { margin-left: 0 !important; }'
  }

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${MAGENTA} !important;
        border-color: ${MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        color: #8A86A1;
        background: ${backgroundColor} !important;
        border-bottom: 1px solid #322F45;
      }
      .splitpane_divider {
        background-color: #322F45 !important;
      }
      .tab_tab {
        border: 0;
        color: #8A86A1;
        background-color: #332F44;
      }
      .tab_tab:hover {
        color: #8A86A1;
        background-color: #332F44;
      }
      .tab_textActive {
        background-color: #8A86A1;
      }
      ${windowControlsCSS}
    `
  })
}

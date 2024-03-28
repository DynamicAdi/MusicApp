const tintColorLight = '#000';
const tintColorDark = '#fff';

const THEME =  {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    Ui: "#f1f1f1",
    grey: 'grey',
    dak_ui: "#f7f7f7",
  },
  dark: {
    text: '#fff',
    background: '#0b062b',
    tint: tintColorDark,
    Ui: "#99ccff30",
    grey: '#ffffff90',
    dak_ui: "#121330",
  },
};

const COLORS = {
  primary: "#8F00FF",
  secondary: "#FF8F00",
  accent: "#3a86ff",
  LightUi_Deep: "#D9D9D9",
  White: "#FFFFFF",
  Black: "#252525",
  danger: "#DF2A2A",
  success: "#00B761",
  LightUi: "#f1f1f1",
  // Cells

  red_bg: "#F85A5A40",
  red_text: "#b30000",
  // red_text: "white",
  green_bg: "#12E26540",
  green_text: "#00BB63",
  purple_bg: "#8F00FF40",


  // Gradient
  purple_gradient: {
    color_1: "#8F00FF",
    color_2: "#e30b3e"
  }
}
const SIZES = { 
  small: 14,
  medium: 16,
  large: 18,
  extraLarge: 20,
  xl: 24,
  xxl: 28,
  xxxl: 32
}
 

export {
  THEME,
  COLORS,
  SIZES
}
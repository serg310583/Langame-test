const HOVER_INPUT_COLOR = '#00AE31';
const MAIN_COLOR = '#efefef';
const ERROR_COLOR = '#DC0000';

export const customTheme = {
  token: {
    colorPrimary: MAIN_COLOR,
    colorBorder: '#514c4c',
    colorError: ERROR_COLOR,
    errorFontSize: 9,
    colorIcon: '#000000', // глаз в полях пароля
    borderRadius: 9,
  },
  components: {
    // Layout: layoutStyle,
    Button: {},
    // Segmented: segmentedStyle,
    // Typography: typographyStyle,
    // Modal: modalStyle,
    // Form: formStyle
    // InputNumber: inputNumberStyle,
    // Radio: radioStyle,
    Select: {
      colorBorder: '#514c4c',
      activeBg: '#EFEFEF',
      activeBorderColor: '#000000',
      activeShadow: '0 0 0 2px #000000',
      errorActiveShadow: '0 0 0 2px #DC0000',
      hoverBorderColor: '#000000',
      inputFontSize: 17,
      inputFontWeight: 900,
      paddingInline: 19,
      lineWidth: 2,
    },
    Input: {
      inputFontSize: 17,
      colorBorder: '#514c4c',
      paddingBlock: 20,
      lineWidth: 2,
      activeBg: '#EFEFEF',
      activeBorderColor: '#000000',
      activeShadow: '0 0 0 2px #000000',
      errorActiveShadow: '0 0 0 2px #DC0000',
      hoverBorderColor: '#000000',
      inputFontWeight: '700',
      paddingInline: 19,
    },
    DatePicker: {
      colorBorder: '#514c4c',
      paddingBlock: 20,
      lineWidth: 2,
      activeBg: '#EFEFEF',
      activeBorderColor: '#000000',
      activeShadow: '0 0 0 2px #000000',
      errorActiveShadow: '0 0 0 2px #DC0000',
      hoverBorderColor: '#000000',
      inputFontSize: 17,
      inputFontWeight: 900,
      paddingInline: 19,
    },

    Switch: {
      colorPrimary: '#c4baba',
      handleBg: '#DC0000', //цвет переключателя
      // colorTextLightSolid: '#00AE31',//цвет индикаторов
      handleSize: 23,
      trackHeight: 34,
      trackMinWidth: 61,
      trackPadding: 5,
      fontSize: 25,
    },
    Message: {
      colorBgDefault: '#FFFAE6',
      colorText: '#ffffff',
      borderRadius: '4px',
      padding: '2px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    },
  },
};

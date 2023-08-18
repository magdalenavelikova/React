export const generateThemeChanges = (baseSpacing = 24, scale = 6) => {
  // 24
  const baseFontSize = baseSpacing * 0.75; // 18
  const fontScale = baseSpacing / scale; // 4

  const fontSizing = (factor) => ({
    size: `${baseFontSize + factor * fontScale}px`,
    height: `${baseSpacing + factor * fontScale}px`,
    // maxWidth chosen to be ~50 characters wide
    // see: https://ux.stackexchange.com/a/34125
    maxWidth: `${baseSpacing * (baseFontSize + factor * fontScale)}px`,
  });

  const themeChanges = {
    global: {
      focus: {
        outline: { color: 'focus', size: '5px' },
        border: { color: undefined, style: undefined },
        shadow: { color: undefined, size: undefined },
      },
      colors: {
        brand: '#222222',
        control: {
          dark: '#FFED00',
          light: '#000000',
        },
        focus: '#5ec660',
        'accent-1': '#367bd5',
        'accent-2': '#5ec660',
        'accent-3': '#d4293d',
        'accent-4': '#9C27B0',
        'neutral-1': '#795548',
        'neutral-2': '#CDDC39',
        'neutral-3': '#607D8B',
        'neutral-4': '#9cb6d7',
      },
    },
    anchor: {
      color: {
        dark: '#FFED00',
        light: '#000000',
      },
    },

    nameValueList: {
      gap: { column: 'xsmall', row: 'xsmall' },
      pair: {
        column: {
          gap: 'xsmall',
        },
      },
    },
    accordion: {
      border: undefined,
      panel: {
        border: {
          side: 'top',
        },
      },
    },

    heading: {
      level: {
        1: {
          small: { ...fontSizing(2) },
          medium: { ...fontSizing(4) },
          large: { ...fontSizing(8) },
          xlarge: { ...fontSizing(12) },
        },
        2: {
          small: { ...fontSizing(1) },
          medium: { ...fontSizing(2) },
          large: { ...fontSizing(4) },
          xlarge: { ...fontSizing(6) },
        },
        3: {
          small: { ...fontSizing(0) },
          medium: { ...fontSizing(0) },
          large: { ...fontSizing(0) },
          xlarge: { ...fontSizing(0) },
        },
        4: {
          small: { ...fontSizing(-0.5) },
          medium: { ...fontSizing(-0.5) },
          large: { ...fontSizing(-0.5) },
          xlarge: { ...fontSizing(-0.5) },
        },
        5: {
          small: { ...fontSizing(-1) },
          medium: { ...fontSizing(-1) },
          large: { ...fontSizing(-1) },
          xlarge: { ...fontSizing(-1) },
        },
        6: {
          small: { ...fontSizing(-2) },
          medium: { ...fontSizing(-2) },
          large: { ...fontSizing(-2) },
          xlarge: { ...fontSizing(-2) },
        },
      },
    },
  };

  return themeChanges;
};

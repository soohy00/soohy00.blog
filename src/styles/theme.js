export const lightTheme = {
  colors: {
    primary: '#0066CC',
    secondary: '#666666',
    bodyBackground: '#FFFFFF',
    text: '#333333',
    textLight: '#666666',
    border: '#EEEEEE',
    codeBackground: '#F5F5F5',
    error: '#FF0000',
    success: '#00CC00',
    warning: '#FFA500',
  },
  sizes: {
    maxWidth: '1200px',
    headerHeight: '60px',
    footerHeight: '100px',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.1)',
    large: '0 8px 16px rgba(0,0,0,0.1)',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    wide: '1200px',
  },
}

export const darkTheme = {
  colors: {
    primary: '#66B2FF',
    secondary: '#999999',
    bodyBackground: '#1A1A1A',
    text: '#FFFFFF',
    textLight: '#CCCCCC',
    border: '#333333',
    codeBackground: '#2D2D2D',
    error: '#FF6666',
    success: '#66FF66',
    warning: '#FFB366',
  },
  // 나머지 설정은 lightTheme과 동일
  ...lightTheme,
} 
const theme = {
  colors: {
    bodyBg: '#fafafa',
    copy: '#505050',
    brand: '#0066b3',
    title: '#0066b3',
    header: '#fff',
    white: '#fff',
  },
  fonts: {
    baseSize: '16px',
    fontFamily: 'Poppins, sans-serif',
  },
  logo: {
    fill: '#0066b3',
    alt: '#ed151f',
  },
  loader: {
    dots: '#ccc',
  },
  button: {
    bg: '#0066b3',
    text: '#fff',
    hover: '#003f6f',
    active: '#003f6f',
  },
  input: {
    bg: '#fff',
    border: '#eee',
    hover: '#999',
    focus: '#0066b3',
  },
  links: {
    link: '#505050',
    hover: '#0066b3',
    active: '#003f6f',
  },
  return: {
    bg: '#888',
    text: '#fff',
    hover: '#505050',
  },
  header: {
    height: 25, // add 'px' at component level
  },
  hr: {
    borderColor: '#ccc',
  },
  itemList: {
    maxWidth: '1300px',
  },
  thumb: {
    transition: {
      duration: '0.2s',
    },
  },
  modal: {
    bg: 'rgba(0,0,0,0.75)',
  },
  transition: {
    duration: '0.6s',
    durationFast: '0.3s',
    easeOut: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeInOut: 'cubic-bezier(1, 0, 0, 1)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  zIndex: {
    fixed: 100,
    overlay: 101,
  },
};

export default theme;

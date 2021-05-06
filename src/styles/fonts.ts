import { css } from 'styled-components'

export const fonts = css`
  /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local('Roboto Light'), local('Roboto-Light'),
      url(${require('../assets/fonts/roboto-v27-latin-300.woff2')}) format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('../assets/fonts/roboto-v27-latin-300.woff')}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'),
      url(${require('../assets/fonts/roboto-v27-latin-regular.woff2')}) format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('../assets/fonts/roboto-v27-latin-regular.woff')}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'),
      url(${require('../assets/fonts/roboto-v27-latin-700.woff2')}) format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url(${require('../assets/fonts/roboto-v27-latin-700.woff')}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`

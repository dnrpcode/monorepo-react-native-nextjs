import styled, { css } from 'styled-components'
// import styledNative from 'styled-components/native'


export const Button = styled.button<{ $primary?: boolean; }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: '#BF4F74';
  margin: 0 1em;
  padding: 0.25em 1em;


  ${props =>
    props.$primary &&
    css`
      background: '#BF4F74';
      color: white;
    `};
`


// export const ButtonNative = styledNative.View`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid #BF4F74;
//   color: '#BF4F74';
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `
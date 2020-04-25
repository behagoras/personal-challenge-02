/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

export const card = (props) => css`
  background-color: ${props.theme.colors.ui};
  box-shadow: 0 0 16px -8px rgba(0,0,0,0.25);
  border-radius: 5px;
`;

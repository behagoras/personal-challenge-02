/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Properties = styled.ul`
  padding:0;
`;

export const Property = styled.li`
  list-style-type:none;
  margin-left:0;
  margin-bottom:10px;
  b {
    color: ${(props) => props.theme.colors.text};
  }
  span {
    color: ${(props) => props.theme.colors.textSoft};
  }
`;

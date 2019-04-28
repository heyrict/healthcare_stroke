import styled from '@emotion/styled';
import {
  space,
  width,
  minWidth,
  fontSize,
  color,
  alignItems,
  justifyContent,
  flex,
  flexWrap,
  flexDirection,
} from 'styled-system';

export const Box = styled.div`
  margin-top: 1em;
  width: 100%;
  ${space}
  ${width}
  ${minWidth}
  ${fontSize}
  ${color}
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 1em;
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${flex}
  ${flexWrap}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
`;

export const Button = styled.button`
  ${space}
  ${width}
  ${minWidth}
  ${fontSize}
  ${color}
`;

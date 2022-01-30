import { css } from 'styled-components';

// 白、黒などの基本色はここに定義する
const colors = {
  white: '#fff',
  black: '#2b2b2b',
  gray: '#aaa',
  lightgray: '#edf2f7',
  primary: '#ed64a6',
};

// <a> タグなどのHTML属性のカラーはここに定義する
const attributeColors = {
  link: '#4299e1',
};

// ラウンジ、スクエア等のテーマカラーはここに定義する
const themeColors = {
  default: colors.white,
  lounge: '#68d391',
  square: '#FFD43A',
  knowledge: '#f09736',
  working: '#53c4f0',
};

// Media Query のサイズはここで定義する
const mediaQuerySize = {
  pc: '1200px',
  tablet: '840px',
  sp: '420px',
};

const blockContainer = css`
  width: 1200px;
  padding: 8px;
  margin: 0 auto;
  @media screen and (max-width: ${mediaQuerySize.pc}) {
    width: auto;
  }
  @media screen and (max-width: ${mediaQuerySize.tablet}) {
    max-width: 100%;
    height: auto;
    padding: 4px 8px;
  }
`;

const hoverWhite = css`
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const hoverGray = css`
  &:hover {
    background-color: rgba(150, 150, 150, 0.1);
  }
`;

const blockHeaderUnder = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${mediaQuerySize.tablet}) {
    height: auto;
  }
`;

const buttonHeader = css`
  display: inline-block;
  width: 100%;
  margin: 0;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  line-height: 32px;
  color: ${colors.white};
  text-align: center;
  @media screen and (max-width: ${mediaQuerySize.sp}) {
    padding: 0;
    font-size: 12px;
  }
`;

const buttonText = css`
  display: inline-block;
  width: 100%;
  margin: 0;
  font-size: 13px;
  color: ${colors.black};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  &:hover {
    opacity: 0.3;
  }
  @media screen and (max-width: ${mediaQuerySize.sp}) {
    padding: 0;
    font-size: 12px;
  }
`;

const buttonBase = css`
  display: block;
  padding: 8px;
  margin: 0;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background: ${colors.primary};
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 0 ${colors.gray};
  &:hover {
    opacity: 0.3;
  }
`;

// Property以下に定義する
const mixins = {
  colors,
  attributeColors,
  themeColors,
  mediaQuerySize,
  hoverWhite,
  hoverGray,
  blockContainer,
  blockHeaderUnder,
  buttonHeader,
  buttonBase,
  buttonText,
};

export default mixins;

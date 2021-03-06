import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {colors} from '../core';

const ButtonWrapper = styled(TouchableOpacity)(
  ({
    bg = colors.lavender,
    b = `1px solid ${bg}`,
    c = colors.text,
    d = 'flex',
    posi,
    p = '16px',
    m,
    w = '120px',
    minW,
    maxW,
    h = '32px',
    minH,
    maxH,
    f,
    fDir = 'column',
    fJustify = 'center',
    fAlign = 'center',
    r = '4px',
    top,
    left,
    bottom,
    right,
    fontFam,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    lineHeight,
    textDecor,
    textOverflow,
    overflow,
    overflowWrap,
  }) => ({
    backgroundColor: bg,
    border: b,
    color: c,
    display: d,
    position: posi,
    margin: m,
    padding: p,
    width: w === true ? '100%' : w,
    minWidth: minW,
    maxWidth: maxW,
    height: h,
    minHeight: minH,
    maxHeight: maxH,
    flex: f,
    flexDirection: fDir,
    justifyContent: fJustify,
    alignItems: fAlign,
    borderRadius: r,
    top,
    left,
    bottom,
    right,
    fontFamily: fontFam,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    lineHeight,
    textDecoration: textDecor,
    textOverflow,
    overflow,
    overflowWrap,
  }),
);

const Button = styled(ButtonWrapper)({});

const OutlineButton = styled(ButtonWrapper)(
  ({
    bg = 'transparent',
    c = colors.lavender,
    b = `1px solid ${colors.lavender}`,
    bStyle,
    bColor,
    bBottomCol,
    bBottomW,
    bLeftCol,
    bLeftW,
    bRightCol,
    bRightW,
    bTopCol,
    bTopW,
  }) => ({
    background: bg,
    color: c,
    border: b,
    borderStyle: bStyle,
    borderColor: bColor,
    borderBottomColor: bBottomCol,
    borderBottomWidth: bBottomW,
    borderLeftColor: bLeftCol,
    borderLeftWidth: bLeftW,
    borderRightColor: bRightCol,
    borderRightWidth: bRightW,
    borderTopColor: bTopCol,
    borderTopWidth: bTopW,
  }),
);

export {Button, OutlineButton};

import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components';
import Font from './font';
import {colors, baseWeight, baseSize, shadows} from '../core';
import {Box} from '../core';

const WInput = styled(TextInput)(
  ({
    bg = colors.white,
    c = colors.text,
    d = 'flex',
    posi,
    p = '10px 12px',
    m,
    w = true,
    minW,
    maxW,
    h = '40px',
    minH,
    maxH,
    f,
    fGrow,
    fBasis,
    fShrink,
    fDir = 'column',
    fJustify = 'center',
    fAlign = 'center',
    top,
    left,
    bottom,
    right,
    fontSize,
    weight = baseWeight.regular,
    letterSpacing,
    textAlign,
    lineHeight,
    textOverflow,
    b = `1px solid ${colors.disabled}`,
    bColor = colors.disabled,
    bStyle,
    r = '4px',
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
    flexGrow: fGrow,
    flexBasis: fBasis,
    flexShrink: fShrink,
    flexDirection: fDir,
    justifyContent: fJustify,
    alignItems: fAlign,
    top,
    left,
    bottom,
    right,
    fontFamily: `Nunito-${weight}`,
    fontSize,
    letterSpacing,
    textAlign,
    lineHeight,
    textOverflow,
    border: b,
    borderStyle: bStyle,
    borderColor: bColor,
    borderRadius: r,
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

const Input = (props) => {
  const {error} = props;

  return (
    <>
      <WInput bColor={error ? colors.red : colors.disabled} {...props} />
      <Box h="20px">
        {error !== '' && (
          <Font m="0" fontSize={baseSize.sm} c={colors.red}>
            {error}
          </Font>
        )}
      </Box>
    </>
  );
};

export {Input};

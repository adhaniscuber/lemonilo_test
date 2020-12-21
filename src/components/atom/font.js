import {Text} from 'react-native';
import styled from 'styled-components';
import {colors, baseSize, baseWeight} from '../core';

const Font = styled(Text)(
  ({
    f,
    fJustify,
    fAlign,
    fAlignSelf,
    c = colors.text,
    p,
    m,
    fontSize = baseSize.md,
    letterSpacing,
    textAlign,
    lineHeight,
    textDecor,
    textOverflow,
    posi = 'relative',
    weight = baseWeight.regular,
  }) => ({
    flex: f,
    justifyContent: fJustify,
    alignSelf: fAlignSelf,
    alignItems: fAlign,
    color: c,
    margin: m,
    padding: p,
    fontSize,
    position: posi,
    letterSpacing,
    textAlign,
    lineHeight,
    textDecoration: textDecor,
    textOverflow,
    fontFamily: `Nunito-${weight}`,
  }),
);

export default Font;

import styled from 'styled-components/native';
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const baseBox = ({
  bg,
  c,
  d = 'flex',
  posi,
  p,
  m,
  w,
  minW,
  maxW,
  h,
  minH,
  maxH,
  f,
  fGrow,
  fBasis,
  fShrink,
  fDir = 'column',
  fJustify,
  fAlign,
  fJustifySelf,
  fAlignSelf,
  b,
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
  r,
  top,
  left,
  bottom,
  right,
  overflow,
  z,
}) => {
  const styles = {
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
    justifySelf: fJustifySelf,
    alignSelf: fAlignSelf,
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
    top,
    left,
    bottom,
    right,
    overflow,
    zIndex: z,
  };
  return styles;
};

const Box = styled(View)((css) => ({
  ...baseBox(css),
}));

const BoxTouch = styled(TouchableOpacity)((css) => ({
  ...baseBox(css),
}));

const BoxScroll = styled(ScrollView)((css) => ({
  ...baseBox(css),
}));

const BoxFlatlist = styled(FlatList)((css) => ({
  ...baseBox(css),
}));

const BoxSaveArea = styled(SafeAreaView)((css) => ({
  ...baseBox(css),
}));

const Images = styled(Image)((
  // eslint-disable-next-line no-empty-pattern
  {
    f,
    posi,
    p,
    m,
    w,
    minW,
    maxW,
    h = '100%',
    minH,
    maxH,
    r,
    top,
    left,
    bottom,
    right,
    resizeMode,
    aspectRatio,
  },
) => ({
  flex: f,
  position: posi,
  margin: m,
  padding: p,
  width: w,
  minWidth: minW,
  maxWidth: maxW,
  height: h,
  minHeight: minH,
  maxHeight: maxH,
  borderRadius: r,
  top,
  left,
  bottom,
  right,
  resizeMode,
  aspectRatio,
}));

export * from './colors';
export * from './shadows';
export * from './baseText';
export {Box, BoxTouch, BoxScroll, BoxFlatlist, BoxSaveArea, Images};

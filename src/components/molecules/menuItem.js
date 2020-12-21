import React from 'react';
import Font from '../atom/font';
import {baseSize, Box, BoxTouch, colors, Images} from '../core';
import box from '../../assets/menu/box.png';

const MenuItem = ({item, image}) => (
  <BoxTouch p="8px 16px" fAlign="center" fJustify="center">
    <Box
      bg={colors.shadeGreen}
      w="64px"
      h="64px"
      r="64px"
      fJustify="center"
      fAlign="center">
      <Font fontSize={baseSize.h1}>{item.name.split('')[0]}</Font>
    </Box>
    <Font m="8px 0 0 0">{item.name}</Font>
  </BoxTouch>
);

export default MenuItem;

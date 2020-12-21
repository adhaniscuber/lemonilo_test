import React from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import {Input} from './components/atom';
import Font from './components/atom/font';

import {
  baseSize,
  Box,
  BoxFlatlist,
  BoxSaveArea,
  BoxScroll,
  colors,
  Images,
} from './components/core';
import MenuItem from './components/molecules/menuItem';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const dataMenu = [
  {
    name: 'Food',
    image: 'food.png',
  },
  {
    name: 'Mart',
    image: 'mart.png',
  },
  {
    name: 'Express',
    image: 'box.png',
  },
  {
    name: 'Pulsa/Token',
    image: 'pulsa.png',
  },
  {
    name: 'Car',
    image: 'car.png',
  },
  {
    name: 'Bike',
    image: 'bike.png',
  },
  {
    name: 'Health',
    image: 'health.png',
  },
  {
    name: 'More',
    image: 'food.png',
  },
];

export const dataNews = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/lceHsT6l.jpg',
  },
];

const App = () => {
  const [indexSlide, setSlide] = React.useState(1);

  return (
    <BoxSaveArea w>
      <Box w p="24px 16px" bg={colors.shadeGreen}>
        <Input placeholder="Offer, food, and places to go" />
        <Font fontSize={baseSize.h1}>#Teman2020 seperti apa kamu?</Font>
        <Font>lihat laporanmu sekarang</Font>
        <Images
          style={styles.tilt}
          w="80px"
          h="80px"
          posi="absolute"
          bottom="-20px"
          right="16px"
          r="100px"
          resizeMode="contain"
          source={require('./assets/grab-logo.png')}
        />
      </Box>
      <Box fDir="row">
        <Box
          f={1}
          style={styles.borderRight}
          p="16px"
          fDir="row"
          fAlign="center">
          <Images
            w="20px"
            h="20px"
            r="100px"
            resizeMode="contain"
            source={require('./assets/ovo-icon.png')}
          />
          <Font c={colors.grey} m="0 0 0 8px" fontSize={baseSize.caption}>
            Rp. <Font>12.000</Font>
          </Font>
        </Box>
        <Box f={1} p="16px">
          <Font>12344 Points</Font>
        </Box>
      </Box>
      <Box w h="1px" bg={colors.line} />
      <BoxSaveArea>
        <BoxFlatlist
          numColumns={4}
          data={dataMenu}
          horizontal={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <MenuItem item={item} image={item.image} />}
        />
      </BoxSaveArea>
      <Box w h="1px" bg={colors.line} />
      <Box w p="16px">
        <Images
          w="100%"
          h="50%"
          r="8px"
          resizeMode="contain"
          source={require('./assets/banner.jpg')}
        />
        <Font fontSize={baseSize.xl}>
          Special hari ini, pesan lewat GrabMart
        </Font>
        <Font fontSize={baseSize.md}>Lemonilo Menuju Generasi Hebat</Font>
      </Box>

      {dataNews.map((item, idx) => (
        <Box
          f={1 / 2}
          key={idx}
          w="50%"
          h="300px"
          p="16px"
          m="4px"
          style={styles.border}
          r="8px">
          <Font>{item.title}</Font>
          <Font>{item.subtitle}</Font>
        </Box>
      ))}
    </BoxSaveArea>
  );
};

const styles = StyleSheet.create({
  tilt: {
    transform: [{rotate: '-15deg'}],
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: colors.line,
    borderStyle: 'solid',
  },
  border: {
    borderWidth: 1,
    borderColor: colors.line,
    borderStyle: 'solid',
  },
});

export default App;

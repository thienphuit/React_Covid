import React from 'react';
import {StyleSheet, View} from 'react-native';

/*
Define props 
block: flex view
margin
padding
height
borderWidth
borderColor
*/

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
const Block = ({
  paddingHorizontal,
  paddingVertical,
  justifyContent,
  middle,
  block,
  centered,
  margin,
  padding,
  width,
  height,
  border,
  borderWidth,
  borderColor,
  style,
  borderRadius,
  direction,
  color,
  children,
  shadow,
  ...props
}) => {
  const styleConponent = [
    paddingHorizontal && {paddingHorizontal},
    paddingVertical && {paddingVertical},
    justifyContent && {justifyContent},
    middle && {alignItems: 'center'},
    block && styles.block,
    margin && {margin},
    padding && {padding},
    width && {width},
    height && {height},
    centered && {justifyContent: 'center'},
    border && {borderWidth: 1, borderColor: 'gray'},
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    direction && {flexDirection: direction},
    borderRadius && {borderRadius},
    color && {backgroundColor: color},
    shadow && {
      shadowOpacity: 0.12,
      shadowRadius: 15,
      shadowColor: 'gray',
      shadowOffset: {height: 0, width: 0},
    },
    style,
  ];
  return (
    <View style={styleConponent} {...props}>
      {children}
    </View>
  );
};
export default Block;

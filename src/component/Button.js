import React, {Children} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const Button = ({
  block,
  margin,
  padding,
  height,
  border,
  width,
  borderWidth,
  borderColor,
  borderRadius,
  color,
  fontSize,
  textColor,
  style,
  textStyle,
  centered,
  middle,
  children,
  position,
  shadow,
  ...props
}) => {
  const styleComponent = [
    block && styles.block,
    margin && {margin},
    padding && {padding},
    width && {width},
    height && {height},
    border && {borderWidth: 1, borderColor: ' gray'},
    borderWidth && {borderWidth},
    borderColor && {borderColor},
    borderRadius && {borderRadius},
    color && {backgroundColor: color},
    centered && {justifyContent: 'center'},
    color && {backgroundColor: color},
    middle && {alingItems: 'center'},
    position && {position},
    shadow && {
        shadowOpacity: 0.12,
        shadowRadius: 15,
        shadowColor: 'gray',
        shadowOffset: {height: 0, width: 0},
      },
    style,
  ];
  const styleText = [
    fontSize && {fontSize},
    textColor && {color: textColor},
    textStyle,
  ];
  if (typeof children == 'string') {
    return (
      <TouchableOpacity style={styleComponent} {...props}>
        <Text style={styleText}>{children}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styleComponent} {...props}>
      {children}
    </TouchableOpacity>
  );
};
export default Button;

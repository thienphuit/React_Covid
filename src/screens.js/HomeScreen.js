import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Block from '../component/Block';
import TextView from '../component/TextView';
import Button from '../component/Button';
import {Colors} from '../constant/color';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';


const W = Dimensions.get('window').width;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 300,
  },
  wapperimage: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: W,
    height: 300,
  },
  containerHeader: {
    position: 'relative',
  },
  doctor: {
    position: 'absolute',
    //alignSelf: 'center',
    top: 100,
    left: 60,
  },
  bg: {
    position: 'absolute',
    width: 1000,
    height: 1000,
    top: -(970 - W / 2),
    alignSelf: 'center',
    borderRadius: 1000,
    overflow: 'hidden',
  },
  map: {
    borderRadius: 8,
    marginTop: 15,
    padding: 15,
  },
});

const ItemDot = ({color1, color2, number, title}) => {
  return (
    <Block block>
      <Block middle>
        <Block width={30} height={30} middle centered color={color1}>
          <Block
            width={15}
            height={15}
            borderWidth={4}
            borderRadius={20}
            borderColor={color2}
          />
        </Block>
        <TextView padding={15} color={color2} h2>
          {number}
        </TextView>
        <TextView color="gray" h6>
          {title}
        </TextView>
      </Block>
    </Block>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <Block block color="#fafafa">
      <Block height={300} color={Colors.blue} style={styles.bg}>
        <Block style={styles.wapperimage}>
          <Image
            style={styles.doctor}
            source={require('../images/drcorona.png')}
          />
        </Block>
      </Block>
      <Block style={styles.containerHeader}>
        <Image style={styles.img} source={require('../images/virus.png')} />
      </Block>
      <Block>
        <Button color="#fff" border margin={10} borderRadius={30}>
          <Block direction="row" paddingHorizontal={15} middle>
            <Feather name="map-pin" size={16} color={Colors.blue1} />
            <Block block padding={10}>
              <TextView h6>VietNam</TextView>
            </Block>
            <Feather name="chevron-down" size={16} color={Colors.blue1} />
          </Block>
        </Button>
      </Block>
      <Block padding={10}>
        <Block padding={10} justifyContent="space-between" direction="row">
          <Block>
            <TextView h6>Case Update</TextView>
            <TextView>Update March 28</TextView>
          </Block>
          <Button textColor={Colors.blue1} onPress={() => {navigation.navigate('Detail')}}>See details</Button>
        </Block>
        <Block
          color="#fff"
          borderRadius={8}
          shadow
          padding={10}
          direction="row"
          style={{marginTop: 10}}>
          <ItemDot
            color1={Colors.carot_op}
            color2={Colors.carot}
            number={1046}
            title={'Infected'}
          />
          <ItemDot
            color1={Colors.red_op}
            color2={Colors.red}
            number={46}
            title={'Deaths'}
          />
          <ItemDot
            color1={Colors.green_op}
            color2={Colors.green}
            number={1000}
            title={'Recovered'}
          />
        </Block>
        <Block padding={10} style={{marginTop: 10}}>
          <Block direction="row" justifyContent="space-between">
            <TextView bold h6>
              Spread of Virus
            </TextView>
            <Button textColor={Colors.blue1}>See details</Button>
          </Block>
          <Block color="#fff" style={styles.map}>
            <Image source={require('../images/map.png')} />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default HomeScreen;

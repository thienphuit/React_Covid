import React from 'react';
import {StyleSheet, Image, Dimensions} from 'react-native';
import Block from '../component/Block';
import {Colors} from '../constant/color';
import TextView from '../component/TextView';
import Button from '../component/Button';
import Feacher from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';

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
    left: -30,
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
  img_item: {
    width: (1.2 * W) / 3,
    height: (1.2 * W) / 3,
    // position:'absolute',
  },
  field_con: {
    position: 'absolute',
    width: (2 * W) / 3,
    left: W / 3 + 10,
    paddingVertical: 10,
    top: 10,
  },
  textDesc: {
    lineHeight: 20,
    marginTop: 10,
    maxWidth: (2 * W) / 3.4,
  },
  btnRight: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});

const slides = {
  headache: require('../images/headache.png'),
  caugh: require('../images/caugh.png'),
  fever: require('../images/fever.png'),
  wear_mask: require('../images/wear_mask.png'),
  wear_hands: require('../images/wash_hands.png'),
};

const ItemImageSignal = ({title, linkImage}) => {
  return (
    <Block block centered>
      <Button shadow middle color="#fff" padding={10} borderRadius={12}>
        <Image source={linkImage} />
        <TextView bold center>
          {title}
        </TextView>
      </Button>
    </Block>
  );
};

const ItemField = ({title, icon, desc}) => {
  return (
    <Button>
      <Block
        paddingHorizontal={10}
        direction="row"
        borderRadius={10}
        shadow
        color="#fff"
        padding={6}
        style={{marginTop: 10}}>
        <Image style={styles.img_item} resizeMode="contain" source={icon} />
        <Block padding={10} style={styles.field_con}>
          <TextView size={16} bold>
            {title}
          </TextView>
          <TextView style={styles.textDesc}>{desc}</TextView>
        </Block>
        <Block style={styles.btnRight}>
        <Button >
          <Feacher name="chevron-right" color={Colors.blue} size={30} />
        </Button>
        </Block>
      </Block>
    </Button>
  );
};

const DetailScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Block block color="#f1f1f1">
        <Block height={300} color={Colors.blue} style={styles.bg}>
          <Block style={styles.wapperimage}>
            <Image
              style={styles.doctor}
              source={require('../images/coronadr.png')}
            />
          </Block>
        </Block>
        <Block style={styles.containerHeader}>
          <Image style={styles.img} source={require('../images/virus.png')} />
        </Block>
        <Block padding={10}>
          <TextView h6>Symptomps</TextView>
          <Block direction="row" paddingVertical={10}>
            <ItemImageSignal title="Headache" linkImage={slides.headache} />
            <Block width={10} />
            <ItemImageSignal title="Caugh" linkImage={slides.caugh} />
            <Block width={10} />
            <ItemImageSignal title="fever" linkImage={slides.fever} />
          </Block>
        </Block>
        <Block padding={10}>
          <TextView h6>Preventions</TextView>
          <Block>
            <ItemField
              title="Wear face mask"
              icon={slides.wear_mask}
              desc="Since the start of the cornavirus outbreak some places have fully embraced wearing face masks, and anyone caught without  one risks becoming a social pariah"
            />
            <ItemField
              title="Wash your hands"
              desc="These disavses include gastrointestinal infections,
              such Salmonella, and respiratory infections, such as influenza."
              icon={slides.wear_hands}
            />
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
};
export default DetailScreen;

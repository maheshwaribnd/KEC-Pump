import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {useRoute} from '@react-navigation/native';
import Header from '../../../../Components/Header/Header';
import Progressbar from '../../Progressbar';
import {useSelector} from 'react-redux';

const MainQuestion4 = () => {
  const route = useRoute();
  const selector = useSelector(state => state.APIData);
  const questionData = selector?.data[7];

  // const questionDataa = route.params.questionData;
  // const count = route.params.count;
  // const progress = route.params.progress;

  const buttonFunction = () => {
    // setCount(count + 1);
    // getProgress();
    console.log('select one option');
  };

  const renderItemName = item => {
    return (
      <View style={styles.viewWrapper}>
        <Text style={{color: '#fff', alignSelf: 'center'}}>{item?.answer}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      source={require('../../../../Images/background.png')}
      style={{flex: 1}}>
      <Header />
      <View style={{marginHorizontal: 20}}>
        {/* <Progressbar
          progress={progress}
          count={count}
          selectedOption={'white'}
        /> */}
      </View>

      <View style={{flex: 1}}>
        <View style={{marginHorizontal: 15}}>
          {/* <Text style={{color: '#fff', position: 'absolute', right: 1}}>
            {count}/15
          </Text> */}
          <View style={{marginTop: HEIGHT(7)}}>
            <View>
              <Text style={styles.mainTitle}>
                {questionData?.question_title}
              </Text>
            </View>

            <FlatList
              data={questionData?.answers}
              horizontal={false}
              renderItem={({item}) => renderItemName(item)}
              numColumns={3}
            />

            <View style={styles.button}>
              <CustomButton
                btnText="GO TO SUBMERSIBILITY"
                onpress={() => buttonFunction()}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MainQuestion4;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  forView: {
    borderWidth: 1,
    padding: 10,
    width: WIDTH(40),
    borderColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  viewWrapper: {
    borderWidth: 1,
    padding: 10,
    width: WIDTH(30),
    borderColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: HEIGHT(7),
  },

  button: {
    position: 'absolute',
    top: HEIGHT(70),
    left: 9,
  },

  view1: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    borderRadius: 23,
    marginBottom: 10,
    marginTop: 10,
  },

  selected: {
    backgroundColor: '#fff',
  },

  selectedText: {
    color: 'black',
  },
});

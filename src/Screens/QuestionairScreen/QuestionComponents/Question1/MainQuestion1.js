import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';
import React, {useState} from 'react';
import COLOR from '../../../../Config/color.json';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT} from '../../../../Config/AppConst';
import InputBtn from '../../../../Components/InputBtn/InputBtn';
import {useSelector} from 'react-redux';

const MainQuestion1 = ({count, setCount, loader, getProgress}) => {
  const selector = useSelector(state => state.APIData);
  const questionData = selector?.data[0];

  const [selectedButton, setSelectedButton] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  return (
    <View style={{flex: 1}}>
      {loader ? (
        <ActivityIndicator
          size="large"
          color={COLOR.white}
          style={styles.loader}
        />
      ) : (
        <View style={{marginHorizontal: 30}}>
          <Text style={{color: '#fff', position: 'absolute', right: 1}}>
            {count}/15
          </Text>
          <View style={{marginTop: HEIGHT(20)}}>
            <View>
              <Text style={styles.mainTitle}>
                {questionData?.question_title}
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <InputBtn
                title={questionData?.answers[0]?.answer}
                isSelected={selectedButton === 1}
                onPress={() => {
                  setSelectedButton(1);
                }}
              />
              <InputBtn
                title={questionData?.answers[1]?.answer}
                isSelected={selectedButton === 2}
                onPress={() => {
                  setSelectedButton(2);
                }}
              />
              <InputBtn
                title={questionData?.answers[2]?.answer}
                isSelected={selectedButton === 3}
                onPress={() => {
                  setSelectedButton(3);
                }}
              />
            </View>

            <View style={styles.button}>
              <CustomButton
                btnText="GO TO FLUID"
                onpress={() => buttonFunction()}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default MainQuestion1;

export const styles = StyleSheet.create({
  forCount: {
    color: '#fff',
    position: 'absolute',
    right: 1,
  },

  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  wrapper: {
    marginTop: HEIGHT(20),
  },

  button: {
    position: 'absolute',
    top: HEIGHT(57),
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

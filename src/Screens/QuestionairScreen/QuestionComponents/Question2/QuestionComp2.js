import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';

const QuestionComp2 = ({count, setCount, getProgress, questionData}) => {
  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(20)}}>
          <View>
            <Text style={styles.title1}>{questionData[0]?.question_title}</Text>
          </View>

          <Text style={{color: '#fff'}}>
            ( please providethe informationin English. )
          </Text>

          <View style={styles.inputView}>
            <TextInput
              placeholderTextColor={'#fff'}
              placeholder="Enter the flood here."
              multiline
              style={styles.input}
            />
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText="Go to Hazard Potential"
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuestionComp2;

const styles = StyleSheet.create({
  title1: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  inputView: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 9,
    marginTop: HEIGHT(5),
    borderRadius: 5,
  },

  input: {
    width: WIDTH(80),
  },

  button: {
    position: 'absolute',
    top: HEIGHT(57),
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT} from '../../../../Config/AppConst';
import InputBtn from '../../../../Components/InputBtn/InputBtn';

const QuestionComp7 = ({count, setCount, getProgress, questionData}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  return (
    <View>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(10)}}>
          <Text style={styles.mainTitle}>
            {questionData[0]?.question_title}
          </Text>
        </View>

        <View style={{marginTop: 9}}>
          <Text style={{color: '#fff'}}>
            If the pump is not permanently filled with or surrounded by the
            pumped medium, a self-priming pump is required for venting the
            suction line and sucking in the medium in order to enable a
            permanent flow - the pump should also have to convey very high gas
            contents.
          </Text>
        </View>

        <View style={{marginTop: HEIGHT(5)}}>
          <InputBtn
            title={questionData[0]?.answers[0]?.answer}
            isSelected={selectedButton === 1}
            onPress={() => {
              setSelectedButton(1);
            }}
          />
          <InputBtn
            title={questionData[0]?.answers[1]?.answer}
            isSelected={selectedButton === 2}
            onPress={() => {
              setSelectedButton(2);
            }}
          />
        </View>

        <View style={styles.button}>
          <CustomButton btnText="Go to installation" onpress={buttonFunction} />
        </View>
      </View>
    </View>
  );
};

export default QuestionComp7;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  button: {
    position: 'absolute',
    top: HEIGHT(77),
  },
});

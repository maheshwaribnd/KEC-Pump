import {Text, ActivityIndicator, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT} from '../../../../Config/AppConst';
import InputBtn from '../../../../Components/InputBtn/InputBtn';

const QuestionComp3 = ({
  count,
  setCount,
  loader,
  getProgress,
  questionData,
}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  return (
    <View>
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
          <View style={{marginTop: HEIGHT(16)}}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: 16,
                  fontFamily: DM_sans_Bold,
                }}>
                {questionData[0]?.question_title}
              </Text>
            </View>
            <View style={{marginTop: 10}}>
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
              <InputBtn
                title={questionData[0]?.answers[2]?.answer}
                isSelected={selectedButton === 3}
                onPress={() => {
                  setSelectedButton(3);
                }}
              />
              <InputBtn
                title={questionData[0]?.answers[3]?.answer}
                isSelected={selectedButton === 4}
                onPress={() => {
                  setSelectedButton(4);
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: HEIGHT(61),
              }}>
              <CustomButton
                btnText="Go to pump capacity"
                onpress={buttonFunction}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default QuestionComp3;

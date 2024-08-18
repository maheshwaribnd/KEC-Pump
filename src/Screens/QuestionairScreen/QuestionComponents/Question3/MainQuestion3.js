import { Text, ActivityIndicator, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { DM_sans_Bold, HEIGHT } from '../../../../Config/AppConst';
import InputBtn from '../../../../Components/InputBtn/InputBtn';
import { useDispatch, useSelector } from 'react-redux';
import { AnswerDataFunction } from '../../../../Redux/Reducers/Question3Data';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import Snackbar from 'react-native-snackbar';

const MainQuestion3 = ({ count, setCount, loader, getProgress }) => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.APIData);
  const questionData = selector?.data[2];

  const [selectedButton, setSelectedButton] = useState(null);

  const buttonFunction = () => {
    if (selectedButton == '') {
      Snackbar.show({
        text: 'Select atleast one option',
        backgroundColor: '#D1264A',
        duration: Snackbar.LENGTH_SHORT,
      });
    } else {
      dispatch(AnswerDataFunction({ answerID: selectedButton }))
      setCount(count + 1);
      getProgress();
    }
  };

  // console.log('selectedButton', selectedButton);

  return (
    <View>
      {loader ? (
        <ActivityIndicator
          size="large"
          color={COLOR.white}
          style={styles.loader}
        />
      ) : (
        <View style={{ marginHorizontal: 30 }}>
          <Text style={{ color: '#fff', position: 'absolute', right: 1 }}>
            {count}/15
          </Text>
          <View style={{ marginTop: HEIGHT(16) }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: 16,
                  fontFamily: DM_sans_Bold,
                }}>
                {questionData?.question_title}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <InputBtn
                title={questionData?.answers[0]?.answer}
                isSelected={selectedButton === 4}
                onPress={() => {
                  setSelectedButton(questionData?.answers[0]?.answer_id);
                }}
              />
              <InputBtn
                title={questionData?.answers[1]?.answer}
                isSelected={selectedButton === 5}
                onPress={() => {
                  setSelectedButton(questionData?.answers[1]?.answer_id);
                }}
              />
              <InputBtn
                title={questionData?.answers[2]?.answer}
                isSelected={selectedButton === 8}
                onPress={() => {
                  setSelectedButton(questionData?.answers[2]?.answer_id);
                }}
              />
              <InputBtn
                title={questionData?.answers[3]?.answer}
                isSelected={selectedButton === 9}
                onPress={() => {
                  setSelectedButton(questionData?.answers[3]?.answer_id);
                }}
              />
            </View>

            <View
              style={{
                position: 'absolute',
                top: HEIGHT(61),
              }}>
              {selectedButton === 4 || selectedButton === 5 ? (
                <CustomButton
                  btnText="GO TO VISCOSITY"
                  onpress={() => buttonFunction()}
                />
              ) : (
                <CustomButton
                  btnText="GO TO SEALLESS"
                  onpress={() => buttonFunction()}
                />
              )}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default MainQuestion3;

export const styles = StyleSheet.create({});

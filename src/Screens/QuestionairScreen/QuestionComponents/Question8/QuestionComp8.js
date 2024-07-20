import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT} from '../../../../Config/AppConst';

const QuestionComp8 = ({count, setCount, getProgress, questionData}) => {
  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(5)}}>
          <Text style={styles.mainTitle}>
            {questionData[0]?.question_title}
          </Text>
        </View>

        {/* 1 */}
        <View style={styles.bgs}>
          <Image source={require('../../../../Images/motor.png')} />
          <Text style={styles.forText}>
            {questionData[0]?.answers[0]?.answer}
          </Text>
        </View>

        {/* 2 */}
        <View style={styles.bgs}>
          <Image source={require('../../../../Images/piston.png')} />
          <Text style={styles.forText}>
            {questionData[0]?.answers[1]?.answer}
          </Text>
        </View>

        {/* 3 */}
        <View style={styles.bgs}>
          <Image source={require('../../../../Images/water.png')} />
          <Text style={{color: '#fff', alignSelf: 'center', marginLeft: 20}}>
            {questionData[0]?.answers[2]?.answer}
          </Text>
        </View>

        {/* 4 */}
        <View style={styles.bgs}>
          <Image source={require('../../../../Images/injection.png')} />
          <Text style={styles.forText}>
            {questionData[0]?.answers[3]?.answer}
          </Text>
        </View>

        <View style={styles.button}>
          <CustomButton btnText="Go to industry" onpress={buttonFunction} />
        </View>
      </View>
    </ScrollView>
  );
};

export default QuestionComp8;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 6,
    fontFamily: DM_sans_Bold,
  },

  bgs: {
    flexDirection: 'row',
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 8,
    borderRadius: 5,
  },

  forText: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 20,
  },

  button: {
    marginTop: HEIGHT(4),
    marginBottom: HEIGHT(3),
  },
});

import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {DM_sans_Bold, HEIGHT, WIDTH} from '../../../../Config/AppConst';
import {dataFlat} from '../../../../Array/Array';

const QuestionComp11 = ({count, setCount, getProgress, questionData}) => {
  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  const renderItemName = item => {
    return (
      <View style={styles.forView}>
        <Text style={{color: '#fff', alignSelf: 'center'}}>{item?.answer}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(7)}}>
          <View>
            <Text style={styles.mainTitle}>
              {questionData[0]?.question_title}
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#fff'}}>
              Select additional requirements for which you can provide further
              information:
            </Text>
          </View>

          <FlatList
            data={questionData[0].answers}
            horizontal={false}
            renderItem={({item}) => renderItemName(item)}
            numColumns={2}
          />

          <View style={styles.button}>
            <CustomButton
              btnText="Go to gas content"
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default QuestionComp11;

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

  button: {
    marginVertical: HEIGHT(4),
  },
});

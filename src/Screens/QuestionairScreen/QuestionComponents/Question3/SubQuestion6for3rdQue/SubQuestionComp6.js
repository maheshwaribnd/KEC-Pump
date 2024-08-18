import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../../Config/AppConst';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const SubQuestionComp6 = ({
  count,
  setCount,
  getProgress,
  // questionData,
  // questionDataforHigh,
}) => {
  const navigation = useNavigation();

  const IDselector = useSelector(state => state.AnswerData);
  const Dataselector = useSelector(state => state.APIData);
  // const questionDataforLow = Dataselector?.data[6];
  const questionDataforHigh = Dataselector?.data[12];
  console.log('questionDataforHigh', questionDataforHigh);
  // console.log('subQues4questionData', questionDataforLow);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();

    // navigation.navigate('mainquestion4', {questionData: questionData[0]});
  };

  const [value1, setValue1] = useState(null);

  const data1 = [
    { label: 'm', value: '1' },
    { label: 'ft', value: '2' },
    { label: 'bar', value: '3' },
    { label: 'psi', value: '4' },
  ];

  const data = [
    { label: 'Chemical', value: '1' },
    { label: 'Construction', value: '2' },
    { label: 'Food & pharmaceutical', value: '3' },
    { label: 'Refueling & fuel storage depots', value: '4' },
    { label: 'Marine / shipbuilding', value: '5' },
    { label: 'Mining', value: '6' },
    { label: 'Oil, gas & petrochemical', value: '7' },
    { label: 'Pulp & paper', value: '8' },
    { label: 'Refrigeration & climate', value: '5' },
    { label: 'Surface & component cleaning', value: '6' },
    { label: 'Water treatment & supply', value: '7' },
    { label: 'Other industry', value: '8' },
  ];

  return (
    <View>
      <View style={{ marginHorizontal: 21 }}>
        <Text style={{ color: '#fff', position: 'absolute', right: 1 }}>
          {count}/15
        </Text>
        <View style={{ marginTop: HEIGHT(5) }}>
          <Text style={styles.mainTitle}>
            {questionDataforHigh?.question_title}
          </Text>
        </View>

        <View style={styles.viewWrapper}>
          <View style={styles.inputView}>
            <Dropdown
              data={data1}
              maxHeight={300}
              labelField="label"
              valueField="value"
              iconColor="#fff"
              style={styles.dropdown}
              containerStyle={styles.dropdownContainer2}
              itemTextStyle={styles.itemText}
              value={value1}
              onChange={item => {
                setValue1(item.value);
              }}
              selectedTextStyle={styles.selectedTextStyle}
              placeholder="m"
              placeholderStyle={styles.selectedTextStyle}
              placeholderTextColor={'#fff'}
            />
            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity style={styles.circle}>
            <Text style={{ color: '#fff' }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.circle}>
            <Text style={{ color: '#fff' }}>--</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <CustomButton
            btnText="GO TO INSTALLATION"
            onpress={() => buttonFunction()}
          />
        </View>
      </View>
    </View>
  );
};

export default SubQuestionComp6;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  viewWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(50),
    borderColor: '#fff',
    borderRadius: 10,
  },

  dropdown: {
    borderColor: '#fff',
    fontSize: FONTSIZE(2),
    color: '#fff',
    width: WIDTH(83),
    height: 50,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer: {
    width: WIDTH(83),
    height: 260,
  },

  dropdownContainer2: {
    width: 135,
    height: 110,
  },

  itemText: {
    fontSize: 14,
  },

  input: {
    width: WIDTH(30),
    color: '#fff',
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: FONTSIZE(2),
    paddingLeft: 3,
  },

  dropdownContainer1: {
    width: 135,
  },

  circle: {
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: 50,
    borderColor: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  forText: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 20,
  },

  selectedTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontSize: FONTSIZE(2),
    paddingLeft: 3,
  },

  button: {
    position: 'absolute',
    top: HEIGHT(77),
    left: 9,
  },
});

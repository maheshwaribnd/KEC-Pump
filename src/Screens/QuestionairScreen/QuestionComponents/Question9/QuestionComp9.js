import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../Config/AppConst';
import {Dropdown} from 'react-native-element-dropdown';

const QuestionComp9 = ({count, setCount, getProgress, questionData}) => {
  const [value, setValue] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  const data = [
    {label: 'Chemical', value: '1'},
    {label: 'Construction', value: '2'},
    {label: 'Food & pharmaceutical', value: '3'},
    {label: 'Refueling & fuel storage depots', value: '4'},
    {label: 'Marine / shipbuilding', value: '5'},
    {label: 'Mining', value: '6'},
    {label: 'Oil, gas & petrochemical', value: '7'},
    {label: 'Pulp & paper', value: '8'},
    {label: 'Refrigeration & climate', value: '5'},
    {label: 'Surface & component cleaning', value: '6'},
    {label: 'Water treatment & supply', value: '7'},
    {label: 'Other industry', value: '8'},
  ];

  return (
    <View>
      <View style={{marginHorizontal: 21}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(26)}}>
          <Text style={styles.mainTitle}>
            {questionData[0]?.question_title}
          </Text>
        </View>

        <View style={styles.inputView}>
          <Dropdown
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            iconColor="#fff"
            style={styles.dropdown}
            containerStyle={styles.dropdownContainer}
            itemTextStyle={styles.itemText}
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
            selectedTextStyle={styles.selectedTextStyle}
            placeholder="Chemical"
            placeholderStyle={styles.selectedTextStyle}
            placeholderTextColor={'#fff'}
          />
        </View>
        
        <View style={styles.button}>
          <CustomButton btnText="Go to drive" onpress={buttonFunction} />
        </View>
      </View>
    </View>
  );
};

export default QuestionComp9;

const styles = StyleSheet.create({
  mainTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: DM_sans_Bold,
  },

  inputView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
    height: 50,
    width: WIDTH(88),
    marginTop: HEIGHT(4),
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

  itemText: {
    fontSize: 14,
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

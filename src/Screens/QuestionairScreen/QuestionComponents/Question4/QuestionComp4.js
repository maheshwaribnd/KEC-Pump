import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../../../Components/CustomButton/CustomButton';
import {
  DM_sans_Bold,
  FONTSIZE,
  HEIGHT,
  WIDTH,
} from '../../../../Config/AppConst';
import {Dropdown} from 'react-native-element-dropdown';

const QuestionComp4 = ({count, setCount, getProgress, questionData}) => {
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);

  const buttonFunction = () => {
    setCount(count + 1);
    getProgress();
  };

  const data1 = [
    {label: 'mPa.s(cP)', value: '1'},
    {label: 'mm2/sec(cSt)', value: '2'},
  ];

  const data2 = [
    {label: 'm3/h', value: '1'},
    {label: 'I/min (dm3/h)', value: '2'},
    {label: 'gal/min (US)', value: '3'},
  ];

  return (
    <View style={{flex: 1}}>
      <View style={{marginHorizontal: 30}}>
        <Text style={{color: '#fff', position: 'absolute', right: 1}}>
          {count}/15
        </Text>
        <View style={{marginTop: HEIGHT(10)}}>
          <View>
            <Text style={styles.mainTitle}>
              {questionData[0]?.question_title}
            </Text>
          </View>
          <View style={{marginTop: 10}}>
            <Text style={{color: '#fff'}}>
              ( We determined this typical viscosity for this fluid/medium. Is
              it correct? If not, please enter your specific value. )
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
                containerStyle={styles.dropdownContainer1}
                itemTextStyle={styles.itemText}
                value={value1}
                onChange={item => {
                  setValue1(item.value);
                }}
                selectedTextStyle={styles.selectedTextStyle}
                placeholder="mPa.s(cP)"
                placeholderStyle={styles.selectedTextStyle}
                placeholderTextColor={'#fff'}
              />
              <TextInput style={styles.input} />
            </View>
            <TouchableOpacity style={styles.circle}>
              <Text style={{color: '#fff'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <Text style={{color: '#fff'}}>--</Text>
            </TouchableOpacity>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{color: '#fff'}}>
              Examples in mPas: Water ⁓ 1 , Oil ⁓ 200 , Yoghurt ⁓ 150, Honey ⁓
              10.000 , Tar ⁓ 100.000
            </Text>
          </View>
          {/* //2 */}
          <View>
            <Text style={[styles.mainTitle, {marginTop: HEIGHT(10)}]}>
              {questionData[1]?.question_title}
            </Text>
          </View>

          <View style={styles.viewWrapper}>
            <View style={styles.inputView}>
              <Dropdown
                data={data2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                iconColor="#fff"
                style={styles.dropdown}
                containerStyle={styles.dropdownContainer2}
                itemTextStyle={styles.itemText}
                value={value2}
                onChange={item => {
                  setValue2(item.value);
                }}
                selectedTextStyle={styles.selectedTextStyle}
                placeholder="m3/h"
                placeholderStyle={styles.selectedTextStyle}
                placeholderTextColor={'#fff'}
              />
              <TextInput style={styles.input} />
            </View>

            <TouchableOpacity activeOpacity={0.7} style={styles.circle}>
              <Text style={{color: '#fff'}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.circle}>
              <Text style={{color: '#fff'}}>--</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <CustomButton
              btnText="Go to pump capacity"
              onpress={buttonFunction}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuestionComp4;

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
    marginTop: 18,
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
    fontSize: FONTSIZE(1.2),
    color: '#fff',
    width: WIDTH(22),
    paddingLeft: 3,
    height: 47,
    paddingRight: 3,
    borderRadius: 10,
  },

  dropdownContainer1: {
    width: 135,
  },

  dropdownContainer2: {
    width: 135,
    height: 170,
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
    fontSize: FONTSIZE(1.4),
    paddingLeft: 3,
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

  button: {
    position: 'absolute',
    top: HEIGHT(67),
  },
});
